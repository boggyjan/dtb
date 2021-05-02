<template>
  <div class="tracks-mode">
    <div class="header-bar project-info">
      <div class="project-back">
        <button
          :disabled="playing || recording"
          class="icon-btn"
          @click="$emit('back')"
        >
          <i class="fas fa-chevron-left" />
          Projects
        </button>
      </div>
      <div class="project-name center">
        <span @click="showEditModal()">{{ project.name }}</span>
      </div>
      <div class="add-track right">
        <button
          :disabled="playing || recording"
          @click="addTrack()"
        >
          <i class="fas fa-plus" />
          <!-- Add track -->
        </button>
      </div>
    </div>

    <div class="main">
      <div class="tracks">
        <div
          v-if="!tracks.length"
          class="no-tracks center"
        >
          No Tracks
        </div>
        <div
          v-for="(track, idx) in tracks"
          :key="`track_${idx}`"
          class="track"
          @click="$emit('showPad', idx)"
        >
          <div class="track-name">
            {{ track.name }}
          </div>
          <div class="track-mute">
            <button
              :class="{ muted: track.muted }"
              :disabled="playing"
              class="icon-btn"
              title="mute"
              @click.prevent.stop="$emit('muteTrack', idx)"
            >
              <i
                v-if="!track.muted"
                class="fas fa-volume-down"
              />
              <i
                v-else
                class="fas fa-volume-mute"
              />
            </button>
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
          <div class="track-action">
            <button
              :disabled="playing"
              class="icon-btn"
              title="Remove"
              @click.prevent.stop="removeTrack(idx)"
            >
              <i class="far fa-trash-alt" />
              <!-- Remove -->
            </button>

            <button
              :disabled="playing"
              class="icon-btn clean-rec-btn"
              title="Clear all"
              @click.prevent.stop="$emit('removeHits')"
            >
              <i class="fas fa-eraser" />
              <!-- Rec -->
            </button>
          </div>
        </div>
      </div>
    </div>

    <PopupModal
      v-if="editModalVisible"
      title="Edit Project"
      @close="hideEditModal()"
    >
      <div class="form edit-grid">
        <div class="form-row">
          <div class="label">
            Project Name
          </div>
          <div class="field">
            <input
              v-model="clonedProject.name"
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
  </div>
</template>

<script>
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
    }
  },

  data () {
    return {
      editModalVisible: false,
      clonedProject: {}
    }
  },

  computed: {
    tracks () {
      return this.project.tracks
    },
    currentMeasure () {
      const speed = 60 / this.project.speed
      const measureTime = speed * this.project.beats
      const totalTime = speed * this.project.beats * this.project.measures
      return this.playing ? Math.floor(this.contextCurrentTime % totalTime / measureTime) : -1
    }
  },

  methods: {
    showEditModal () {
      this.clonedProject = JSON.parse(JSON.stringify(this.project))
      this.editModalVisible = true
    },
    hideEditModal (save) {
      this.editModalVisible = false
      if (save) {
        this.$emit('update', this.clonedProject)
      }
    },
    addTrack () {
      /*eslint-disable */
      this.project.tracks.push({
        name: 'new track',
        // 最多能有16個，順序照key排
        samples: [],
        hits: []
      })
      /* eslint-enable */
    },
    async removeTrack (idx) {
      if (await this.$confirm('Are you sure?')) {
        /*eslint-disable */
        this.project.tracks.splice(idx, 1)
        /* eslint-enable */
      }
    }
  }
}
</script>

<style lang="scss">
// tracks
.tracks {
  .no-tracks {
    margin: 10px 0;
    padding: 10px;
  }

  .track {
    display: grid;
    grid-template-columns: 80px 25px 1fr auto;
    grid-gap: 10px;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    background: var(--track-bg-color);
    border: 1px solid var(--track-border-color);
    border-radius: var(--button-border-radius);
    transition: background 0.3s, border 0.3s;

    // &:hover,
    // &.active {
    //   background: var(--track-bg-color--active);
    //   border-color: var(--track-border-color--active);
    // }

    .track-name {
      word-break: break-all;
    }

    .track-mute {
      .muted {
        color: var(--primary);
      }
    }

    .track-action {
      button {
        padding: 0.8em  0.5em !important;
      }
    }
  }
}
</style>
