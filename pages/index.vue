<template>
  <client-only>
    <div class="__dtb">
      <!-- eslint-disable -->
      <ProjectList
        v-if="mode === 0"
        :projects="projects"
        @showProject="showProject($event)"
        @back="showProjects()"
      />

      <ProjectTracks
        v-if="mode === 1"
        :project="project"
        :playing="playing"
        :recording="recording"
        :contextCurrentTime="contextCurrentTime"
        @update="updateProject($event)"
        @showPad="showPad($event)"
        @back="showProjects()"
        @removeHits="removeHits()"
      />

      <Pad
        v-if="mode === 2"
        :project="project"
        :track="track"
        :playing="playing"
        :recording="recording"
        :contextCurrentTime="contextCurrentTime"
        @hitStart="hitStart($event)"
        @hitEnd="hitEnd($event)"
        @close="showProject()"
        @preview="playSampleById($event)"
      />

      <Rec
        v-if="mode === 1 || mode === 2"
        :mode="mode"
        :project="project"
        :playing="playing"
        :recording="recording"
        :recCountdownText="recCountdownText"
        :contextCurrentTime="contextCurrentTime"
        @play="play()"
        @stop="stop()"
        @rec="rec()"
        @update="updateProject($event)"
        @removeHits="removeHits()"
      />
      <!-- eslint-enable -->
    </div>
  </client-only>
</template>

<script>
import { availableSamples, defaultProjects, beepSample } from '@/assets/data/pad_config'

