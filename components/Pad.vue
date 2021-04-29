<template>
  <div class="pad-mode">
    <div class="header-bar pad-info">
      <div class="pad-back">
        <button
          :disabled="recording"
          class="icon-btn"
          @click="$emit('close')"
        >
          <i class="fas fa-chevron-left" />
          {{ project.name }}
        </button>
      </div>
      <div class="track-name center">
        <span @click="showEditModal()">{{ track.name }}</span>
      </div>
      <div class="track-setting right">
        <button
          :class="{ edit: editSampleMode }"
          :disabled="playing || recording"
          @click="switchEditSampleMode()"
        >
          <i class="fas fa-drum" />
          Edit Pad
        </button>
      </div>
    </div>

    <div class="main">
      <div class="pad-buttons">
        <div
          v-for="i in 16"
          :key="`button_${i}`"
          :class="{ active: isHitted[i - 1] || currentHits.includes(i - 1) }"
          class="pad-button"
          @mousedown.prevent="hitStart(i - 1)"
          @mouseup.prevent="hitEnd(i - 1)"
          @touchstart.prevent="hitStart(i - 1)"
          @touchend.prevent="hitEnd(i - 1)"
        >
          {{
            availableSamples.find(item => item.id === track.samples[i - 1])
              ? availableSamples.find(item => item.id === track.samples[i - 1]).name
              : 'none'
          }}
        </div>
      </div>

      <div class="track-preview">
        <div
          v-for="(measure, mIdx) in project.measures"
          :key="`measure_${mIdx}`"
          class="measure"
          :class="{ active: mIdx === currentMeasure }"
        >
          <div
            v-for="(sample, sIdx) in track.samples"
            :key="`sample_${mIdx}_${sIdx}`"
            class="sample"
          >
            <div
              v-for="(hit, hIdx) in track.hits.filter(hit => hit.sample === sIdx && hit.measure === measure - 1)"
              :key="`hit_${mIdx}_${sIdx}_${hIdx}`"
              :style="`left: ${hit.pos * 100}%`"
              class="hit"
            />
          </div>
        </div>
      </div>
    </div>

    <PopupModal
      v-if="editModalVisible"
      title="Edit Track"
      @close="hideEditModal()"
    >
      <div class="form edit-grid">
        <div class="form-row">
          <div class="label">
            Track Name
          </div>
          <div class="field">
            <input
              v-model="clonedTrack.name"
              type="text"
            >
          </div>
        </div>
      </div>

      <template slot="footer">
        <button
          class="secondary"
          @click="hideEditModal()"
        >
          Cancel
        </button>
        <button
          class="primary"
          @click="hideEditModal(true)"
        >
          OK
        </button>
      </template>
    </PopupModal>

    <PopupModal
      v-if="editSampleModalVisible"
      title="Edit Pad"
      @close="hideEditSampleModal()"
    >
      <div class="instruments-form">
        <div class="section-title">
          Category
        </div>
        <div class="tags">
          <label
            v-for="tag in sampleTags"
            :key="tag"
          >
            <input
              v-model="selectedSampleCategory"
              :value="tag"
              type="checkbox"
              class="tag"
            >
            {{ tag }}
          </label>
        </div>

        <hr>

        <div class="section-title">
          Instruments
        </div>
        <div class="sample-select">
          <div class="samples">
            <div
              v-for="sample in samples"
              :key="`sample_${sample.id}`"
              :class="{ active: sample.id === selectedSample }"
              class="sample"
              @click="selectSampleById(sample.id)"
            >
              <div class="sample-name">
                {{ sample.name }}
              </div>
              <div class="sample-preview">
                <i class="fas fa-check" />
              </div>
            </div>
          </div>
          <!-- <select v-model="selectedSample">
            <option :value="undefined">
              Please Select
            </option>
            <option
              v-for="sample in samples"
              :key="`sample_${sample.id}`"
              :value="sample.id"
            >
              {{ sample.name }}
            </option>
          </select> -->
          <!-- <button @click="$emit('preview', selectedSample)">
            play
          </button> -->
        </div>
      </div>

      <template slot="footer">
        <button
          class="secondary"
          @click="hideEditSampleModal()"
        >
          Cancel
        </button>
        <button
          class="primary"
          @click="hideEditSampleModal(true)"
        >
          OK
        </button>
      </template>
    </PopupModal>
  </div>
</template>

<script>
import { availableKeys, availableSamples } from '@/assets/data/pad_config'

