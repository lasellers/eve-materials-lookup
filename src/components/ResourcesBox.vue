<template>
    <select v-bind:id="resourcesForSelection" v-on:change="onChange" class="form-control">
        <option key=-1 value="">(None)</option>
        <option v-for="(resource, index) in resourcesForSelection" :key="index" v-bind:value="resource">
            {{resource}}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'ResourcesBox',
        props: ['box'],
        components: {},
        data() {
            return {
                resourcesForSelection: []
            }
        },
        created() {
            this.onLoad()
        },
        methods: {
            onLoad: function () {
                this.resourcesForSelection = this.$store.getters.resourcesForSelection
            },
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
        list-style-type: none;
        padding: 0;
    }

    option {
        display: inline-block;
        margin: 0 10px;
    }
</style>
