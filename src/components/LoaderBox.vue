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
     * Need to review this at some point and simplify.
     */
    import Spinner from './Spinner.vue'

    // eslint-disable-next-line
    // import productionCsv from '../assets/Production.csv'
    // import blueprintsCsv from '../assets/Blueprints.csv'
    export default {
        name: 'LoaderBox',
        components: {
            Spinner
        },
        async created() {
            this.$store.dispatch('spinnerLock')

            await this.getBlueprintsCsv()
            await this.getSystemsCsv()
            await this.getProductionCsv()

            // when initially created, we pre-pop the resources and suggestions for whatever blueprint is
            // the default in the vuex store (Currently a Coercer II)
            const blueprint = await this.$store.getters.blueprint
            await this.$store.dispatch('changeBlueprint', blueprint)

            const region = await this.$store.getters.region
            await this.$store.dispatch('changeRegion', region)

            await this.$store.dispatch('computeResources')
            this.timingLog('computeResources')

            await this.$store.dispatch('computeSuggestions')
            this.timingLog('computeSuggestions')

            await this.$store.dispatch('computeYields')
            this.timingLog('computeYields')

            this.$store.dispatch('spinnerUnlock')
        },
        computed: {
            showSpinner: function () {
                return this.$store.getters.showSpinner
            },
            spinnerCount: function () {
                return this.$store.getters.spinnerCount
            },
        },
        data() {
            return {
                startDate: new Date()
            }
        },
        methods: {
            timingLog(msg) {
                console.log(msg, new Date().getTime() - this.startDate.getTime() + 'ms')
                this.startDate = new Date()
            },
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
                await fetch(request)
                    .then(response => response.text())
                    .then(async (data) => {
                        // @note Since some of the pre-calcs do require other pre-calced data, we generally
                        // just add awaits to all ops here so everything occurs in order.

                        const [headers, resources] = this.csvToArray(data)
                        this.timingLog('csvToArray')

                        await this.$store.dispatch('addHeaders', headers)
                        this.timingLog('addHeaders')

                        await this.$store.dispatch('addResources', resources)
                        this.timingLog('addResources')

                        await this.$store.dispatch('updateRegionsForSelection')
                        this.timingLog('updateRegionsForSelection')

                        await this.$store.dispatch('updateConstellationsForSelection')
                        this.timingLog('updateConstellationsForSelection')

                        await this.$store.dispatch('updateSystemsForSelection')
                        this.timingLog('csvToArray')

                        await this.$store.dispatch('updateResourcesForSelection')
                        this.timingLog('updateResourcesForSelection')

                        await this.$store.dispatch('updateResourcesByPlanet')
                        this.timingLog('updateResourcesByPlanet')

                        await this.$store.dispatch('yieldsPreSort')
                        this.timingLog('yieldsPreSort')

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
                await fetch(request)
                    .then(response => response.text())
                    .then(data => {
                        const [headers, blueprints] = this.csvToArrayRotated(data)

                        this.$store.dispatch('addBlueprintHeaders', headers)
                        this.timingLog('addBlueprintHeaders')

                        this.$store.dispatch('addBlueprints', blueprints)
                        this.timingLog('addBlueprints')

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
                await fetch(request)
                    .then(response => response.text())
                    .then(data => {
                        const [headers, resources] = this.csvToArray(data)
                        this.timingLog('csvToArray')

                        this.$store.dispatch('addSystemsHeaders', headers)
                        this.timingLog('addSystemsHeaders')

                        this.$store.dispatch('addSystems', resources)
                        this.timingLog('addSystems')

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
