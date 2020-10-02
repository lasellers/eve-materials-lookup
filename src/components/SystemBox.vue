<template>
    <div class="systembox">
        <b>System</b>&nbsp;
        <select class="form-control" v-model="selected">
            <option v-for="(system, index) in selections" :key="index"
                    v-bind:value="system">
                {{system}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'SystemBox',
        computed: {
            selections: function () {
                return this.$store.getters.systemsForSelection
            },
            selected: {
                get: function () {
                    const system = this.$store.getters.system
                    return system === null ? "(None)" : system
                },
                set: async function (system) {
                    this.$store.dispatch('spinnerLock')

                    if (system === '(None)') {
                        system = null
                    }
                    await this.$store.dispatch('changeSystem', system === '(None)' ? null : system)

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
</style>
