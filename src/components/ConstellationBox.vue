<template>
    <div class="constellationbox">
        <b>Constellation</b>&nbsp;
        <select class="form-control" v-model="selected">
            <option v-for="(constellation, index) in selections" :key="index"
                    v-bind:value="constellation">
                {{constellation}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'ConstellationBox',
        computed: {
            selections: function () {
                return this.$store.getters.constellationsForSelection
            },
            selected: {
                get: function () {
                    const constellation = this.$store.getters.constellation
                    return constellation === null ? "(None)" : constellation
                },
                set: function (constellation) {
                    this.$store.dispatch('changeConstellation', constellation === '(None)' ? null: constellation)

                    this.$store.dispatch('spinnerLock')

                    if(this.$router.currentRoute.path.endsWith('home')) {
                        this.$store.dispatch('computeResources')
                    }
                    if(this.$router.currentRoute.path.endsWith('suggestions')) {
                        this.$store.dispatch('computeSuggestions')
                    }
                    if(this.$router.currentRoute.path.endsWith('yields')) {
                        this.$store.dispatch('computeYields')
                    }
                }
            },
        },
        methods: {
            // v-on:change="onChange"
            /*onChange: async function (event) {
                this.$store.dispatch('spinnerLock')
                let constellation = event.target.value
                if (constellation === '(None)') {
                    constellation = null
                }
                this.$store.dispatch('changeConstellation', constellation)
                this.$store.dispatch('computeResources')
                this.$store.dispatch('computeSuggestions')
                this.$store.dispatch('computeYields')
            }, */
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
