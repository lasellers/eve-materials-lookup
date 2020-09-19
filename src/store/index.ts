import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    debug: true,
    state: {
      errors: null,
      csvHeaders: [],
      csvData: [],
      planets: []
    }
  },

  getters: {
    csvHeaders: store => {
      return store.state.csvHeaders
    },
    csvData: store => {
      return store.state.csvData
    },
    planets: store => {
      return store.state.planets
    },
    errors: store => {
      console.info('getters errors', store.state.errors)
      return store.state.errors
    }
  },

  mutations: {
    addCsvHeaders (store, value) {
      store.state.csvHeaders = value
    },
    addCsvData (store, value) {
      store.state.csvData = value
    },
    addPlanets (store, value) {
      store.state.planets = value
    },
    addErrors (store, errors) {
      store.state.errors = errors
    },
    clearErrors (store) {
      store.state.errors = null
    }
  },

  actions: {
    addCsvHeaders (context, value) {
      context.commit('addCsvHeaders', value)
    },
    addCsvData (context, value) {
      context.commit('addCsvData', value)
    },
    addPlanets (context, value) {
      context.commit('addPlanets', value)
    },
    addErrors (context, values) {
      if (values === null || values === '' || values === [] || values === {} ||
        (Array.isArray(values) && values.length === 0)) {
        // do nothing
        context.commit('addErrors', null)
      } else if (typeof values === 'string') {
        values = [{ field: 'unknown', message: values, key: 0 }]
        context.commit('addErrors', values)
      } else {
        values = [...values]

        const errors: string[] = []
        values.forEach((value: string) => {
          errors.push(JSON.parse(JSON.stringify(value)))
        })

        const messages = []
        for (const [key, value] of Object.entries(errors)) {
          for (const [field, message] of Object.entries(value)) {
            messages.push({ field, message, key })
          }
        }

        context.commit('addErrors', messages)
      }
    },
    clearErrors (context) {
      context.commit('clearErrors')
    }
  }
})
