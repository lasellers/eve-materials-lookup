<template>
    <div class="loaderbox">
        <p v-if="resourcesCount>0">Loaded</p>
        <p v-if="resourcesCount===0">Loading</p>
    </div>
</template>

<script>
    // eslint-disable-next-line
    import productionCsv from '../assets/Production.csv'

    export default {
        name: 'LoaderBox',
        components: {},
        data() {
            return {
                publicPath: process.env.BASE_URL,
                resourcesCount: 0,
            }
        },
        created() {
            this.onFileLoad()
        },
        methods: {
            onFileLoad: function () {
                const [headers, rawRows] = this.csvToArray(productionCsv)

                this.$store.dispatch('addHeaders', headers)
                this.$store.dispatch('addResources', rawRows)
                this.$store.dispatch('computeDisplayedResources', rawRows)

                this.resourcesCount = this.$store.getters.resourcesCount
            },

            csvToArray: function (csv) {
                const rows = csv.trim().split('\n')
                const headers = rows.shift().trim().split(',')
                const newRows = []
                let count = 0
                rows.forEach(row => {
                    if (++count < 1000) {
                        const line = row.trim()
                        newRows.push(line.split(','))
                    }
                })
                return [
                    headers,
                    newRows
                ]
            },
        }
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