export default {
  data () {
    const currentProjectIdx = 0

    return {
      // mode: 0 => track mode, 1 => pad mode
      mode: 0,
      projects: [],
      currentProjectIdx,
      currentTrackIdx: 0,

      playing: false,
      recording: false,
      context: null,
      analyser: null,
      gainNode: null,
      contextCurrentTime: 0,
      // hittingSources: {}

      prewriteInterval: null,
      prewriteTime: 0,

      recCountdownText: 0,
      recCountdownPlayInterval: null,
      minusRecCountdownTextInterval: null
    }
  },
  head () {
    return {
      script: [
        {
          src: 'https://kit.fontawesome.com/89064da233.js'
        }
      ]
    }
  },
  computed: {
    project () {
      return this.projects[this.currentProjectIdx]
    },
    tracks () {
      return this.project?.tracks || []
    },
    track () {
      return this.tracks[this.currentTrackIdx]
    }
  },

  watch: {
    projects: {
      deep: true,
      handler (val) {
        window.localStorage.setItem('projects', JSON.stringify(this.projects))
      }
    },
    playing: {
      immediate: true,
      handler (val) {
        if (val) {
          window.requestAnimationFrame(this.updateContextCurrentTime)
        }
      }
    }
  },

  async mounted () {
    this.projects = JSON.parse(window.localStorage.getItem('projects')) || JSON.parse(JSON.stringify(defaultProjects))
    // this.projects = JSON.parse(JSON.stringify(defaultProjects))
    this.initAudio()
    await this.loadSamples()
  },

  methods: {
    // 這邊ios會在跳離app之後出現問題
    initAudio () {
      if (this.context) {
        this.context.suspend()
      }

      this.prewriteTime = 0

      // audio api
      this.context = new (window.AudioContext || window.webkitAudioContext)()
      this.analyser = this.context.createAnalyser()
      this.gainNode = this.context.createGain()
      this.analyser.connect(this.context.destination)
      this.gainNode.gain.value = 0.25
      this.gainNode.connect(this.analyser)
    },

    // 載入 project 需要的 samples
    async loadSamples () {
      // this.tracks
      for (const track of this.tracks) {
        for (const sampleId of track.samples) {
          if (sampleId) {
            await this.loadSample(sampleId)
          }
        }
      }
    },

    // 載入個別 sample
    loadSample (sampleId) {
      return new Promise((resolve, reject) => {
        const sample = availableSamples.find(item => item.id === sampleId)

        // 不重複載入
        if (sample && sample.body) {
          resolve(true)
          return
        }

        const path = sample?.source

        if (path) {
          // window.fetch(path)
          //   .then(response => response.arrayBuffer())
          //   .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
          //   .then(audioBuffer => {
          //     sample['audioBuffer'] = audioBuffer
          //     resolve(true)
          //   })
          //   .catch(err => {
          //     reject(err)
          //   })

          // safari support
          window.fetch(path)
            .then(response => response.arrayBuffer())
            .then((arrayBuffer) => {
              this.context.decodeAudioData(arrayBuffer, (audioBuffer) => {
                sample.audioBuffer = audioBuffer
                resolve(true)
              }, (err) => {
                reject(err)
              })
            })
            .catch((err) => {
              reject(err)
            })
        } else {
          reject(new Error('no such sample'))
        }
      })
    },

    hitStart (keyIdx) {
      const sample = this.getSampleByKeyIdx(keyIdx)

      if (!sample) {
        return
      }

      this.playSample(sample)

      if (this.recording) {
        const currentTime = this.contextCurrentTime

        const speed = 60 / this.project.speed
        const countdownTime = speed * this.project.beats

        const measureTime = speed * this.project.beats
        const numMeasures = Math.floor(currentTime / measureTime) % this.project.measures
        const pos = currentTime % measureTime / measureTime

        this.track.hits.push({
          sample: keyIdx,
          measure: numMeasures,
          pos
        })

        // 超過totalTime一半的話是沒有辦法被prewrite寫入的時間，因此需要手動補上
        // 雖然不是很好的解法，但目前看起來只能先這樣
        const totalTime = speed * this.project.beats * this.project.measures

        if (currentTime % totalTime > totalTime / 2) {
          // this.playSampleById(sample.id, currentTime + totalTime)
          this.playSampleById(sample.id, currentTime + totalTime + countdownTime)
        }
      }

      // this.hittingSources[keyIdx] = source
    },
    hitEnd (keyIdx) {
      // 先不要放開就停的功能好了，效果不好
      // if (this.hittingSources[keyIdx]) {
      //   this.hittingSources[keyIdx].stop()
      //   delete this.hittingSources[keyIdx]
      // }
    },

    getSampleByKeyIdx (keyIdx) {
      const sampleId = this.track.samples[keyIdx]
      return availableSamples.find(item => item.id === sampleId)
    },

    playSampleById (sampleId, time) {
      if (sampleId) {
        const sample = availableSamples.find(item => item.id === sampleId)
        this.playSample(sample, time)
      }
    },
    async playSample (sample, time) {
      if (!sample.audioBuffer) {
        await this.loadSample(sample.id)
      }

      const audioBuffer = sample.audioBuffer
      const source = this.context.createBufferSource()
      source.buffer = audioBuffer
      source.connect(this.context.destination)
      source.start(time)
    },

    showProjects () {
      this.mode = 0
    },
    showProject (projectIdx) {
      this.mode = 1

      if (!isNaN(projectIdx)) {
        this.currentProjectIdx = projectIdx
      }
    },
    showPad (trackIdx) {
      this.currentTrackIdx = trackIdx
      this.mode = 2
    },

    updateProject (project) {
      this.projects[this.currentProjectIdx].name = project.name
      this.projects[this.currentProjectIdx].measures = project.measures
      this.projects[this.currentProjectIdx].speed = project.speed
      this.projects[this.currentProjectIdx].beats = project.beats
    },

    play () {
      // reset context to get current currentTime
      if (!this.recording) {
        this.initAudio()
      }
      // this.initAudio()

      this.playing = true
      this.prewrite(true)
    },
    stop () {
      this.recording = this.playing = false
      clearInterval(this.prewriteInterval)
      clearInterval(this.recCountdownPlayInterval)
      clearInterval(this.minusRecCountdownTextInterval)

      this.initAudio()
      this.recCountdownText = 0
    },
    rec () {
      this.initAudio()
      this.countdownBeep()
      this.recording = true
      // this.play()
    },

    updateContextCurrentTime () {
      if (this.recording) {
        const speed = 60 / this.project.speed
        const recCountDownTime = speed * this.project.beats
        this.contextCurrentTime = this.context.currentTime - recCountDownTime
      } else {
        this.contextCurrentTime = this.context.currentTime
      }

      if (this.playing) {
        window.requestAnimationFrame(this.updateContextCurrentTime)
      }
    },

    countdownBeep () {
      const speed = 60 / this.project.speed
      const totalTime = speed * this.project.beats

      // this.prewriteTime = totalTime

      // recording: write metronome with countdown beats
      const count = this.project.beats * this.project.measures

      let i = 0
      while (i < count) {
        this.beep(speed * i, i)
        i++
      }

      this.recCountdownText = this.project.beats
      this.minusRecCountdownText()

      // countdown ended, and start play
      this.recCountdownPlayInterval = setTimeout(() => {
        // this.recording = true
        this.play()
      }, totalTime * 1000)
    },

    minusRecCountdownText () {
      const speed = 60 / this.project.speed

      this.minusRecCountdownTextInterval = setTimeout(() => {
        this.recCountdownText--

        if (this.recCountdownText) {
          this.minusRecCountdownText()
        }
      }, speed * 1000)
    },

    prewrite (isFirstTime) {
      // 預先寫入整個 project tracks一次，再用setTimeout在演奏到一半時寫入後續
      // speed => 120 = 1 beat per 0.5s
      const speed = 60 / this.project.speed
      // const countdownTime = speed * this.project.beats

      const totalTime = speed * this.project.beats * this.project.measures
      const recCountDownTime = speed * this.project.beats

      // recording: write metronome
      if (this.recording) {
        const count = this.project.beats * this.project.measures
        let i = 0

        while (i < count) {
          this.beep(speed * i + this.prewriteTime, i)
          i++
        }
      }

      // write tracks
      this.project.tracks.forEach((track) => {
        const sampleIds = track.samples

        track.hits.forEach((hit) => {
          const sampleId = sampleIds[hit.sample]
          const time = this.prewriteTime +
            (hit.measure * speed * this.project.beats) +
            (hit.pos * speed * this.project.beats) +
            (this.recording ? recCountDownTime : 0)

          this.playSampleById(sampleId, time)
        })
      })

      this.prewriteTime += totalTime

      const nextPrewriteTime = totalTime / (isFirstTime ? 2 : 1)

      this.prewriteInterval = setTimeout(() => {
        this.prewrite()
      }, nextPrewriteTime * 1000)
    },

    beep (startTime, idx) {
      const duration = 0.05
      const i = idx % this.project.beats
      const oscillator = this.context.createOscillator()
      oscillator.type = beepSample[i].type
      oscillator.frequency.value = beepSample[i].freq
      oscillator.connect(this.gainNode)
      oscillator.start(startTime)
      oscillator.stop(startTime + duration)
    },

    async removeHits () {
      if (await this.$confirm('Are you sure?')) {
        this.track.hits = []
      }
    }
  }
}
</script>

