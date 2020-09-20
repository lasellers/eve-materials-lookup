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
        region: 'Delve',
        constellationsForSelection: [],
        constellation: null,
        systemsForSelection: [],
        system: null
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
        systemsForSelection: store => {
            return store.systemsForSelection
        },
        systemsCount: store => {
            return store.systemsForSelection.length
        },
        system: store => {
            return store.system
        },
    },

    mutations: {
        addHeaders(store, value) {
            store.headers = value
        },
        addResources(store, rows) {
            store.resources = rows

            // regions
            store.regionsForSelection = []
            rows.map(row => {
                const regionValue = row[1]
                if (!store.regionsForSelection.includes(regionValue))
                    store.regionsForSelection.push(regionValue)
            })
            store.regionsForSelection.sort()

            // constellations
            store.constellationsForSelection = []
            rows.map(row => {
                const constellationValue = row[2]
                if (!store.constellationsForSelection.includes(constellationValue))
                    store.constellationsForSelection.push(constellationValue)
            })
            store.constellationsForSelection.sort()

            // systems
            store.systemsForSelection = []
            rows.map(row => {
                const systemValue = row[3]
                if (!store.systemsForSelection.includes(systemValue))
                    store.systemsForSelection.push(systemValue)
            })
            store.systemsForSelection.sort()

            // resources
            store.resourcesForSelection = []
            rows.map(row => {
                const resourceValue = row[6]
                if (!store.resourcesForSelection.includes(resourceValue))
                    store.resourcesForSelection.push(resourceValue)
            })
            store.resourcesForSelection.sort()

        },
        changeRegion(store, value) {
            store.region = value === "" ? null : value
        },
        changeConstellation(store, value) {
            store.constellation = value === "" ? null : value
        },
        changeSystem(store, value) {
            store.system = value === "" ? null : value
        },
        changeResourceFilter(store, values) {
            const [index, resource] = values
            store.resourceFilters[index] = resource
        },
        computeDisplayedResources(store) {
            // filter out everything by regions or constellations and optionally up to 5 resource types
            if (store.region === null && store.constellation === null && store.system === null) {
                // short circuit
                store.displayedResources = [];
            } else {
                // get list of resource filters without nulls
                const resourceFilters = store.resourceFilters.filter(item => {
                    return (item !== null)
                })

                // temp hold for new data-- we update the store only once at the end
                let newRows = []

                // if no resource filters, just region and/or constellation
                if (resourceFilters.length === 0) {
                    newRows = store.resources.filter(row => {
                        if (store.region !== null && row[1] === store.region) {
                            return true;
                        } else if (store.constellation !== null && row[2] === store.constellation) {
                            return true;
                        } else if (store.system !== null && row[3] === store.system) {
                            return true;
                        }
                        return false;
                    });
                }

                // if region and/or constellation and resource filters
                if (!(resourceFilters.length === 0)) {
                    newRows = store.resources.filter(row => {
                        if ((store.region !== null && row[1] === store.region) &&
                            resourceFilters.includes(row[6])) {
                            return true;
                        } else if ((store.constellation !== null && row[2] === store.constellation) &&
                            resourceFilters.includes(row[6])) {
                            return true;
                        } else if ((store.system !== null && row[3] === store.system) &&
                            resourceFilters.includes(row[6])) {
                            return true;
                        }

                        return false;
                    });
                }

                // sort by output DESC
                newRows.sort(function (a, b) {
                    return b[8] - a[8]
                });

                // update the store once
                store.displayedResources = newRows;
            }
        },
    },

    actions:
        {
            addHeaders(context, value) {
                context.commit('addHeaders', value)
            },
            addResources(context, value) {
                context.commit('addResources', value)
            },
            changeRegion(context, value) {
                context.commit('changeRegion', value)
            },
            changeConstellation(context, value) {
                context.commit('changeConstellation', value)
            },
            changeSystem(context, value) {
                context.commit('changeSystem', value)
            },
            changeResourceFilter(context, values) {
                context.commit('changeResourceFilter', values)
            },
            computeDisplayedResources(context) {
                context.commit('computeDisplayedResources')
            }
        }
})
