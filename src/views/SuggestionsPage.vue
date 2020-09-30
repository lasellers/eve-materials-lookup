<template>
    <div class="suggestions-page">

        <b>Suggestions for a Single Planet with most resources</b> <small>These are suggested planets to place mining
        arrays on.</small>

        <table id="suggestions-list" class="table table-striped table-sm">
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
            <tr v-for="(planet, index) in rows" v-bind:key="index">
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

        <p v-if="!(rows.length>0)">No suggestions. There may not be any such
            planets.</p>

    </div>
</template>

<script>
    export default {
        name: 'SuggestionsPage',
        created() {
            // this.$store.dispatch('spinnerReset')
            this.$store.dispatch('spinnerLock')
            this.$store.dispatch('computeSuggestions')
        },
        watch: {
            rows: function () {
                this.$store.dispatch('spinnerUnlock')
            }
        },
        computed: {
            unimportant() {
                return !(window.innerWidth < 1024)
            },
            headers() {
                return this.$store.getters.headers
            },
            rows() {
                return this.$store.getters.computedSuggestions
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
