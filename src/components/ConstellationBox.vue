<template>
  <div class="constellationbox">
    Constellation: <select v-bind:id="constellationsForSelection" v-on:change="onChange">
      <option key=-1 value=""> (None)</option>
      <option v-for="(constellation, index) in constellationsForSelection" :key="index" v-bind:value="constellation">
        {{constellation}}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'ConstellationBox',
    components: {},
    data() {
      return {
        constellationsForSelection: [],
        constellation: null
      }
    },
    created() {
      this.onLoad()
    },
    methods: {
      onLoad: function () {
        this.constellationsForSelection = this.$store.getters.constellationsForSelection
      },
      onChange: async function (event) {
        this.constellation = event.target.value
        this.$store.dispatch('changeConstellation', this.constellation)
        this.$store.dispatch('computeDisplayedResources')
      },
    }
  }
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  select {
    list-style-type: none;
    padding: 0;
  }

  option {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
