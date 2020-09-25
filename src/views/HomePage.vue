<template>
    <div class="displayedResources">

        <div class="container-fluid">
            <div class="row">
                <div class="col-4 stats"><small>Resources: {{resourcesCount}}</small></div>
                <div class="col-4 stats"><small>Planets with: {{resourcesByPlanetCount}}</small></div>
                <div class="col-4 stats"><small>Displayed Resources: {{displayedResourcesCount}}</small></div>
            </div>
        </div>

        <table id="displayed-resources-list" class="table table-striped table-sm">
            <thead>
            <tr>
                <th v-if="unimportant">Planet Id</th>
                <th>Region</th>
                <th>Constellation</th>
                <th>System</th>
                <th>Planet Name</th>
                <th>Resource</th>
                <th>Output</th>
                <th v-if="unimportant">Planet Type</th>
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
                <td v-if="unimportant">{{planet[5]}}</td>
                <td v-if="unimportant">{{planet[7]}}</td>
            </tr>
            </tbody>
        </table>

        <p v-if="!(rows.length>0)">No displayed resources -- Select Region, Constellation, etc to begin.</p>

    </div>
</template>

<script>
    export default {
        name: 'DisplayedResources',
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
                return this.$store.getters.displayedResources
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
            resourcesByPlanetCount() {
                return this.$store.getters.resourcesByPlanetCount
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

    .stats {
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
</style>
