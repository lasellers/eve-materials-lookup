<template>
    <div class="loaderbox">
        <span v-if="resourcesCount===0 || blueprintsCount===0 || blueprintsForSelectionCount===0 ||
regionsForSelectionCount===0 || constellationsForSelectionCount===0 || systemsForSelectionCount===0 ||
resourcesForSelectionCount===0"><Spinner/></span>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <code><small>
                    <ul>
                        <li v-if="loadProduction===false">Loading Resources data...</li>
                        <li v-if="loadBlueprints===false">Loading Blueprint data...</li>
                        <li v-if="blueprintsCount===0">Loading Blueprints...</li>
                        <li v-if="blueprintsForSelectionCount===0">Loading Blueprints For Selection...</li>
                        <li v-if="resourcesCount===0">Loading Resources...</li>
                        <li v-if="regionsForSelectionCount===0">Loading Regions For Selection...</li>
                        <li v-if="constellationsForSelectionCount===0">Loading Constellations For Selection...</li>
                        <li v-if="systemsForSelectionCount===0">Loading Systems For Selection...</li>
                        <li v-if="resourcesForSelectionCount===0">Loading Resources For Selection...</li>
                    </ul>
                </small></code>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
    import Spinner from './Spinner.vue'

    // eslint-disable-next-line
    // import productionCsv from '../assets/Production.csv'
    // import blueprintsCsv from '../assets/Blueprints.csv'
    export default {
        name: 'LoaderBox',
        components: {Spinner},
        data() {
            return {
                publicPath: process.env.BASE_URL,
            }
        },
        created() {
            this.onLoad()
        },
        computed: {
            loadProduction: function () {
                return this.$store.getters.loadProduction
            },
            loadBlueprints: function () {
                return this.$store.getters.loadBlueprints
            },
            resourcesCount: function () {
                return this.$store.getters.resourcesCount
            },
            blueprintsCount: function () {
                return this.$store.getters.blueprintsCount
            },
            regionsForSelectionCount: function () {
                return this.$store.getters.regionsForSelectionCount
            },
            constellationsForSelectionCount: function () {
                return this.$store.getters.constellationsForSelectionCount
            },
            systemsForSelectionCount: function () {
                return this.$store.getters.systemsForSelectionCount
            },
            blueprintsForSelectionCount: function () {
                return this.$store.getters.blueprintsForSelectionCount
            },
            resourcesForSelectionCount: function () {
                return this.$store.getters.resourcesForSelectionCount
            }
        },
        methods: {
            onLoad: function () {
                this.getProductionCsv()
                this.getBlueprintsCsv()

                /*
                const [headers, resources] = this.csvToArray(productionCsv)
                this.$store.dispatch('addHeaders', headers)
                this.$store.dispatch('addResources', resources)

                //
                const [blueprintsHeaders, blueprints] = this.csvToArrayRotated(blueprintsCsv)
                this.$store.dispatch('addBlueprintHeaders', blueprintsHeaders)
                this.$store.dispatch('addBlueprints', blueprints)

                //
                // this.$store.dispatch('computeDisplayedResources')
                */
            },

            async getProductionCsv() {
                const headers = new Headers()
                const request = new Request(
                    "./Production.csv",
                    {
                        method: "GET",
                        headers,
                        mode: "cors",
                        cache: "force-cache"
                    }
                )
                fetch(request)
                    .then(response => response.text())
                    .then(data => {
                        this.$store.dispatch('loadProduction', true)

                        // let mb = new Date()

                        const [headers, resources] = this.csvToArray(data)
                        // console.log('==== csvToArray', new Date().getTime() - mb.getTime())
                        // mb = new Date()

                        this.$store.dispatch('addHeaders', headers)
                        // console.log('==== addHeaders', new Date().getTime() - mb.getTime())
                        // mb = new Date()
                        this.$store.dispatch('addResources', resources)
                        // console.log('==== addResources', new Date().getTime() - mb.getTime())
                        // mb = new Date()

                        this.$store.dispatch('updateRegionsForSelection')
                        // console.log('==== updateRegionsForSelection', new Date().getTime() - mb.getTime())
                        // mb = new Date()
                        this.$store.dispatch('updateConstellationsForSelection')
                        // console.log('==== updateConstellationsForSelection', new Date().getTime() - mb.getTime())
                        // mb = new Date()
                        this.$store.dispatch('updateSystemsForSelection')
                        // console.log('==== updateSystemsForSelection', new Date().getTime() - mb.getTime())
                        // mb = new Date()
                        this.$store.dispatch('updateResourcesForSelection')
                        // console.log('==== updateResourcesForSelection', new Date().getTime() - mb.getTime())
                        // mb = new Date()

                        this.$store.dispatch('computeDisplayedResources')
                    })
            },
            async getBlueprintsCsv() {
                const headers = new Headers()
                const request = new Request(
                    "./Blueprints.csv",
                    {
                        method: "GET",
                        headers,
                        mode: "cors",
                        cache: "force-cache"
                    }
                )
                fetch(request)
                    .then(response => response.text())
                    .then(data => {
                        this.$store.dispatch('loadBlueprints', true)

                        const [headers, blueprints] = this.csvToArrayRotated(data)

                        this.$store.dispatch('addBlueprintHeaders', headers)
                        this.$store.dispatch('addBlueprints', blueprints)

                        this.$store.dispatch('computeDisplayedResources')
                    })
            },

            csvToArray: function (csv) {
                const rows = csv.trim().split('\n')
                const headers = rows.shift().trim().split(',')
                let index = 0, len = rows.length
                while (index < len) {
                    //newRows.push(rows[index++].trim().split(','))
                    rows[index] = rows[index].trim().split(',')
                    index++
                }
                /*
                 const newRows = []
                 rows.forEach(row => {
                    newRows.push(row.trim().split(','))
                }) */
                return [
                    headers,
                    rows //  newRows
                ]
            },

            loadCsvTo2dArray: function (csv) {
                const rows = csv.trim().split('\n')
                const newRows = []
                rows.forEach(row => {
                    newRows.push(row.trim().split(','))
                })
                return newRows
            },

            rotate2dArray: function (matrix) {
                const rowsLength = matrix.length
                const columnsLength = matrix[0].length

                // init new array
                let newMatrix = []

                // optionally init new matrix array with empty spaces
                for (let rowIndex = 0; rowIndex < columnsLength; rowIndex++) {
                    newMatrix[rowIndex] = new Array(rowsLength).fill('')
                }

                // copy from old matrix array to new one, rotated 90 degrees
                for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
                    for (let columnIndex = 0; columnIndex < columnsLength; columnIndex++) {
                        // If not the first two rows, it's a number.
                        // There is some ... issues with the original data and quotations,
                        // so clean it -- make it a number
                        newMatrix[columnIndex][rowIndex] = matrix[rowIndex][columnIndex].replace(/"/g, '')
                    }
                }

                return newMatrix
            },

            csvToArrayRotated: function (csv) {
                const arr = this.loadCsvTo2dArray(csv)
                const rows = this.rotate2dArray(arr)
                const headers = rows.shift()
                return [
                    headers,
                    rows
                ]
            },
        }
    }
</script>

<style scoped lang="scss">
    p {
        text-align: left;
    }

    ul.li {
        text-align: left;
    }

    code {
        color: gray;
    }
</style>
