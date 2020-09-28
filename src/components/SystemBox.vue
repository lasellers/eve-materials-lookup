<template>
    <div class="systembox">
        <b>System</b>&nbsp;
        <select v-bind:id="systemsForSelection" v-on:change="onChange"
                v-on:click="$store.dispatch('spinnerLock')"
                class="form-control">
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
        computed: {
            systemsForSelection: function () {
                return this.$store.getters.systemsForSelection
            },
        },
        methods: {
            system() {
                return this.$store.getters.system
            },
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
