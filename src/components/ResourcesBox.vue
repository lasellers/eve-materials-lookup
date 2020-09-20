<template>
    <select v-bind:id="index" v-on:change="onChange" class="form-control">
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
        data() {
            return {}
        },
        computed: {
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
