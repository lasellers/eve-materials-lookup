<template>
    <div class="suggestions">

        <b>Suggestions</b> <small>These are the highest yield planets for each resource type in the area selected.
        If no areas are selected, then the suggestions are universal.</small>
        <table id="suggestions-list" class="table table-striped table-sm">
            <thead>
            <tr>
                <th v-if="unimportant">Planet Id</th>
                <th>Region</th>
                <th>Constellation</th>
                <th>System</th>
                <th>Planet Name</th>
                <th>Resource</th>
                <th>Output</th>
                <th v-if="unimportant">Richness</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(planet, index) in rows" v-bind:key="index">
                <td v-if="unimportant">{{planet[0]}}</td>
                <td>{{planet[1]}}</td>
                <td>{{planet[2]}}</td>
                <td>{{planet[3]}}</td>
                <td>{{planet[4]}}</td>
                <td>{{planet[6]}}</td>
                <td><b>{{planet[8]}}</b></td>
                <td v-if="unimportant">{{planet[7]}}</td>
            </tr>
            </tbody>
        </table>

        <p v-if="!(rows.length>0)">No suggestions -- Select Region, Constellation, etc to begin.</p>

    </div>
</template>

<script>
    export default {
        name: 'Suggestions',
        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        },
        methods: {},
        computed: {
            unimportant() {
                return !(window.innerWidth < 1024)
            },
            headers() {
                return this.$store.getters.headers
            },
            rows() {
                return this.$store.getters.suggestions
            },
            region() {
                return this.$store.getters.region
            },
            constellation() {
                return this.$store.getters.constellation
            },
            resourceFilters() {
                return this.$store.getters.resourceFilters
            },
            resourcesCount() {
                return this.$store.getters.resourcesCount
            },
            displayedResourcesCount() {
                return this.$store.getters.displayedResourcesCount
            },
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

    /* @media only screen and (max-width: 1024px) {
        .unimportant {
            visibility: hidden;
        }
    } */
</style>