<style lang="scss">
:root {
  --white: #f0f0f0;
  --black: #111;
  --dark-gray: #333;
  --gray: #666;
  --light-gray: #999;
  --red: #d11;
  --light-red: #f11;
  --green: #6ca;
  --primary: var(--green);
  --secondary: var(--light-gray);
  --warning: var(--light-red);

  --bg-color: var(--black);
  --font-color: var(--white);
  --grid-line-color: var(--dark-gray);

  --overlay-bg-color: rgba(0,0,0,0.5);
  --modal-bg-color: var(--dark-gray);
  --modal-font-color: var(--light-gray);
  --modal-border-color: rgba(255,255,255,0.1);
  --modal-border-radius: 5px;
  --modal-header-border-color: var(--gray);
  --modal-footer-border-color: var(--gray);
  --modal-separator-color: var(--gray);

  --button-bg-color: var(--white);
  --button-font-color: var(--dark-gray);
  --primary-button-bg-color: var(--primary);
  --primary-button-border-color: var(--primary);
  --primary-button-font-color: var(--white);
  --secondary-button-bg-color: initial;
  --secondary-button-border-color: var(--secondary);
  --secondary-button-font-color: var(--secondary);
  --button-border-radius: 5px;
  --icon-button-font-color: var(--white);
  --transition-sec: 0.3s;

  --track-border-color: var(--gray);
  // --track-border-color--active: var(--primary);
  --track-bg-color: #161616;
  // --track-bg-color--active: #262626;

  --pad-button-color--1: #a7e6d0;
  --pad-button-color--2: #deedc1;
  --pad-button-color--3: #fed4b8;
  --pad-button-color--4: #fdaba2;

  --pad-button-color--5: #fc8004;
  --pad-button-color--6: #f59d54;
  --pad-button-color--7: #ef8152;
  --pad-button-color--8: #fd8b93;

  --pad-button-color--9: #fda604;
  --pad-button-color--10: #fdcb00;
  --pad-button-color--11: #fee503;
  --pad-button-color--12: #faff02;

  --pad-button-color--13: #395a7a;
  --pad-button-color--14: #3d9a83;
  --pad-button-color--15: #e0e58e;
  --pad-button-color--16: #a0d072;

  background: var(--bg-color);
  font-family: sans-serif;
}

