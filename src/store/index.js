import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        spinnerCount: 0,
        loadSystems: false,
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
        resourcesByPlanet: [],
        yieldsPreSort: []
    },

    getters: {
        showSpinner: store => {
            console.log('******** ########## showSpinner count', store.spinnerCount)

            const status = store.resources.length > 0 &&
                store.blueprints.length > 0 &&
                store.blueprintsForSelection.length > 0 &&
                store.regionsForSelection.length > 0 &&
                store.constellationsForSelection.length > 0 &&
                store.systemsForSelection.length > 0 &&
                store.resourcesForSelection.length > 0 &&
                store.resourcesByPlanet.length > 0
            store.displayedResources.length > 0
            store.yieldsPreSort.length > 0
            console.log('******** showSpinner status', status)

            return !(store.spinnerCount === 0 && status)
            // return status
        },
        currentSpinnerCount: store => {
            console.log('******** ########### currentSpinnerCount count', store.spinnerCount)
            return store.spinnerCount
        },
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
            const startDate = new Date()

            let sourceResources = store.yieldsPreSort
            let sourceResourcesLen = sourceResources.length

            //
            let rows = new Array(0)
            let rowCount = 0

            // none
            if (store.region === null && store.constellation === null && store.system === null) {
                store.resourcesForSelection.forEach(resource => {
                    const startDate = new Date()
                    for (let rowIndex = 0; rowIndex < sourceResourcesLen; rowIndex++) {
                        if (sourceResources[rowIndex][6] === resource && parseFloat(sourceResources[rowIndex][8]) > 0) {
                            rows[rowCount++] = sourceResources[rowIndex]
                            console.log('yields all', new Date().getTime() - startDate.getTime() + 'ms', resource)
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
                                console.log('yields region', new Date().getTime() - startDate.getTime() + 'ms', resource)
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
                                console.log('yields constellation', new Date().getTime() - startDate.getTime() + 'ms', resource)
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
                                console.log('yields system', new Date().getTime() - startDate.getTime() + 'ms', resource)
                                break
                            }
                        }
                    }
                })
            }

            // sort by output DESC
            rows.sort(function (a, b) {
                return b[8] - a[8]
            });

            console.log('yields', new Date().getTime() - startDate.getTime() + 'ms')

            return rows
        },
        resourcesByPlanet: store => {
            return store.resourcesByPlanet
        },
        resourcesByPlanetCount: store => {
            return store.resourcesByPlanet.length
        },
        suggestionsForSinglePlanetWithMostResources(store) {
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
            console.log('suggestionsForSinglePlanetWithMostResources rows', new Date().getTime() - startDate.getTime() + 'ms')

            // sort by region ASC
            rows.sort(function (a, b) {
                return a[1] < b[1] ? -1 : 1
            });
            console.log('suggestionsForSinglePlanetWithMostResources sort', new Date().getTime() - startDate.getTime() + 'ms')

            return rows
        }
    }
    ,

    mutations: {
        spinnerOn(store) {
            store.spinnerCount++
            console.info('******** spinnerCount++', store.spinnerCount)
        },
        spinnerOff(store) {
            store.spinnerCount--
            console.info('******** spinnerCount--', store.spinnerCount)
        },
        loadSystems(store, value) {
            store.loadSystems = (value === true)
        },
        loadProduction(store, value) {
            store.loadProduction = (value === true)
        }
        ,
        loadBlueprints(store, value) {
            store.loadBlueprints = (value === true)
        }
        ,
        addHeaders(store, value) {
            store.headers = value
        }
        ,
        addResources(store, rows) {
            store.resources = rows
            // put data into store all at once to limit DOM rerenders
            // Originally the *ForSelection updates were here, but moved to seperate mutations to make it easier to
            // track performance and vuex calls
        }
        ,
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
        }
        ,
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
        }
        ,
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
        }
        ,
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
        }
        ,
        changeRegion(store, value) {
            store.region = value === "" ? null : value
        }
        ,
        changeConstellation(store, value) {
            store.constellation = value === "" ? null : value
        }
        ,
        changeSystem(store, value) {
            store.system = value === "" ? null : value
        }
        ,
        changeResourceFilter(store, values) {
            const [index, resource] = values
            store.resourceFilters[index] = resource
        }
        ,
        computeDisplayedResources(store) {
            const startDate = new Date()

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

                console.log('computeDisplayedResources', new Date().getTime() - startDate.getTime() + 'ms')
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
        yieldsPreSort(store) {
            const startDate = new Date()

            // We preoptimize the searches later on by sorting the data once by output DESC
            // That way we can break at the first match instead of doing full table searches
            let sourceResources = store.resources
            sourceResources.sort(function (a, b) {
                return b[8] - a[8]
            });
            console.log('yields pre-sort', new Date().getTime() - startDate.getTime() + 'ms')

            store.yieldsPreSort = sourceResources
        },
    },

    actions:
        {
            spinnerOn(context) {
                context.commit('spinnerOn')
            },
            spinnerOff(context) {
                context.commit('spinnerOff')
            },
            loadProduction(context, value) {
                context.commit('loadProduction', value)
            },
            loadBlueprints(context, value) {
                context.commit('loadBlueprints', value)
            },
            loadSystems(context, value) {
                context.commit('loadSystems', value)
            },
            addHeaders(context, value) {
                context.commit('addHeaders', value)
            },
            addResources(context, value) {
                context.commit('addResources', value)
            }
            ,
            updateResourcesForSelection(context, value) {
                context.commit('updateResourcesForSelection', value)
            }
            ,
            updateRegionsForSelection(context, value) {
                context.commit('updateRegionsForSelection', value)
            }
            ,
            updateConstellationsForSelection(context, value) {
                context.commit('updateConstellationsForSelection', value)
            }
            ,
            updateSystemsForSelection(context, value) {
                context.commit('updateSystemsForSelection', value)
            }
            ,
            changeRegion(context, value) {
                context.commit('changeRegion', value)
            }
            ,
            changeConstellation(context, value) {
                context.commit('changeConstellation', value)
            }
            ,
            changeSystem(context, value) {
                context.commit('changeSystem', value)
            }
            ,
            changeResourceFilter(context, values) {
                context.commit('changeResourceFilter', values)
            }
            ,
            computeDisplayedResources(context) {
                context.commit('computeDisplayedResources')
            }
            ,
            addBlueprintHeaders(context, value) {
                context.commit('addBlueprintHeaders', value)
            }
            ,
            addBlueprints(context, value) {
                context.commit('addBlueprints', value)
            }
            ,
            changeBlueprint(context, value) {
                context.commit('changeBlueprint', value)
            }
            ,
            updateResourcesByPlanet(context, value) {
                context.commit('updateResourcesByPlanet', value)
            },
            yieldsPreSort(context) {
                context.commit('yieldsPreSort')
            }
        }
})
