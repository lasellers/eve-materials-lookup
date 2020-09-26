<template>
    <div class="suggestions-page">

        <b>Suggestions for a Single Planet with most resources</b> <small>These are suggested planets to place mining
        arrays on.</small>

        <table id="suggestions2-list" class="table table-striped table-sm">
            <thead>
            <tr>
                <th>Region</th>
                <th>Constellation</th>
                <th>System</th>
                <th>Planet Name</th>
                <th>Resources and Output</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(planet, index) in suggestionsForSinglePlanetWithMostResources" v-bind:key="index">
                <td>{{planet[1]}}</td>
                <td>{{planet[2]}}</td>
                <td>{{planet[3]}}</td>
                <td>{{planet[4]}}</td>
                <td>
                    <div v-for="(planet2, index2) in planet[10]" v-bind:key="index2">
                        <span v-bind:class="[ isResourceFilters(planet2)]">{{planet2}}</span>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <p v-if="!(suggestionsForSinglePlanetWithMostResources.length>0)">No suggestions. There may not be any such
            planets.</p>

    </div>
</template>

<script>
    export default {
        name: 'SuggestionsPage',
        computed: {
            unimportant() {
                return !(window.innerWidth < 1024)
            },
            headers() {
                return this.$store.getters.headers
            },
            suggestionsForSinglePlanetWithMostResources() {
                return this.$store.getters.suggestionsForSinglePlanetWithMostResources
            },
        },
        methods: {
            isResourceFilters(resource) {
                const filters = this.$store.getters.resourceFilters
                for (let index = 0; index < filters.length; index++) {
                    let filter = filters[index]
                    if (filter !== null && resource.startsWith(filter)) {
                        return 'found'
                    }
                }
                return ''
            }
        },
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

    p {
        text-align: center;
    }

    @media only screen and (max-width: 414px) {
        th, td {
            font-size: x-small;
        }
    }

    @media only screen and (max-width: 375px) {
        th, td {
            font-size: xx-small;
        }
    }

    .found {
        font-weight: bold;
    }
</style>
