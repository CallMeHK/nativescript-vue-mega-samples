import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    text:"This is the default text in the vuex store. Change the textfield below and watch the magic happen!",
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    editText (state, newText) {
      state.text = newText;
    }
  }
})
if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
