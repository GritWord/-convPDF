import store from '@/store'

export function checkTokenBeforeEnter (to, from, next) {
  store.dispatch('checkToken')
    .then(isVali