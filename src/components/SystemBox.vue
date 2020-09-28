<template>
    <div class="systembox">
        <b>System</b>&nbsp;
        <select v-bind:id="systemsForSelection" v-on:change="onChange"
                class="form-control"
                v-model="selected">
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
        computed: {
            selected: {
                get: function () {
                    const system = this.$store.getters.system
                    return system === null ? "(None)" : system
                },
                set: function (system) {
                    this.$store.dispatch('changeSystem', system)
                }
            },
            systemsForSelection: function () {
                return this.$store.getters.systemsForSelection
            },
        },
        methods: {
            onChange: async function (event) {
                let system = event.target.value
                if (system === '(None)') {
                    system = null
                }
                this.$store.dispatch('changeSystem', system)
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
