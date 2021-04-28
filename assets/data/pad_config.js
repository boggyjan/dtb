const availableKeys = '4567rtyufghjvbnm'.split('')

// https://hiphopmakers.com/40-free-music-producer-free-drum-kits
const availableSamples = [
  {
    id: 'clap1',
    name: 'Clap 1',
    source: '/audio_sources/clap1.mp3',
    tags: ['Clap']
  },
  {
    id: 'clap2',
    name: 'Clap 2',
    source: '/audio_sources/clap2.mp3',
    tags: ['Clap']
  },
  {
    id: 'crash1',
    name: 'Crash 1',
    source: '/audio_sources/crash1.mp3',
    tags: ['Crash']
  },
  {
    id: 'crash2',
    name: 'Crash 2',
    source: '/audio_sources/crash2.mp3',
    tags: ['Crash']
  },
  {
    id: 'cymbal1',
    name: 'Cymbal 1',
    source: '/audio_sources/cymbal1.mp3',
    tags: ['Cymbal']
  },
  {
    id: 'cymbal2',
    name: 'Cymbal 2',
    source: '/audio_sources/cymbal2.mp3',
    tags: ['Cymbal']
  },
  {
    id: 'hihat1',
    name: 'Hi Hat 1',
    source: '/audio_sources/hihat1.mp3',
    tags: ['Hi Hat']
  },
  {
    id: 'hihat2',
    name: 'Hi Hat 2',
    source: '/audio_sources/hihat2.mp3',
    tags: ['Hi Hat']
  },
  {
    id: 'kick1',
    name: 'Kick 1',
    source: '/audio_sources/kick1.mp3',
    tags: ['Kick']
  },
  {
    id: 'kick2',
    name: 'Kick 2',
    source: '/audio_sources/kick2.mp3',
    tags: ['Kick']
  },
  {
    id: 'openhihat1',
    name: 'Open Hi Hat 1',
    source: '/audio_sources/openhihat1.mp3',
    tags: ['Open Hi Hat', 'Hi Hat']
  },
  {
    id: 'openhihat2',
    name: 'Open Hi Hat 2',
    source: '/audio_sources/openhihat2.mp3',
    tags: ['Open Hi Hat', 'Hi Hat']
  },
  {
    id: 'perc1',
    name: 'Perc 1',
    source: '/audio_sources/perc1.mp3',
    tags: ['Percussion']
  },
  {
    id: 'perc2',
    name: 'Perc 2',
    source: '/audio_sources/perc2.mp3',
    tags: ['Percussion']
  },
  {
    id: 'ride',
    name: 'Ride',
    source: '/audio_sources/ride.mp3',
    tags: ['Ride']
  },
  {
    id: 'snare1',
    name: 'Snare 1',
    source: '/audio_sources/snare1.mp3',
    tags: ['Snare']
  },
  {
    id: 'snare2',
    name: 'Snare 2',
    source: '/audio_sources/snare2.mp3',
    tags: ['Snare']
  }
]

const defaultProjects = [
  {
    name: 'new project',
    // 小節數
    measures: 2,
    // 速度 一拍 60/speed
    speed: 120,
    // 一小節幾拍
    beats: 4,
    tracks: [
      {
        name: 'new track',
        // 最多能有16個，順序照key排
        samples: ['clap1', 'clap2', 'crash1', 'crash2', 'cymbal1', 'cymbal2', 'hihat1', 'hihat2', 'kick1', 'kick2', 'openhihat1', 'openhihat2', 'perc1', 'perc2', 'snare1', 'snare2'],
        // samples: ['clap1'],
        hits: [
          /*
          {
            sample: 0,
            measure: 2,
            pos: 0.14 (x100 => percentage)
          }
          */
        ]
      },
      {
        name: 'Cool Drum',
        // 最多能有16個，順序照key排
        samples: ['crash1', 'crash2', 'cymbal1', 'cymbal2', 'hihat1', 'hihat2', 'kick1', 'kick2', 'openhihat1', 'openhihat2', 'snare1', 'snare2'],
        // samples: ['clap1'],
        hits: [
          /*
          {
            sample: 0,
            measure: 2,
            pos: 14.23 (%)
          }
          */
          {
            sample: 4,
            measure: 0,
            pos: 0
          },
          {
            sample: 4,
            measure: 0,
            pos: 0.25
          },
          {
            sample: 4,
            measure: 0,
            pos: 0.5
          },
          {
            sample: 4,
            measure: 0,
            pos: 0.75
          },
          {
            sample: 4,
            measure: 0,
            pos: 0.125
          },
          {
            sample: 4,
            measure: 0,
            pos: 0.375
          },
          {
            sample: 4,
            measure: 0,
            pos: 0.625
          },
          {
            sample: 8,
            measure: 0,
            pos: 0.875
          },
          {
            sample: 5,
            measure: 1,
            pos: 0
          },
          {
            sample: 5,
            measure: 1,
            pos: 0.25
          },
          {
            sample: 5,
            measure: 1,
            pos: 0.5
          },
          {
            sample: 5,
            measure: 1,
            pos: 0.75
          },
          {
            sample: 5,
            measure: 1,
            pos: 0.125
          },
          {
            sample: 5,
            measure: 1,
            pos: 0.375
          },
          {
            sample: 5,
            measure: 1,
            pos: 0.625
          },
          {
            sample: 9,
            measure: 1,
            pos: 0.875
          },

          {
            sample: 6,
            measure: 0,
            pos: 0
          },
          {
            sample: 10,
            measure: 0,
            pos: 0.25
          },
          {
            sample: 7,
            measure: 0,
            pos: 0.5
          },
          {
            sample: 11,
            measure: 0,
            pos: 0.75
          },
          {
            sample: 6,
            measure: 1,
            pos: 0
          },
          {
            sample: 10,
            measure: 1,
            pos: 0.25
          },
          {
            sample: 7,
            measure: 1,
            pos: 0.5
          },
          {
            sample: 11,
            measure: 1,
            pos: 0.75
          }
        ]
      },
      {
        name: 'Perc',
        samples: ['clap1', 'clap2', 'perc1', 'perc2'],
        hits: [
          {
            sample: 0,
            measure: 0,
            pos: 0.125
          },
          {
            sample: 1,
            measure: 0,
            pos: 0.375
          },
          {
            sample: 0,
            measure: 0,
            pos: 0.625
          },
          {
            sample: 3,
            measure: 0,
            pos: 0.875
          },
          {
            sample: 0,
            measure: 1,
            pos: 0.125
          },
          {
            sample: 1,
            measure: 1,
            pos: 0.375
          },
          {
            sample: 0,
            measure: 1,
            pos: 0.625
          },
          {
            sample: 2,
            measure: 1,
            pos: 0.875
          }
        ]
      }
    ]
  }
]

const beepSample = [
  {
    type: 'sawtooth',
    freq: 1400
  },
  {
    type: 'triangle',
    freq: 1000
  },
  {
    type: 'triangle',
    freq: 1000
  },
  {
    type: 'triangle',
    freq: 1000
  },
  {
    type: 'triangle',
    freq: 1000
  },
  {
    type: 'triangle',
    freq: 1000
  },
  {
    type: 'triangle',
    freq: 1000
  },
  {
    type: 'triangle',
    freq: 1000
  }
]

export { availableKeys, availableSamples, defaultProjects, beepSample }
