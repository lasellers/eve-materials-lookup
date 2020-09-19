<template>
    <div class="displayedResources">
        <div class="row">
            <div class="col-2">Region: {{region}}</div>
            <div class="col-2">Cons: {{constellation}}</div>
            <div class="col-6">Resource Filters: {{resourceFilters.join(',')}}</div>
            <div class="col-2">Displayed Resources: {{displayedResourcesCount}}</div>
        </div>
        <br/>

        <p v-if="!(rows.length>0)">None.</p>

        <table v-if="rows.length>0" id="displayed-resources-list" class="table table-striped">
            <thead>
            <tr>
                <th>Planet Id</th>
                <th>Region</th>
                <th>Constellation</th>
                <th>System</th>
                <th>Planet Name</th>
                <th>Planet Type</th>
                <th>Resource</th>
                <th>Richness</th>
                <th>Output</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(planet, index) in rows" v-bind:key="index">
                <td>{{planet[0]}}</td>
                <td>{{planet[1]}}</td>
                <td>{{planet[2]}}</td>
                <td>{{planet[3]}}</td>
                <td>{{planet[4]}}</td>
                <td>{{planet[5]}}</td>
                <td>{{planet[6]}}</td>
                <td>{{planet[7]}}</td>
                <td>{{planet[8]}}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'DisplayedResources',
        data() {
            return {
                publicPath: process.env.BASE_URL,
            }
        },
        computed: {
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
            displayedResourcesCount() {
                return this.$store.getters.displayedResourcesCount
            },
        },
    }
</script>

<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
