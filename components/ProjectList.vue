<template>
  <div class="tracks-mode">
    <div class="header-bar project-list">
      <div />
      <div class="project-name center">
        DropTheBeat
      </div>
      <div class="add-project right">
        <button
          @click="addProject()"
        >
          <i class="fas fa-plus" />
          <!-- Add track -->
        </button>
      </div>
    </div>

    <div class="main">
      <div class="projects">
        <div
          v-if="!projects.length"
          class="no-projects center"
        >
          No Projects
        </div>

        <div
          v-for="(project, idx) in projects"
          :key="`project_${idx}`"
          class="project"
          @click="$emit('showProject', idx)"
        >
          <div class="project-name">
            {{ project.name }}
          </div>
          <div class="project-action">
            <button
              class="icon-btn"
              @click.prevent.stop="removeProject(idx)"
            >
              <i class="far fa-trash-alt" />
              <!-- Remove -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addProject () {
      /* eslint-disable */
      this.projects.push({
        name: 'New Project',
        // 小節數
        measures: 4,
        // 速度 一拍 60/speed
        speed: 120,
        // 一小節幾拍
        beats: 4,
        tracks: [{
          name: 'Track 1',
          // 最多能有16個，順序照key排
          samples: [],
          hits: []
        }]
      })
      /* eslint-enable */
    },
    async removeProject (projectIdx) {
      if (await this.$confirm('Are you sure?')) {
        /* eslint-disable */
        this.projects.splice(projectIdx, 1)
        /* eslint-enable */
      }
    }
  }
}
</script>

<style lang="scss">
// projects
.projects {
  .no-projects {
    margin: 10px 0;
    padding: 10px;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    background: var(--track-bg-color);
    border: 1px solid var(--track-border-color);
    border-radius: var(--button-border-radius);
    transition: background 0.3s, border 0.3s;

    &:hover,
    &.active {
      background: var(--track-bg-color--active);
      border-color: var(--track-border-color--active);
    }

    .project-action {
      button {
        padding: 0.8em  0.5em !important;
      }
    }
  }
}
</style>
