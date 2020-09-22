<template>
    <div class="blueprintsbox">

        <b>Blueprints</b>&nbsp;
        <select v-bind:id="blueprintsForSelection" v-on:change="onChange" class="form-control">
            <option v-for="(blueprint, index) in blueprintsForSelection"
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
        components: {},
        data() {
            return {}
        },
        computed: {
            blueprintsCount() {
                return this.$store.getters.blueprintsCount
            },
            blueprintsForSelection: function () {
                return this.$store.getters.blueprintsForSelection
            },
        },
        methods: {
            onChange: async function (event) {
                const blueprint = event.target.value
                this.$store.dispatch('changeBlueprint', blueprint)
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
