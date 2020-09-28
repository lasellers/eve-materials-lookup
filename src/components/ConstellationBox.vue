<template>
    <div class="constellationbox">
        <b>Constellation</b>&nbsp;
        <select v-bind:id="constellationsForSelection" v-on:change="onChange"
                v-on:click="$store.dispatch('spinnerLock')"
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
        components: {},
        computed: {
            constellationsForSelection: function () {
                return this.$store.getters.constellationsForSelection
            },
        },
        methods: {
            constellation() {
                return this.$store.getters.constellation
            },
            onChange: async function (event) {
                let constellation = event.target.value
                if (constellation === '(None)') {
                    constellation = null
                }
                this.$store.dispatch('changeConstellation', constellation)
                /* this.$store.dispatch('computeDisplayedResources').then(
                    this.$store.dispatch('spinnerUnlock')
                ) */
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