export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    },
    playing: {
      type: Boolean,
      default: false
    },
    recording: {
      type: Boolean,
      default: false
    },
    contextCurrentTime: {
      type: Number,
      default: 0
    },
    track: {
      type: Object,
      default: () => {
        return {
          name: 'track1',
          samples: ['kick1', 'kick2', 'crash1', 'crash2', 'clap1', 'snare1'], // 最多能有16個，順序照key排
          hits: [
            /*
            {
              sample: 0,
              measure: 2,
              pos: 0.23
            }
            */
          ]
        }
      }
    }
  },

  data () {
    const isHitted = {}

    for (let i = 0; i < 16; i++) {
      isHitted[i] = false
    }

    return {
      availableSamples,
      isHitted,
      editModalVisible: false,
      editSampleMode: false,
      editSampleModalVisible: false,
      editBtnIdx: null,
      clonedTrack: {},
      selectedSample: null,
      selectedSampleCategory: []
    }
  },

  computed: {
    samples () {
      if (this.selectedSampleCategory.length) {
        return this.availableSamples.filter((item) => {
          let hasTag = false
          this.selectedSampleCategory.forEach((tag) => {
            if (item.tags.includes(tag)) {
              hasTag = true
            }
          })
          return hasTag
        })
      } else {
        return this.availableSamples
      }
    },
    sampleTags () {
      const tags = this.availableSamples.map(item => item.tags).flat()
      return tags.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
    },
    speed () {
      return 60 / this.project.speed
    },
    measureTime () {
      return this.speed * this.project.beats
    },
    totalTime () {
      return this.measureTime * this.project.measures
    },
    currentMeasure () {
      return Math.floor(this.contextCurrentTime % this.totalTime / this.measureTime)
    },
    currentHits () {
      const currentPos = Math.floor(this.contextCurrentTime % this.measureTime / this.measureTime * 100) / 100

      const currentHits = this.track.hits.filter(item =>
        item.measure === this.currentMeasure &&
        Math.floor(item.pos * 10) === Math.floor(currentPos * 10)
      ).map(item => item.sample)

      return this.playing ? currentHits : []
    }
  },

  watch: {
    recording (val) {
      if (val) {
        this.editSampleMode = false
      }
    }
    // selectedSample (val) {
    //   this.$emit('preview', val)
    // }
  },

  mounted () {
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.onKeyDown)
    document.removeEventListener('keyup', this.onKeyUp)
  },

  methods: {
    hitStart (keyIdx) {
      if (this.editSampleMode) {
        this.editBtnIdx = keyIdx
        this.showEditSampleModal()
        return
      }

      this.$emit('hitStart', keyIdx)
      this.isHitted[keyIdx] = true
    },
    hitEnd (keyIdx) {
      this.$emit('hitEnd', keyIdx)
      this.isHitted[keyIdx] = false
    },

    // keyboard hendler
    onKeyDown ($event) {
      if (this.editModalVisible || this.editSampleMode) {
        return
      }

      const keyIdx = availableKeys.findIndex(item => item === $event.key)
      if (keyIdx > -1) {
        this.hitStart(keyIdx)
      }
    },
    onKeyUp ($event) {
      if (this.editModalVisible || this.editSampleMode) {
        return
      }

      const keyIdx = availableKeys.findIndex(item => item === $event.key)
      if (keyIdx > -1) {
        this.hitEnd(keyIdx)
      }
    },

    // switch edit btn handler
    switchEditSampleMode () {
      this.editSampleMode = !this.editSampleMode
    },

    // edit modal visible
    showEditModal () {
      this.clonedTrack = JSON.parse(JSON.stringify(this.track))
      this.editModalVisible = true
      this.editSampleMode = false
    },
    hideEditModal (save) {
      this.editModalVisible = false

      if (save) {
        /*eslint-disable */
        this.track.name = this.clonedTrack.name
        /* eslint-enable */
      }
    },

    // edit sample modal visible
    showEditSampleModal () {
      this.clonedTrack = JSON.parse(JSON.stringify(this.track))
      // this.selectedSample = availableSamples[0].id
      this.selectedSample = this.track.samples[this.editBtnIdx]
      const matchedSample = this.availableSamples
        .find(item => item.id === this.track.samples[this.editBtnIdx])

      this.selectedSampleCategory = matchedSample ? matchedSample.tags : []

      this.editSampleModalVisible = true
    },
    hideEditSampleModal (save) {
      this.editSampleModalVisible = false

      if (save) {
        this.clonedTrack.samples[this.editBtnIdx] = this.selectedSample
        /* eslint-disable */
        this.track.samples = this.clonedTrack.samples
        /* eslint-enable */
      }
    },

    selectSampleById (sampleId) {
      this.selectedSample = sampleId
      this.$emit('preview', sampleId)
    }
  }
}
</script>

<style lang="scss">
@mixin buttonColors {
  @for $i from 1 through 16 {
    &:nth-child(#{$i}) {
      background: var(--pad-button-color--#{$i});

      // &.active {
      //   box-shadow: 0 0 10px var(--pad-button-color--#{$i});
      // }
    }
  }
}

.track-setting {
  button {
    &.edit {
      background: var(--red);
      color: var(--white);
    }
  }
}

.pad-mode {
  .track-preview {
    margin-top: 1em;
  }
}

.pad-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  text-align: center;

  .pad-button {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: calc((100vh - 105px) / 4);
    // ios safari support
    height: calc((100vh - 250px) / 4);
    min-height: 100px;
    transition: opacity 1s;
    opacity: 0.6;
    border-radius: var(--button-border-radius);
    box-shadow: inset 0 0 100px #0008;
    font-size: 0.75em;

    &.active {
      opacity: 1;
      // text-shadow: 0 0 10px #0006;
      transition: opacity 0s, box-shadow 0s;
    }

    @include buttonColors;
  }
}

.instruments-form {
  .section-title {
    margin-bottom: 10px;
  }
}

.sample-select {
  .samples {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .sample {
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border: 1px solid var(--modal-separator-color);
    border-radius: var(--button-border-radius);
    transition: border-color 0.3s color 0.3s;

    .sample-preview {
      opacity: 0;
    }

    &.active {
      border-color: var(--primary);
      color: var(--primary);

      .sample-preview {
        opacity: 1;
      }
    }
  }
}
</style>
