import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadProduction: false,
        loadBlueprints: false,
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
        loadProduction: store => {
            return store.loadProduction
        },
        loadBlueprints: store => {
            return store.loadBlueprints
        },
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
        resourcesForSelectionCount: store => {
            return store.resourcesForSelection.length
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
        regionsForSelectionCount: store => {
            return store.regionsForSelection.length
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
        constellationsForSelectionCount: store => {
            return store.constellationsForSelection.length
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
        systemsForSelectionCount: store => {
            return store.systemsForSelection.length
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
        blueprintsForSelectionCount: store => {
            return store.blueprintsForSelection.length
        },
        yields(store) {
            let rows = []

            store.resourcesForSelection.forEach(resource => {
                let maxIndex = -1
                let maxValue = 0
                const startDate = new Date()
                store.resources.forEach((row, rowIndex) => {
                    let unfiltered = false
                    if (store.region !== null && store.region == row[1]) {
                        unfiltered = true
                    }
                    if (store.constellation !== null && store.constellation == row[1]) {
                        unfiltered = true
                    }
                    if (store.system !== null && store.system == row[1]) {
                        unfiltered = true
                    }
                    if (store.region === null &&
                        store.constellation === null &&
                        store.system === null) {
                        unfiltered = true
                    }
                    if (unfiltered) {
                        const value8 = parseInt(row[8])
                        if (row[6] === resource && value8 > maxValue) {
                            maxIndex = rowIndex
                            maxValue = value8
                        }
                    }
                })
                console.log('yields', new Date().getTime() - startDate.getTime() + 'ms', resource, maxIndex, maxValue)
                if (maxIndex >= 0) {
                    rows.push(store.resources[maxIndex])
                }
            })

            // sort by output DESC
            rows.sort(function (a, b) {
                return b[8] - a[8]
            });

            return rows
        },
        suggestions(store) {
            let rows = []

            store.resourcesForSelection.forEach(resource => {
                let maxIndex = -1
                let maxValue = 0
                store.resources.forEach((row, rowIndex) => {
                    let unfiltered = false
                    if (store.region !== null && store.region == row[1]) {
                        unfiltered = true
                    }
                    if (store.constellation !== null && store.constellation == row[1]) {
                        unfiltered = true
                    }
                    if (store.system !== null && store.system == row[1]) {
                        unfiltered = true
                    }
                    if (store.region === null &&
                        store.constellation === null &&
                        store.system === null) {
                        unfiltered = true
                    }
                    if (unfiltered) {
                        const value8 = parseInt(row[8])
                        if (row[6] === resource && value8 > maxValue) {
                            maxIndex = rowIndex
                            maxValue = value8
                        }
                    }
                })
                // console.log(resource, maxIndex, maxValue)
                if (maxIndex >= 0) {
                    rows.push(store.resources[maxIndex])
                }
            })

            // sort by output DESC
            rows.sort(function (a, b) {
                return b[8] - a[8]
            });

            return rows
        },
    },

    mutations: {
        loadProduction(store, value) {
            store.loadProduction = (value === true)
        },
        loadBlueprints(store, value) {
            store.loadBlueprints = (value === true)
        },
        addHeaders(store, value) {
            store.headers = value
        },
        addResources(store, rows) {
            store.resources = rows
            // put data into store all at once to limit DOM rerenders
            // Originally the *ForSelection updates were here, but moved to seperate mutations to make it easier to
            // track performance and vuex calls
        },
        updateResourcesForSelection(store) {
            let resources = store.resources.map(row => {
                return row[6]
            })
            resources = [...new Set(resources)]
            /* let resources = ['(None)']
            store.resources.map(row => {
                const value = row[6]
                if (!resources.includes(value))
                    resources.push(value)
            }) */
            resources.sort()
            resources.unshift('(None)')
            store.resourcesForSelection = resources
        },
        updateRegionsForSelection(store) {
            let regions = store.resources.map(row => {
                return row[1]
            })
            regions = [...new Set(regions)]
            /*  let regions = ['(None)']
                store.resources.map(row => {
                const value = row[1]
                if (!regions.includes(value))
                    regions.push(value)
            }) */
            regions.sort()
            regions.unshift('(None)')
            store.regionsForSelection = regions
        },
        updateConstellationsForSelection(store) {
            let constellations = store.resources.map(row => {
                return row[2]
            })
            constellations = [...new Set(constellations)]
            /*  let constellations = ['(None)']
                store.resources.map(row => {
                const value = row[2]
                if (!constellations.includes(value))
                    constellations.push(value)
            }) */
            constellations.sort()
            constellations.unshift('(None)')
            store.constellationsForSelection = constellations
        },
        updateSystemsForSelection(store) {
            let systems = store.resources.map(row => {
                return row[3]
            })
            systems = [...new Set(systems)]
            /*   let systems = ['(None)']
                 store.resources.map(row => {
                 const value = row[3]
                 if (!systems.includes(value))
                     systems.push(value)
             })*/
            systems.sort()
            systems.unshift('(None)')
            store.systemsForSelection = systems
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

            // blueprintsForSelection
            let blueprints = []
            rows.map(row => {
                if (row[1] !== 'Rig') {
                    const value = row[0] + ' (' + row[1] + ')'
                    if (!blueprints.includes(value))
                        blueprints.push(value)
                }
            })
            blueprints.sort()
            blueprints.unshift('(None)')
            store.blueprintsForSelection = blueprints
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
            loadProduction(context, value) {
                context.commit('loadProduction', value)
            },
            loadBlueprints(context, value) {
                context.commit('loadBlueprints', value)
            },
            addHeaders(context, value) {
                context.commit('addHeaders', value)
            },
            addResources(context, value) {
                context.commit('addResources', value)
            },
            updateResourcesForSelection(context, value) {
                context.commit('updateResourcesForSelection', value)
            },
            updateRegionsForSelection(context, value) {
                context.commit('updateRegionsForSelection', value)
            },
            updateConstellationsForSelection(context, value) {
                context.commit('updateConstellationsForSelection', value)
            },
            updateSystemsForSelection(context, value) {
                context.commit('updateSystemsForSelection', value)
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
