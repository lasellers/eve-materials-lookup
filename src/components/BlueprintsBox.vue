<template>
    <div class="blueprintsbox">

        <div class="container-fluid">
            <div class="row">

                <div class="col-ms-6">
                    <b>Blueprints</b>&nbsp;
                    <select v-bind:id="blueprintsForSelection" v-on:change="onChange" class="form-control"
                            style="width: 80%">
                        <option v-for="(blueprint, index) in blueprintsForSelection"
                                :key="index"
                                v-bind:value="blueprint">
                            {{blueprint}}
                        </option>
                    </select>
                </div>

                <div class="col-md-6 align-items-md-center">
                    <small>Blueprints: {{blueprintsCount}}</small>
                </div>

            </div>
        </div>

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
