<template>
    <div class="loaderbox">
        <p v-if="resourcesCount===0">Loading Resources...</p>
        <p v-if="resourcesCount===0">Loading Blueprints...</p>
    </div>
</template>

<script>
    // eslint-disable-next-line
    import productionCsv from '../assets/Production.csv'
    import blueprintsCsv from '../assets/Blueprints.csv'

    export default {
        name: 'LoaderBox',
        components: {},
        data() {
            return {
                publicPath: process.env.BASE_URL,
            }
        },
        created() {
            this.onFileLoad()
        },
        computed: {
            resourcesCount: function () {
                return this.$store.getters.resourcesCount
            },
            blueprintsCount: function () {
                return this.$store.getters.blueprintsCount
            }
        },
        methods: {
            onFileLoad: function () {
                const [headers, resources] = this.csvToArray(productionCsv)
                this.$store.dispatch('addHeaders', headers)
                this.$store.dispatch('addResources', resources)

                //
                const [blueprintsHeaders, blueprints] = this.csvToArrayRotated(blueprintsCsv)
                this.$store.dispatch('addBlueprintHeaders', blueprintsHeaders)
                this.$store.dispatch('addBlueprints', blueprints)

                //
                this.$store.dispatch('computeDisplayedResources')
            },

            csvToArray: function (csv) {
                const rows = csv.trim().split('\n')
                const headers = rows.shift().trim().split(',')
                const newRows = []
                rows.forEach(row => {
                    const line = row.trim()
                    newRows.push(line.split(','))
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
    }
</style>
