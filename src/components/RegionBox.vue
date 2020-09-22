<template>
    <div class="regionbox">
        <b>Region</b>&nbsp;
        <select v-bind:id="regionsForSelection" v-on:change="onChange" class="form-control"
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
        data() {
            return {
            }
        },
        computed: {
            selected: {
                get: function () {
                    const region = this.$store.getters.region
                    return region === null ? "(None)" : region
                },
                set: function (region) {
                    this.$store.dispatch('changeRegion', region)
                    this.$store.dispatch('computeDisplayedResources')
                }
            },
            regionsForSelection: function () {
                return this.$store.getters.regionsForSelection
            },
        },
        methods: {
            onChange: async function (event) {
                const region = event.target.value
                this.$store.dispatch('changeRegion', region)
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
