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
    /**
     * The LoaderBox has become a bit complicated over time, but it pre-loads and pre-computes
     * everything that is needed for the normal operation of the app. In the correct order.
     */
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
                    this.getSystemsCsv().then(() => {
                            this.$store.dispatch('spinnerUnlock')
                        }
                    )
                )
            )
        },
        computed: {
            showSpinner: function () {
                return this.$store.getters.showSpinner
            },
            spinnerCount: function () {
                return this.$store.getters.spinnerCount
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
                        this.$store.dispatch('computeResources').then(() => {
                            console.log('==== computeResources', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })

                        // when initially created, we pre-pop the resources and suggestions for whatwver blueprint is
                        // the default in the vuex store (Currently a Coercer II)
                        const blueprint = this.$store.getters.blueprint
                        this.$store.dispatch('changeBlueprint', blueprint)

                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('computeSuggestions').then(() => {
                            console.log('==== computeSuggestions', new Date().getTime() - startDate.getTime())
                            startDate = new Date()
                            this.$store.dispatch('spinnerUnlock')
                        })
                        this.$store.dispatch('spinnerLock')
                        this.$store.dispatch('computeYields').then(() => {
                            console.log('==== computeYields', new Date().getTime() - startDate.getTime())
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
                return [headers, rows]
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
