import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        baseAppSetting: {
            params1: 'main app name',
            params2: 'main app domain',
            num: 0
        }
    },
    mutations: {
        SET_BASE_APP_SETTING (state, params) {
            state.baseAppSetting = params;
        },
        ADD_BASE_APP_NUM(state) {
            console.log('app main change num');
            state.baseAppSetting.num++;
        },
        ADD_CHILD_APP_NUM(state) {
            console.log('app child change num');
            state.baseAppSetting.num++;
        }
    },
    actions: {
        add({commit}) {
            commit('ADD_BASE_APP_NUM');
        },
        childAdd({commit}){
            commit('ADD_CHILD_APP_NUM');
        },
    },
    getters: {},
    modules: {}
})

export default store;
