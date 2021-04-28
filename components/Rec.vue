<template>
  <div class="rec-bar footer-bar">
    <component :is="'style'">
      .rec-btn.active {
      animation: breath {{ recAnimationSpeed }}s infinite;
      }
    </component>

    <div class="rec-action">
      <button
        v-if="mode === 2"
        :disabled="playing"
        :class="{ active: recording }"
        class="icon-btn rec-btn"
        title="Rec"
        @click="$emit('rec')"
      >
        <i v-if="!recCountdownText" class="fas fa-record-vinyl" />
        <span v-else class="countdown-text">
          {{ recCountdownText }}
        </span>
        <!-- Rec -->
      </button>
      <button
        v-if="!playing && !recording"
        class="icon-btn"
        title="Play"
        @click="$emit('play')"
      >
        <i class="fas fa-play" />
        <!-- Play -->
      </button>
      <button
        v-if="playing || recording"
        class="icon-btn"
        title="Stop"
        @click="$emit('stop')"
      >
        <i class="fas fa-stop" />
        <!-- Stop -->
      </button>

      <button
        v-if="mode === 2"
        :disabled="playing"
        class="icon-btn clean-rec-btn"
        title="Clear all"
        @click="$emit('removeHits')"
      >
        <i class="fas fa-eraser" />
        <!-- Rec -->
      </button>
    </div>
    <div class="project-info right">
      {{ project.beats }} Beats x {{ project.measures }}
      Speed
      {{ project.speed }}
      <button
        :disabled="playing || recording"
        class="icon-btn"
        @click="showEditModal()"
      >
        <i class="far fa-edit" />
        <!-- Edit -->
      </button>
    </div>

    <PopupModal
      v-if="editModalVisible"
      title="Edit Project"
      @close="hideEditModal()"
    >
      <div class="form edit-grid">
        <div class="form-row">
          <div class="label">
            Measures
          </div>
          <div class="field">
            <input
              v-model.number="clonedProject.measures"
              type="range"
              min="1"
              max="100"
              step="1"
            >
            <div class="field-val">
              {{ clonedProject.measures }}
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="label">
            Speed
          </div>
          <div class="field">
            <input
              v-model.number="clonedProject.speed"
              type="range"
              min="50"
              max="400"
              step="1"
            >
            <div class="field-val">
              {{ clonedProject.speed }}
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="label">
            Beats
          </div>
          <div class="field">
            <input
              v-model.number="clonedProject.beats"
              type="range"
              min="2"
              max="7"
              step="1"
            >
            <div class="field-val">
              {{ clonedProject.beats }}
            </div>
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
    mode: {
      type: Number,
      default: 0
    },
    playing: {
      type: Boolean,
      default: false
    },
    recording: {
      type: Boolean,
      default: false
    },
    project: {
      type: Object,
      default: () => {}
    },
    recCountdownText: {
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
    recAnimationSpeed () {
      return 60 / this.project.speed
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
    }
  }
}
</script>

<style lang="scss">
.rec-btn {
  &.active {
    // 防止按兩次
    pointer-events: none;
    opacity: 1 !important;
    color: var(--warning) !important;
  }
}

.countdown-text {
  display: inline-block;
  width: 1em;
  text-align: center;
  font-weight: bold;
}

@keyframes breath {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
