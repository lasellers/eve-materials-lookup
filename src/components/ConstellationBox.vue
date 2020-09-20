<template>
    <div class="constellationbox">
        <b>Constellation</b>&nbsp;
        <select v-bind:id="constellationsForSelection" v-on:change="onChange" class="form-control">
            <option key=-1 value=""> (None)</option>
            <option v-for="(constellation, index) in constellationsForSelection" :key="index"
                    v-bind:value="constellation">
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
                constellationsForSelection: []
            }
        },
        created() {
            this.onLoad()
        },
        methods: {
          constellation() {
                return this.$store.getters.constellation
            },
            onLoad: function () {
                this.constellationsForSelection = this.$store.getters.constellationsForSelection
            },
            onChange: async function (event) {
                const constellation = event.target.value
                this.$store.dispatch('changeConstellation', constellation)
                this.$store.dispatch('computeDisplayedResources')
            },
        }
    }
</script>

<style scoped lang="scss">
    select {
        margin: .25em;
    }

    option {
    }
</style>
