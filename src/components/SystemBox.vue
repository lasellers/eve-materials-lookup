<template>
    <div class="systembox">
        <b>System</b>&nbsp;
        <select v-bind:id="systemsForSelection" v-on:change="onChange" class="form-control">
            <option key=-1 value=""> (None)</option>
            <option v-for="(system, index) in systemsForSelection" :key="index"
                    v-bind:value="system">
                {{system}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'SystemBox',
        components: {},
        data() {
            return {
                systemsForSelection: []
            }
        },
        created() {
            this.onLoad()
        },
        methods: {
          system() {
                return this.$store.getters.system
            },
            onLoad: function () {
                this.systemsForSelection = this.$store.getters.systemsForSelection
            },
            onChange: async function (event) {
                const constellation = event.target.value
                this.$store.dispatch('changeSystem', constellation)
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
