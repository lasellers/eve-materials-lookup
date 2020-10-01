<template>
    <div class="home">

        <div class="container-fluid">

            <p>
                This app is to help find Planetary Materials for the mobile game <b>Eve Echoes</b>.
                Choosing the best planets to mine resources from can be very time consuming, if done manually.
            </p>
            <p>
                If you click on
                <router-link to="./resources" class="">Resources</router-link>
                the app will look through all the data it has for all planets
                matching the resources you've specified in the dropdowns, and ordering by highest output.
            </p>
            <p>
                <router-link to="./suggestions" class="">Suggestions</router-link>
                will do something similar, but looks
                for planets with groups of the resources you are interested in to try to reduce the number of planets
                you have to travel to, or optimize your gathering so you can supply materials for multiple on going
                blueprints at once.
            </p>
            <p>
                <router-link to="./yields" class="">Yields</router-link>
                simply shows the planet with the highest yield for each resource type for the area you have selected.
            </p>

            <hr>

            <p>
                For those who enjoys stats, here are a few data points.
            </p>
            <p>
                Currently the app loads three (3) different CSVs and pre-computes some of the following data from those.
                As you make selections from the dropdowns, it computes the rest of the output.
            </p>

            <div class="row text-left">
                <div class="col-12"><b>Resources:</b> {{resourcesCount}}</div>
                <div class="col-12"><b>Blueprints:</b> {{blueprintsCount}}</div>
                <div class="col-12"><b>Systems:</b> {{systemsCount}}</div>

                <div class="col-12"><b>Resources by planets:</b> {{resourcesByPlanetCount}}</div>

                <div class="col-12"><b>Regions:</b> {{regionsForSelectionCount}}</div>
                <div class="col-12"><b>Constellations:</b> {{constellationsForSelectionCount}}</div>
                <div class="col-12"><b>Systems:</b> {{systemsForSelectionCount}}</div>

                <div class="col-12"><b>Computed Resources:</b> {{computedResourcesCount}}</div>
                <div class="col-12"><b>Computed Suggestions:</b> {{computedSuggestionsCount}}</div>
                <div class="col-12"><b>Computed Yields:</b> {{computedYieldsCount}}</div>

                <div class="col-12"><b>Spinner:</b> {{spinnerCount}}</div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            spinnerCount() {
                return this.$store.getters.spinnerCount
            },
            resourcesByPlanetCount() {
                return this.$store.getters.resourcesByPlanetCount
            },
            resourcesCount() {
                return this.$store.getters.resourcesCount
            },

            regionsForSelectionCount() {
                return this.$store.getters.regionsForSelectionCount
            },
            constellationsForSelectionCount() {
                return this.$store.getters.constellationsForSelectionCount
            },
            systemsForSelectionCount() {
                return this.$store.getters.systemsForSelectionCount
            },

            blueprintsCount() {
                return this.$store.getters.blueprintsCount
            },
            systemsCount() {
                return this.$store.getters.systemsCount
            },

            computedResourcesCount() {
                return this.$store.getters.computedResourcesCount
            },
            computedSuggestionsCount() {
                return this.$store.getters.computedSuggestionsCount
            },
            computedYieldsCount() {
                return this.$store.getters.computedYieldsCount
            },
        },
    }
</script>

<style scoped lang="scss">
    p {
        text-align: justify;
        padding: .1em;
    }
</style>
