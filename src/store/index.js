import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        spinnerCount: 0,
        headers: [],
        resources: [],
        blueprintHeaders: [],
        blueprints: [],
        systemsHeaders: [],
        systems: [],
        resourcesForSelection: [],
        resourceFilters: [null, null, null, null, null],
        regionsForSelection: [],
        region: 'Delve',
        constellationsForSelection: [],
        constellation: null,
        systemsForSelection: [],
        system: null,
        blueprint: null,
        blueprintsForSelection: [],
        resourcesByPlanet: [],
        yieldsPreSort: [],
        computedResources: [],
        computedSuggestions: [],
        computedYields: []
    },

    getters: {
        showSpinner: store => {
            console.log(' ################################## showSpinner count:', store.spinnerCount)
            return (store.spinnerCount > 0)
        },
        spinnerCount: store => {
            console.log(' ##################################                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                spinnerCount count:', store.spinnerCount)
            return store.spinnerCount
        },
        computedResources: store => {
            return store.computedResources
        },
        computedSuggestions: store => {
            return store.computedSuggestions
        },
        computedYields: store => {
            return store.computedYields
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
        resourcesForSelectionCount: store => {
            return store.resourcesForSelection.length
        },
        resourcesForSelection: store => {
            return store.resourcesForSelection
        },
        resourceFilters: store => {
            return [...store.resourceFilters, store.blueprint]
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
        constellation: store => {
            return store.constellation
        },
        systemsForSelection: store => {
            return store.systemsForSelection
        },
        systemsForSelectionCount: store => {
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
        computedResourcesCount: store => {
            return store.computedResources.length
        },
        resourcesByPlanetCount: store => {
            return store.resourcesByPlanet.length
        },
    },

    mutations: {
        spinnerReset(store) {
            store.spinnerCount = 0
            console.info('000000000000 spinnerReset == 0')
        },
        spinnerLock(store) {
            store.spinnerCount++
            console.info('>>>>>>>> spinnerCount++', store.spinnerCount)
        },
        spinnerUnlock(store) {
            store.spinnerCount--
            // if(store.spinnerCount < 0) store.spinnerCount = 0
            console.info('<<<<<<<< spinnerCount--', store.spinnerCount)
        },
        addHeaders(store, value) {
            store.headers = value
        },
        addResources(store, rows) {
            store.resources = rows
        },
        updateResourcesForSelection(store) {
            const startDate = new Date()

            let resources = store.resources.map(row => {
                return row[6]
            })
            resources = [...new Set(resources)]
            resources.sort()
            resources.unshift('(None)')
            store.resourcesForSelection = resources

            console.log('updateResourcesForSelection', new Date().getTime() - startDate.getTime() + 'ms')
        },
        updateRegionsForSelection(store) {
            const startDate = new Date()

            let regions = store.resources.map(row => {
                return row[1]
            })
            regions = [...new Set(regions)]
            regions.sort()
            regions.unshift('(None)')
            store.regionsForSelection = regions

            console.log('updateRegionsForSelection', new Date().getTime() - startDate.getTime() + 'ms')
        },
        updateConstellationsForSelection(store) {
            const startDate = new Date()

            let constellations = store.resources.map(row => {
                return row[2]
            })
            constellations = [...new Set(constellations)]
            constellations.sort()
            constellations.unshift('(None)')
            store.constellationsForSelection = constellations

            console.log('updateConstellationsForSelection', new Date().getTime() - startDate.getTime() + 'ms')
        },
        updateSystemsForSelection(store) {
            const startDate = new Date()

            let systems = store.resources.map(row => {
                return row[3]
            })
            systems = [...new Set(systems)]
            systems.sort()
            systems.unshift('(None)')
            store.systemsForSelection = systems

            console.log('updateSystemsForSelection', new Date().getTime() - startDate.getTime() + 'ms')
        },
        changeRegion(store, value) {
            store.region = value === "" ? null : value
            store.constellation = null
            store.system = null
        },
        changeConstellation(store, value) {
            store.region = null
            store.constellation = value === "" ? null : value
            store.system = null
        },
        changeSystem(store, value) {
            store.region = null
            store.constellation = null
            store.system = value === "" ? null : value
        },
        changeResourceFilter(store, values) {
            const [index, resource] = values
            store.resourceFilters[index] = resource

            console.log('changeResourceFilter', store.resourceFilters)
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
            store.blueprint = value

            if (value === null) {
                // store.resourceFilters = [null, null, null, null, null]
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
                    const value = parseFloat(blueprint[index].replace(/\D/g, ''))
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
        updateResourcesByPlanet(store) {
            const startDate = new Date()

            //
            let sourceResources = JSON.parse(JSON.stringify(store.resources))
            sourceResources.sort(function (a, b) {
                return (b[4] - a[4])
            });

            console.log('resourcesByPlanet first sort', new Date().getTime() - startDate.getTime() + 'ms')

            //
            let rows = []

            let currentPlanet = null
            sourceResources.forEach((row) => {
                if (currentPlanet !== row[4]) {
                    currentPlanet = row[4]
                    rows.push(row)
                    // 6 is resource names, 7 is sum of outputs, 8 is full description, 9 is count, 10 is output
                    rows[rows.length - 1][6] = [row[6]]
                    rows[rows.length - 1][7] = parseFloat(row[8])
                    rows[rows.length - 1][10] = [row[6] + ' (' + row[8] + ')']
                    rows[rows.length - 1][8] = [parseFloat(row[8])]
                    // rows[rows.length - 1][8] = [row[8]]
                } else {
                    rows[rows.length - 1][6].push(row[6])
                    rows[rows.length - 1][7] += parseFloat(row[8])
                    rows[rows.length - 1][10].push(row[6] + ' (' + row[8] + ')')
                    rows[rows.length - 1][8].push(parseFloat(row[8]))
                    // rows[rows.length - 1][8].push(row[8])
                }
            })

            console.log('resourcesByPlanet compile', new Date().getTime() - startDate.getTime() + 'ms')

            // sort by output DESC
            rows.sort(function (a, b) {
                return b[7] - a[7]
            });
            // sort by planet ASC
            rows.sort(function (a, b) {
                return b[8] < a[8] ? -1 : 1
            });

            console.log('resourcesByPlanet last sort', new Date().getTime() - startDate.getTime() + 'ms')

            store.resourcesByPlanet = rows
        },
        addSystemsHeaders(store, value) {
            store.systemsHeaders = value
        },
        addSystems(store, rows) {
            store.systems = rows
        },

        yieldsPreSort(store) {
            const startDate = new Date()

            // We preoptimize the searches later on by sorting the data once by output DESC
            // That way we can break at the first match instead of doing full table searches
            store.yieldsPreSort = store.resources
            store.yieldsPreSort.sort(function (a, b) {
                return b[8] - a[8]
            });
            console.log('yields pre-sort', new Date().getTime() - startDate.getTime() + 'ms')
        },

        computeResources(store) {
            const startDate = new Date()

            console.log('computeResources init', new Date().getTime() - startDate.getTime() + 'ms')

            // get list of resource filters without nulls
            let resourceFilters = []
            if (store.resourceFilters !== null) {
                resourceFilters = store.resourceFilters.filter(item => {
                    return (item !== null)
                })
            }
            console.log('computeResources resourceFilters', new Date().getTime() - startDate.getTime() + 'ms',
                resourceFilters)

            // filter out everything by regions or constellations and optionally up to
            // 5 resource types
            if (
                store.region === null && store.constellation === null && store.system === null
            ) {
                // short circuit
                console.log('computeResources short circuit', new Date().getTime() - startDate.getTime() + 'ms')
                return []
            }

            // temp hold for new data-- we update the store only once at the end
            let newRows = []

            // if no resource filters, just region and/or constellation
            if (resourceFilters.length === 0) {

                if (store.region !== null) {
                    newRows = store.resources.filter(row => {
                        return (row[1] === store.region)
                    })
                } else if (store.constellation !== null) {
                    newRows = store.resources.filter(row => {
                        return (row[2] === store.constellation)
                    })
                } else if (store.system !== null) {
                    newRows = store.resources.filter(row => {
                        return (row[3] === store.system)
                    })
                }

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

            console.log('computeResources filter', new Date().getTime() - startDate.getTime() + 'ms')

            // sort by output DESC
            newRows.sort(function (a, b) {
                return b[8] - a[8]
            });
            console.log('computeResources sort', new Date().getTime() - startDate.getTime() + 'ms')

            store.computedResources = newRows
        },
        computeSuggestions(store) {
            console.log('computeSuggestions')

            const startDate = new Date()

            let minNumber = 3

            // get list of resource filters without nulls
            const resourceFilters = store.resourceFilters.filter(item => {
                return (item !== null)
            })

            let rows = []

            if (store.region !== null) {
                store.resourcesByPlanet.forEach((row) => {
                    if (store.region === row[1]) {
                        if (row[6].length >= minNumber) {
                            let count = 0
                            resourceFilters.forEach(resource => {
                                if (row[6].includes(resource)) {
                                    // row[9] = ++count
                                    count++
                                }
                            })
                            if (count >= minNumber) {
                                rows.push(row)
                            }
                        }
                    }
                })
            } else if (store.constellation !== null) {
                store.resourcesByPlanet.forEach((row) => {
                    if (store.constellation === row[2]) {
                        if (row[6].length >= minNumber) {
                            let count = 0
                            resourceFilters.forEach(resource => {
                                if (row[6].includes(resource)) {
                                    // row[9] = ++count
                                    count++
                                }
                            })
                            if (count >= minNumber) {
                                rows.push(row)
                            }
                        }
                    }
                })
            } else if (store.system !== null) {
                store.resourcesByPlanet.forEach((row) => {
                    if (store.system === row[3]) {
                        if (row[6].length >= minNumber) {
                            let count = 0
                            resourceFilters.forEach(resource => {
                                if (row[6].includes(resource)) {
                                    // row[9] = ++count
                                    count++
                                }
                            })
                            if (count >= minNumber) {
                                rows.push(row)
                            }
                        }
                    }
                })
            } else {
                store.resourcesByPlanet.forEach((row) => {
                    if (row[6].length >= minNumber) {
                        let count = 0
                        resourceFilters.forEach(resource => {
                            if (row[6].includes(resource)) {
                                // row[9] = ++count
                                count++
                            }
                        })
                        if (count >= minNumber) {
                            rows.push(row)
                        }
                    }
                })
            }
            console.log('computeSuggestions rows', new Date().getTime() - startDate.getTime() + 'ms')

            // sort by region ASC
            rows.sort(function (a, b) {
                return a[1] < b[1] ? -1 : 1
            });
            console.log('computeSuggestions sort', new Date().getTime() - startDate.getTime() + 'ms')

            store.computedSuggestions = rows
        },
        computeYields(store) {
            const startDate = new Date()

            let sourceResources = store.yieldsPreSort
            let sourceResourcesLen = sourceResources.length

            //
            let rows = new Array(0)
            let rowCount = 0

            console.log(store.region, store.constellation, store.system)
            // none
            if (store.region === null && store.constellation === null && store.system === null) {
                console.log('computeYields all begin', new Date().getTime() - startDate.getTime() + 'ms')
                store.resourcesForSelection.forEach(resource => {
                    const startDate = new Date()
                    for (let rowIndex = 0; rowIndex < sourceResourcesLen; rowIndex++) {
                        if (sourceResources[rowIndex][6] === resource && parseFloat(sourceResources[rowIndex][8]) > 0) {
                            rows[rowCount++] = sourceResources[rowIndex]
                            console.log('computeYields all', new Date().getTime() - startDate.getTime() + 'ms', resource)
                            break
                        }
                    }
                })
            } else if (store.region !== null) { // region
                store.resourcesForSelection.forEach(resource => {
                    const startDate = new Date()
                    for (let rowIndex = 0; rowIndex < sourceResourcesLen; rowIndex++) {
                        if (store.region == sourceResources[rowIndex][1]) {
                            if (sourceResources[rowIndex][6] === resource && parseFloat(sourceResources[rowIndex][8]) > 0) {
                                rows[rowCount++] = sourceResources[rowIndex]
                                console.log('computeYields region', new Date().getTime() - startDate.getTime() + 'ms', resource)
                                break
                            }
                        }
                    }
                })
            } else if (store.constellation !== null) { // constellation
                store.resourcesForSelection.forEach(resource => {
                    const startDate = new Date()
                    for (let rowIndex = 0; rowIndex < sourceResourcesLen; rowIndex++) {
                        if (store.constellation == sourceResources[rowIndex][2]) {
                            if (sourceResources[rowIndex][6] === resource && parseFloat(sourceResources[rowIndex][8]) > 0) {
                                rows[rowCount++] = sourceResources[rowIndex]
                                console.log('computeYields constellation', new Date().getTime() - startDate.getTime() + 'ms', resource)
                                break
                            }
                        }
                    }
                })
            } else if (store.system !== null) { // system
                store.resourcesForSelection.forEach(resource => {
                    const startDate = new Date()
                    for (let rowIndex = 0; rowIndex < sourceResourcesLen; rowIndex++) {
                        if (store.system == sourceResources[rowIndex][3]) {
                            if (sourceResources[rowIndex][6] === resource && parseFloat(sourceResources[rowIndex][8]) > 0) {
                                rows[rowCount++] = store.resources[rowIndex]
                                console.log('computeYields system', new Date().getTime() - startDate.getTime() + 'ms', resource)
                                break
                            }
                        }
                    }
                })
            }
            console.log('computeYields build', new Date().getTime() - startDate.getTime() + 'ms')

            // sort by output DESC
            rows.sort(function (a, b) {
                return b[8] - a[8]
            });

            console.log('computeYields last sort', new Date().getTime() - startDate.getTime() + 'ms')

            store.computedYields = rows
        },
    },

    actions:
        {
            spinnerReset(context) {
                context.commit('spinnerReset')
            },
            spinnerLock(context) {
                context.commit('spinnerLock')
            },
            spinnerUnlock(context) {
                context.commit('spinnerUnlock')
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
            addBlueprintHeaders(context, value) {
                context.commit('addBlueprintHeaders', value)
            },

            addBlueprints(context, value) {
                context.commit('addBlueprints', value)
            },
            changeBlueprint(context, value) {
                context.commit('changeBlueprint', value)
            },
            updateResourcesByPlanet(context, value) {
                context.commit('updateResourcesByPlanet', value)
            },
            yieldsPreSort(context) {
                context.commit('yieldsPreSort')
            },
            addSystemsHeaders(context, value) {
                context.commit('addSystemsHeaders', value)
            },
            addSystems(context, value) {
                context.commit('addSystems', value)
            },

            computeResources(context) {
                context.commit('computeResources')
            },
            computeSuggestions(context) {
                context.commit('computeSuggestions')
            },
            computeYields(context) {
                context.commit('computeYields')
            },
        }
})
