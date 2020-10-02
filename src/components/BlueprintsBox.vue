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
                set: async function (blueprint) {
                    this.$store.dispatch('spinnerLock')

                    await this.$store.dispatch('changeBlueprint', blueprint)

                    if (this.$router.currentRoute.path.endsWith('resources')) {
                        await this.$store.dispatch('computeResources')
                    } else if (this.$router.currentRoute.path.endsWith('suggestions')) {
                        await this.$store.dispatch('computeSuggestions')
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

    .stats {
        text-align: center;
    }
</style>
