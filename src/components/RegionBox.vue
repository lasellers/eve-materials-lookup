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
                set: function (region) {
                    this.$store.dispatch('changeRegion', region === '(None)' ? null: region)

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
            //onChange: async function (event) {
            /*    this.$store.dispatch('spinnerLock')
                let region = event.target.value
                if (region === '(None)') {
                    region = null
                }
                this.$store.dispatch('changeRegion', region)
                this.$store.dispatch('computeResources')
                this.$store.dispatch('computeSuggestions')
                this.$store.dispatch('computeYields')
             */
           // },
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
