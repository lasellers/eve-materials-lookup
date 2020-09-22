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

        <p><small>Blueprints: {{blueprintsCount}}</small></p>

    </div>
</template>

<script>
    export default {
        name: 'BlueprintsBox',
        components: {},
        data() {
            return {
                blueprintsForSelection: []
            }
        },
        created() {
            this.onLoad()
        },
        computed: {
            blueprintsCount() {
                return this.$store.getters.blueprintsCount
            },
        },
        methods: {
            onLoad: function () {
                this.blueprintsForSelection = this.$store.getters.blueprintsForSelection
            },
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
