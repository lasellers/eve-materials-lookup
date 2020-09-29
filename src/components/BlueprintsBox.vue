<template>
    <div class="blueprintsbox">

        <b>Blueprints</b>&nbsp;
        <select class="form-control" v-model="selected">
            <option v-for="(blueprint, index) in selections"
                    :key="index"
                    v-bind:value="blueprint">
                {{blueprint}}
            </option>
        </select>

        <p class="stats"><small>Blueprints: {{blueprintsCount}}</small></p>

    </div>
</template>

<script>
    export default {
        name: 'BlueprintsBox',
        computed: {
            blueprintsCount() {
                return this.$store.getters.blueprintsCount
            },
            selections: function () {
                return this.$store.getters.blueprintsForSelection
            },
            selected: {
                get: function () {
                    const blueprint = this.$store.getters.blueprint
                    return blueprint === null ? "(None)" : blueprint
                },
                set: function (blueprint) {
                    this.$store.dispatch('changeBlueprint', blueprint)

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
           /* onChange: async function (event) {
                this.$store.dispatch('spinnerLock')
                const blueprint = event.target.value
                this.$store.dispatch('changeBlueprint', blueprint)
                this.$store.dispatch('computeResources')
                this.$store.dispatch('computeSuggestions')
            },*/
        }
    }
</script>

<style scoped lang="scss">
    select {
        margin: .25em;
    }

    option {
    }

    .stats {
        text-align: center;
    }
</style>
