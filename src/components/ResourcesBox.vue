<template>
    <select v-bind:id="'resourcesForSelection'+box" v-on:change="onChange" class="form-control"
            v-model="selected">
        <option v-for="(resource, index) in resourcesForSelection" :key="index" v-bind:value="resource">
            {{resource}}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'ResourcesBox',
        props: ['box'],
        data() {
            return {
            }
        },
        computed: {
            selected: {
                get: function () {
                    const filter = this.$store.getters.resourceFilters[this.box]
                    return filter === null ? "(None)": filter
                },
                set: function (resource) {
                    this.$store.dispatch('changeResourceFilter', [this.box, resource])
                    this.$store.dispatch('computeDisplayedResources')
                }
            },
            resourcesForSelection: function () {
                return this.$store.getters.resourcesForSelection
            },
        },
        methods: {
            onChange: async function (event) {
                const resource = event.target.value
                this.$store.dispatch('changeResourceFilter', [this.box, resource])
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
