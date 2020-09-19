<template>
  <div class="regionbox">
    Region: <select :id="regionsForSelection" v-on:change="onChange">
      <option key=-1 value=""> (None)</option>
      <option v-for="(region, index) in regionsForSelection"
              :key="index"
              v-bind:value="index">
        {{region}}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'RegionBox',
    components: {},
    data() {
      return {
        regionsForSelection: [],
        region: null
      }
    },
    created() {
      this.onLoad()
    },
    methods: {
      onLoad: function () {
        this.regionsForSelection = this.$store.getters.regionsForSelection
      },
      onChange: async function (event) {
        this.region = event.target.id
        this.$store.dispatch('changeRegion', this.region)
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
