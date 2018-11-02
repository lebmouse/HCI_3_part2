import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters.js'
// import mutations from './mutations.js'
// import actions from './actions.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepIndex: 1,
    basicInformationObj: null,
    workHistoryObj:null,
    education:null,
    awardsObj:null,
    skillsObj:null,
    othersObj:null
  },
  mutations: {
    nextStage(state) {
      state.stepIndex++
    },
    updateStep(state, value) {
      state.stepIndex = value
    },
    updateBasicInformation(state, value) {
      state.basicInformationObj = value
    },
    updateWorkHistory(state,value){
        state.workHistoryObj = value
    },
    updateEducation(state,value){
        state.education = value
    },
    updateSkills(state,value){
        state.skillsObj = value
    },
    updateAwards(state,value){
        state.awardsObj = value
    },
    updateOthers(state,value){
        state.othersObj = value
    }
  }
})
