<template>
    <div class="constellationbox">
        <b>Constellation</b>&nbsp;
        <select v-bind:id="constellationsForSelection" v-on:change="onChange" class="form-control">
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
            }
        },
        created() {
            this.onLoad()
        },
        computed: {
            constellationsForSelection: function () {
                return this.$store.getters.constellationsForSelection
            },
        },
        methods: {
          constellation() {
                return this.$store.getters.constellation
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
