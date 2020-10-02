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
                set: async function (constellation) {
                    this.$store.dispatch('spinnerLock')

                    await this.$store.dispatch('changeConstellation', constellation === '(None)' ? null : constellation)

                    if (this.$router.currentRoute.path.endsWith('resources')) {
                        await this.$store.dispatch('computeResources')
                    } else if (this.$router.currentRoute.path.endsWith('suggestions')) {
                        await this.$store.dispatch('computeSuggestions')
                    } else if (this.$router.currentRoute.path.endsWith('yields')) {
                        await this.$store.dispatch('computeYields')
                    }

                    this.$store.dispatch('spinnerUnlock')
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    select {
        margin: .25em;
    }

    option {
    }
</style>
