import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
        system: null,
        blueprintHeaders: [],
        blueprints: [],
        blueprintsForSelection: [],
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
        blueprintHeaders: store => {
            return store.blueprintHeaders
        },
        blueprints: store => {
            return store.blueprints
        },
        blueprintsCount: store => {
            return store.blueprints.length
        },
        blueprintsForSelection: store => {
            return store.blueprintsForSelection
        },
    },

    mutations: {
        addHeaders(store, value) {
            store.headers = value
        },
        addResources(store, rows) {
            store.resources = rows

            // regions
            store.regionsForSelection = ['(None)']
            rows.map(row => {
                const regionValue = row[1]
                if (!store.regionsForSelection.includes(regionValue))
                    store.regionsForSelection.push(regionValue)
            })
            store.regionsForSelection.sort()

            // constellations
            store.constellationsForSelection = ['(None)']
            rows.map(row => {
                const constellationValue = row[2]
                if (!store.constellationsForSelection.includes(constellationValue))
                    store.constellationsForSelection.push(constellationValue)
            })
            store.constellationsForSelection.sort()

            // systems
            store.systemsForSelection = ['(None)']
            rows.map(row => {
                const systemValue = row[3]
                if (!store.systemsForSelection.includes(systemValue))
                    store.systemsForSelection.push(systemValue)
            })
            store.systemsForSelection.sort()

            // resources
            store.resourcesForSelection = ['(None)']
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
        addBlueprintHeaders(store, value) {
            store.blueprintHeaders = value
        },
        addBlueprints(store, rows) {
            store.blueprints = rows

            // regions
            store.blueprintsForSelection = ['(None)']
            rows.map(row => {
                const value = row[0] + ' (' + row[1] + ')'
                if (!store.blueprintsForSelection.includes(value))
                    store.blueprintsForSelection.push(value)
            })
            store.blueprintsForSelection.sort()
        },
        changeBlueprint(store, value) {
            if (value === null) {
                store.resourceFilters = [null, null, null, null, null]
                return
            }

            let resources = []

            // get the data for the specific blueprint we'rve reference from the dropdown
            let blueprint = null
            for (let index = 0; index < store.blueprints.length; index++) {
                const compValue = store.blueprints[index][0] + ' (' + store.blueprints[index][1] + ')'
                if (compValue === value) {
                    blueprint = store.blueprints[index]
                    break
                }
            }

            if (blueprint !== null) {
                // go through data indexes 11 to 38, which are the PIs
                // @todo get rid of magic numbers -- have it prescan to get these
                for (let index = 11; index <= 38; index++) {
                    // convert to a number only
                    const value = parseInt(blueprint[index].replace(/\D/g, ''))
                    // if any PI has more than 0 listed, add it to the resources array
                    if (value !== 0) {
                        console.info('HEADER', value, store.blueprintHeaders[index])
                        resources.push(store.blueprintHeaders[index])
                    }
                }
            }

            if (resources.length === 0) {
                resources = [null, null, null, null, null]
            }

            store.resourceFilters = resources
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
            },
            addBlueprintHeaders(context, value) {
                context.commit('addBlueprintHeaders', value)
            },
            addBlueprints(context, value) {
                context.commit('addBlueprints', value)
            },
            changeBlueprint(context, value) {
                context.commit('changeBlueprint', value)
            },
        }
})
