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
    //  v-on:change="onChange"
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
                    console.log('get', this.boxId, filter)
                    let resource = filter === null ? "(None)" : filter
                    return resource
                },
                set: function (resource) {
                    console.log('set', this.boxId, resource)
                    this.$store.dispatch('changeBlueprint', null)
                    this.$store.dispatch('changeResourceFilter', [this.boxId, resource])

                    this.$store.dispatch('spinnerLock')

                    // forces a computed resources rerender
                    if(this.$router.currentRoute.path.endsWith('home')) {
                        this.$store.dispatch('computeResources')
                    }
                    if(this.$router.currentRoute.path.endsWith('suggestions')) {
                        this.$store.dispatch('computeSuggestions')
                    }

                }
            },
            selections: function () {
                return this.$store.getters.resourcesForSelection
            },
        },
        methods: {
          /*  onChange: async function (event) {
                const resource = event.target.value
                console.log('onChange', this.boxId, resource)
                // this.$store.dispatch('changeBlueprint', null)
                this.$store.dispatch('changeResourceFilter', [this.boxId, resource])

                this.$store.dispatch('computeResources')
                this.$store.dispatch('computeSuggestions')
            }, */
        },
        watched: {
            selected(value) {
                console.log(' !!!!!!!!!!! selected', value)
            }
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
