<template>
    <div class="regionbox">
        <b>Region</b>&nbsp;
        <select v-bind:id="regionsForSelection" v-on:change="onChange" class="form-control"
                v-on:click="$store.dispatch('spinnerLock')"
                v-model="selected">
            <option v-for="(regionOption, index) in regionsForSelection" :key="index" v-bind:value="regionOption">
                {{regionOption}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'RegionBox',
        components: {},
        computed: {
            selected: {
                get: function () {
                    const region = this.$store.getters.region
                    return region === null ? "(None)" : region
                },
                set: function (region) {
                    this.$store.dispatch('changeRegion', region)
                }
            },
            regionsForSelection: function () {
                return this.$store.getters.regionsForSelection
            },
        },
        methods: {
            onChange: async function (event) {
                let region = event.target.value
                if (region === '(None)') {
                    region = null
                }
                this.$store.dispatch('changeRegion', region)
                // the selected+set provokes a computeDisplayedResources so we omit it here
                // this.$store.dispatch('computeDisplayedResources')
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
