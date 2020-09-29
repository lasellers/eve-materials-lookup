<template>
    <div class="yields-page">

        <b>Yields</b> <small>These are the highest yield planets for each resource type in the area selected.
        If no areas are selected, then the suggestions are universal.</small>
        <table id="yields-list" class="table table-striped table-sm">
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

        <p v-if="!(rows.length>0)">No yields -- Select Region, Constellation, etc to begin.</p>

    </div>
</template>

<script>
    export default {
        name: 'YieldsPage',
        created() {
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ reset yield")
                this.$store.dispatch('spinnerReset')
                //this.$store.dispatch('spinnerLock')
               this.$store.dispatch('computeYields')
        },
        watch: {
            rows: function (val) {
                console.log('************************ YieldsPage rows', val)
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
                return this.$store.getters.computedYields
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
</style>
