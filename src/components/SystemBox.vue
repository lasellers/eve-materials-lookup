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
                set: function (system) {
                    if (system === '(None)') {
                        system = null
                    }
                    this.$store.dispatch('changeSystem', system)
                    this.$store.dispatch('computeResources')
                    this.$store.dispatch('computeSuggestions')
                    this.$store.dispatch('computeYields')
                }
            },
        },
        methods: {
            // v-on:change="onChange"
           /* onChange: async function (event) {
                this.$store.dispatch('spinnerLock')
                let system = event.target.value
                if (system === '(None)') {
                    system = null
                }
                this.$store.dispatch('changeSystem', system)
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
