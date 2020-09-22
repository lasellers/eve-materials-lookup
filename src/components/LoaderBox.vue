<template>
    <div class="loaderbox">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <code><ul>
                    <li v-if="blueprintsCount===0">Loading Blueprints...</li>
                    <li v-if="blueprintsForSelectionCount===0">Loading Blueprints For Selection...</li>
                    <li v-if="resourcesCount===0">Loading Resources...</li>
                    <li v-if="regionsForSelectionCount===0">Loading Regions For Selection...</li>
                    <li v-if="constellationsForSelectionCount===0">Loading Constellations For Selection...</li>
                    <li v-if="systemsForSelectionCount===0">Loading Systems For Selection...</li>
                    <li v-if="resourcesForSelectionCount===0">Loading Resources For Selection...</li>
                </ul></code>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line
    // import productionCsv from '../assets/Production.csv'
    // import blueprintsCsv from '../assets/Blueprints.csv'
    export default {
        name: 'LoaderBox',
        components: {},
        data() {
            return {
                publicPath: process.env.BASE_URL,
            }
        },
        created() {
            this.onLoad()
        },
        computed: {
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
                        const [headers, resources] = this.csvToArray(data)
                        this.$store.dispatch('addHeaders', headers)
                        this.$store.dispatch('addResources', resources)
                        this.$store.dispatch('updateRegionsForSelection')
                        this.$store.dispatch('updateConstellationsForSelection')
                        this.$store.dispatch('updateSystemsForSelection')
                        this.$store.dispatch('updateResourcesForSelection')
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
                        const [headers, blueprints] = this.csvToArrayRotated(data)
                        this.$store.dispatch('addBlueprintHeaders', headers)
                        this.$store.dispatch('addBlueprints', blueprints)
                        this.$store.dispatch('computeDisplayedResources')
                    })
            },

            csvToArray: function (csv) {
                const rows = csv.trim().split('\n')
                const headers = rows.shift().trim().split(',')
                const newRows = []
                rows.forEach(row => {
                    newRows.push(row.trim().split(','))
                })
                return [
                    headers,
                    newRows
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
</style>