body {
  margin: 75px 0 100px 0;
}

.__dtb {
  background: var(--bg-color);
  color: var(--font-color);
  user-select: none;

  label {
    display: inline-block;
    margin-right: 15px;
  }

  hr {
    height: 1px;
    margin: 20px 0;
    background: var(--gray);
    border: 0;
  }

  input[type=text],
  input[type=checkbox],
  select,
  button {
    -webkit-appearance: none;
    outline: none;
  }

  /* text input */
  input[type=text],
  select {
    font-size: 16px;
    display: block;
    box-sizing: border-box;
    padding: 0.5em 1em;
    width: 100%;
    border: 0;
    background: var(--gray);
    border-radius: var(--button-border-radius);
    color: var(--white);
  }

  select {
    background: var(--gray) url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='12' height='12' xmlns='http://www.w3.org/2000/svg' fill='%23bfa78a'><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'/></svg>") no-repeat;
    background-position: right 15px center;
  }

  input[type=checkbox],
  button {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  button {
    padding: 0.2em 1em;
    background: var(--button-bg-color);
    border-radius: 100px;
    border: 0;
    color: var(--button-font-color);

    &[disabled] {
      opacity: 0.5;
    }

    &.icon-btn {
      padding: 0;
      background: initial;
      border-radius: 0;
      color: var(--icon-button-font-color);

      i {
        margin: 0 0.5em;
      }
    }
  }

  // checkbox
  input[type=checkbox] {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid var(--gray);
    border-radius: 13px;
    max-width: 50px;
    min-width: 50px;
    max-height: 26px;
    min-height: 26px;
    margin-left: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    transition: var(--transition-sec);

    &:before {
      content: '.';
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--gray);
      color: transparent;
      position: relative;
      left: -12px;
      transition: var(--transition-sec);
      text-align: center;
    }

    &:checked {
      // background: var(--primary);
    }

    &:checked:before {
      background: var(--primary);
      left: 12px;
    }
  }

  // range
  input[type=range] {
    display: inline-block;
    width: 100%;
    height: 1px;
    vertical-align: middle;
    appearance: none;
    box-sizing: border-box;
    border-bottom: 1px solid var(--light-gray);

    // -webkit-slider-thumb 跟 -moz-range-thumb 得分開寫，不然Chrome吃不到
    &::-webkit-slider-thumb {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      appearance: none;
      border: 1px solid var(--light-gray);
      border-radius: var(--button-border-radius);
      background: #fff;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      appearance: none;
      border: 1px solid var(--light-gray);
      border-radius: var(--button-border-radius);
      background: #fffc;
      cursor: pointer;
    }
  }

  // utils
  .right {
    text-align: right;
  }

  .center {
    text-align: center;
  }

  // header footer
  .header-bar,
  .footer-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    display: grid;
    grid-gap: 5px;
    padding: 25px 10px;
    align-items: center;
    background: var(--bg-color);
    border-bottom: 1px solid var(--grid-line-color);

    &.project-list,
    &.project-info,
    &.pad-info {
      grid-template-columns: 30% 1fr 30%;

      & > div,
      button {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100%;
      }
    }

    &.rec-bar {
      grid-template-columns: 1fr auto;
    }
  }

  .footer-bar {
    position: fixed;
    top: initial;
    bottom: 0;
    border-bottom: initial;
    border-top: 1px solid var(--grid-line-color);
  }

  .form {
    .form-row {
      display: grid;
      grid-template-columns: 150px 1fr;
      padding: 5px 0;
      align-items: center;
    }

    .label {
    }

    .field {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-gap: 25px;
    }

    .field-val {
      min-width: 50px;
    }
  }

  .main {
    padding: 10px;
  }

  .track-preview {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 3px;

    .measure {
      flex: 1;
      padding: 3px;
      background: #fff1;
      transition: background 0.3s;

      &.active {
        background: #fff3;
      }
    }

    @mixin sampleColors {
      @for $i from 1 through 16 {
        &:nth-child(#{$i}) {
          .hit {
            background: var(--pad-button-color--#{$i});
          }
        }
      }
    }

    .sample {
      height: 2px;
      margin-bottom: 1px;
      position: relative;
      background: #0006;

      @include sampleColors;
    }

    .hit {
      width: 5px;
      height: 2px;
      position: absolute;
      top: 0;
      background: #f00;
      border-radius: 100px;
    }
  }
}
</style>
