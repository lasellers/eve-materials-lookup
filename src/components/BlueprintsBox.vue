<template>
    <div class="blueprintsbox">

        <b>Blueprints</b>&nbsp;
        <select class="form-control" v-model="selected">
            <option v-for="(blueprint, index) in selections" :key="index" v-bind:value="blueprint">
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
                console.log('BlueprintsBox: blueprintsCount', this.$store.getters.blueprintsCount)
                return this.$store.getters.blueprintsCount
            },
            selections: function () {
                console.log('BlueprintsBox: selections', this.$store.getters.blueprintsForSelection)
                return this.$store.getters.blueprintsForSelection
            },
            selected: {
                get: function () {
                    const blueprint = this.$store.getters.blueprint
                    console.log('BlueprintsBox: selected get', blueprint)
                    return blueprint === null ? "(None)" : blueprint
                },
                set: function (blueprint) {
                    console.log('BlueprintsBox: selected set', blueprint)
                    this.$store.dispatch('changeBlueprint', blueprint)

                    this.$store.dispatch('spinnerLock')

                    if(this.$router.currentRoute.path.endsWith('/')) {
                        this.$store.dispatch('computeResources')
                    }
                    else if(this.$router.currentRoute.path.endsWith('suggestions')) {
                        this.$store.dispatch('computeSuggestions')
                    }

                }
            },
        },
        methods: {
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
