import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        debug: true,
        headers: [],
        resources: [],
        resourcesForSelection: [],
        displayedResources: [],
        resourceFilters: [null, null, null, null, null],
        regionsForSelection: [],
        region: null,
        constellationsForSelection: [],
        constellation: null
    },

    getters: {
        headers: store => {
            return store.headers
        },
        resources: store => {
            return store.resources
        },
        resourcesCount: store => {
            return store.resources.length
        },
        displayedResources: store => {
            return store.displayedResources
        },
        displayedResourcesCount: store => {
            return store.displayedResources.length
        },
        resourcesForSelection: store => {
            return store.resourcesForSelection
        },
        resourceFilters: store => {
            return store.resourceFilters
        },
        regionsForSelection: store => {
            return store.regionsForSelection
        },
        regionsCount: store => {
            return store.regionsForSelection.length
        },
        region: store => {
            return store.region
        },
        constellationsForSelection: store => {
            return store.constellationsForSelection
        },
        constellationsCount: store => {
            return store.constellationsForSelection.length
        },
        constellation: store => {
            return store.constellation
        },
    },

    mutations: {
        addHeaders(store, value) {
            store.headers = value
        },
        addResources(store, rows) {
            store.resources = rows

            // regions
            let regions = []
            rows.map(row => {
                const region = row[1]
                if (!regions.includes(region))
                    regions.push(region)
            })
            console.log(regions)
            store.regionsForSelection = regions.slice(0, 500)

            // resources
            let resources = []
            rows.map(row => {
                const resource = row[6]
                if (!resources.includes(resource))
                    resources.push(resource)
            })
            console.log(resources)
            store.resourcesForSelection = resources.slice(0, 500)

            // constellations
            let constellations = []
            rows.map(row => {
                const constellation = row[2]
                if (!constellations.includes(constellation))
                    constellations.push(constellation)
            })
            console.log(constellations)
            store.constellationsForSelection = constellations.slice(0, 500)
        },
        computeDisplayedResources(store, rows) {
            if (store.region === null) {
                store.displayedResources = rows
            } else {
                const newRows = store.resources.filter(row => {
                    if (row[1] === store.region) {
                        return true;
                    }
                    return false;
                });
                store.displayedResources = newRows
            }
        },
        changeRegion(store, value) {
            store.region = value
        },
        changeConstellation(store, value) {
            store.constellation = value
        },
        changeResourceFilter(store, values) {
            const [index, resource] = values
            store.resourceFilters[index] = resource
        },
    },

    actions: {
        addHeaders(context, value) {
            context.commit('addHeaders', value)
        },
        addResources(context, value) {
            context.commit('addResources', value)
        },
        computeDisplayedResources(context, values) {
            // let values = context.store.state.materials.slice(0, 900)
            let newValues = values.slice(0, 900)
            context.commit('computeDisplayedResources', newValues)
        },
        changeResourceFilter(context, values) {
            context.commit('changeResourceFilter', values)
        },
        changeRegion(context, value) {
            context.commit('changeRegion', value)
        },
        changeConstellation(context, value) {
            context.commit('changeConstellation', value)
        },
    }
})
