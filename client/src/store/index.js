
import { createStore } from 'vuex'
import api from '@/api/api'

export default createStore({
  state: {
    user: undefined,
    currencies: [],
    tradeCurrencies: [],
    holdingsNotNull: [],
    sommeTotale: 0
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setCurrencies (state, currencies) {
      state.currencies = currencies
    },
    setTradableCryptos (state, tradeCurrencies) {
      state.tradeCurrencies = tradeCurrencies
    },
    setSommeTotale (state, sommeTotale) {
      state.sommeTotale = sommeTotale
    },
    setHoldingsNotNull (state, holdingsNotNull) {
      state.holdingsNotNull = holdingsNotNull
    }
  },
  actions: {
    registerUser ({ commit }, credentials) {
      console.log({ commit })
      return api.currencies()
        .then(data => {
          const { success, currencies } = data
          console.log(success)
          const holdsTemp = currencies.slice(0, 11).map((currency) => ({
            id: currency.id,
            symbol: currency.symbol,
            name: currency.name,
            somme: 0
          }))
          api.registerUser({
            login: credentials.login,
            password: credentials.password,
            holdings: holdsTemp
          })
            .then(data => {
              const { success, message } = data
              if (!success) {
                console.error(message)
              }