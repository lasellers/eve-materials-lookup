<template>
    <div class="regionbox">
        <b>Region</b>&nbsp;
        <select class="form-control" v-model="selected">
            <option v-for="(regionOption, index) in selections" :key="index" v-bind:value="regionOption">
                {{regionOption}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'RegionBox',
        computed: {
            selections: function () {
                return this.$store.getters.regionsForSelection
            },
            selected: {
                get: function () {
                    const region = this.$store.getters.region
                    return region === null ? "(None)" : region
                },
                set: async function (region) {
                    this.$store.dispatch('spinnerLock')

                    await this.$store.dispatch('changeRegion', region === '(None)' ? null : region)

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
