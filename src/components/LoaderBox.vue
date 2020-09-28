<template>
    <div class="loaderbox">
        <span v-if="showSpinner"><Spinner/></span>
        <div class="row" v-if="showSpinner">
            <div class="col-md-12 text-center">
                <code>Loading data and pre-processing....</code>
            </div>
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
            this.$store.dispatch('spinnerLock')
            this.getProductionCsv().then(
                this.getBlueprintsCsv().then(
                    this.getSystemsCsv().then(
                        this.$store.dispatch('spinnerUnlock')
                    )
                ),
            )
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
            },
            showSpinner: function () {
                return this.$store.getters.showSpinner
            },
            currentSpinnerCount: function () {
                return this.$store.getters.currentSpinnerCount
            },
        },
        methods: {
            async getProductionCsv() {
                this.$store.dispatch('spinnerLock')
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

                        let startDate = new Date()

                        const [headers, resources] = this.csvToArray(data)
                        console.log('==== csvToArray', new Date().getTime() - startDate.getTime())
                        startDate = new Date()

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('addHeaders', headers).then(() => {
                            console.log('==== addHeaders', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('addResources', resources).then(() => {
                            console.log('==== addResources', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('updateRegionsForSelection').then(() => {
                            console.log('==== updateRegionsForSelection', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('updateConstellationsForSelection').then(() => {
                            console.log('==== updateConstellationsForSelection', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('updateSystemsForSelection').then(() => {
                            console.log('==== updateSystemsForSelection', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('updateResourcesForSelection').then(() => {
                            console.log('==== updateResourcesForSelection', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('updateResourcesByPlanet').then(() => {
                            console.log('==== updateResourcesByPlanet', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('yieldsPreSort').then(() => {
                            console.log('==== yieldsPreSort', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('computeDisplayedResources').then(() => {
                            console.log('==== computeDisplayedResources', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerUnlock')
                    })
            },
            async getBlueprintsCsv() {
                this.$store.dispatch('spinnerLock')
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
                        let startDate = new Date()

                        const [headers, blueprints] = this.csvToArrayRotated(data)

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('addBlueprintHeaders', headers).then(() => {
                            console.log('==== addBlueprintHeaders', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('addBlueprints', blueprints).then(() => {
                            console.log('==== addBlueprints', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('computeDisplayedResources', blueprints).then(() => {
                            console.log('==== computeDisplayedResources', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerUnlock')
                    })
            },

            csvToArray: function (csv) {
                const rows = csv.trim().split('\n')
                const headers = rows.shift().trim().split(',')
                let index = 0, len = rows.length
                while (index < len) {
                    rows[index] = rows[index].trim().split(',')
                    index++
                }
                return [
                    headers,
                    rows
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


            async getSystemsCsv() {
                this.$store.dispatch('spinnerLock')
                const headers = new Headers()
                const request = new Request(
                    "./Systems.csv",
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
                        let startDate = new Date()

                        const [headers, resources] = this.csvToArray(data)
                        console.log('==== systems csvToArray', new Date().getTime() - startDate.getTime())
                        startDate = new Date()

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('addSystemsHeaders', headers).then(() => {
                            console.log('==== addSystemsHeaders', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('addSystems', resources).then(() => {
                            console.log('==== addSystems', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        this.$store.dispatch('spinnerUnlock')
                    })
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
