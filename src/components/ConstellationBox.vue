<template>
    <div class="constellationbox">
        <b>Constellation</b>&nbsp;
        <select v-bind:id="constellationsForSelection" v-on:change="onChange"
                v-model="selected"
                class="form-control">
            <option v-for="(constellation, index) in constellationsForSelection" :key="index"
                    v-bind:value="constellation">
                {{constellation}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'ConstellationBox',
        computed: {
            selected: {
                get: function () {
                    const constellation = this.$store.getters.constellation
                    return constellation === null ? "(None)" : constellation
                },
                set: function (constellation) {
                    this.$store.dispatch('changeConstellation', constellation)
                }
            },
            constellationsForSelection: function () {
                return this.$store.getters.constellationsForSelection
            },
        },
        methods: {
            onChange: async function (event) {
                let constellation = event.target.value
                if (constellation === '(None)') {
                    constellation = null
                }
                this.$store.dispatch('changeConstellation', constellation)
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
