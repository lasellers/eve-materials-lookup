<template>
    <div class="resourcebox">
        <select v-bind:id="'resourcesForSelection'+box" class="form-control"
                v-model="selected">
            <option v-for="(resource, index) in selections" :key="index" v-bind:value="resource">
                {{resource}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'ResourcesBox',
        props: ['box'],
        data() {
            return {
                boxId: this.box
            }
        },
        computed: {
            selected: {
                cache: false,
                get: function () {
                    const resourceFilters = this.$store.getters.resourceFilters
                    const filter = resourceFilters[this.boxId]
                    return filter === null ? "(None)" : filter
                },
                set: async function (resource) {
                    this.$store.dispatch('spinnerLock')

                    await this.$store.dispatch('changeBlueprint', null)
                    await this.$store.dispatch('changeResourceFilter', [this.boxId, resource])

                    // forces a computed resources rerender
                    if (this.$router.currentRoute.path.endsWith('resources')) {
                        await this.$store.dispatch('computeResources')
                    } else if (this.$router.currentRoute.path.endsWith('suggestions')) {
                        await this.$store.dispatch('computeSuggestions')
                    }

                    this.$store.dispatch('spinnerUnlock')
                }
            },
            selections: function () {
                return this.$store.getters.resourcesForSelection
            },
        },
    }
</script>

<style scoped lang="scss">
    select {
        margin: .25em;
    }
</style>
