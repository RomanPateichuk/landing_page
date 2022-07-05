import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      showBurger: false,
      modalCallRight: "-1000px", 
    }
  },

  getters:{
    getShowMenu(state){
      return state.showBurger;
    },

    getCallModalRight(state){
      return state.modalCallRight;
    }
  },

  mutations: {
    setMenu: (state)=>{
      state.showBurger = !state.showBurger;
    },

    setCallModalRight: (state, data)=>{
      state.modalCallRight = data;
    }
  },

  actions:{
    callMenu: async(context)=>{
      context.commit("setMenu");
    },

    setModalAbsoluteRight: async(context, data)=>{
      context.commit("setCallModalRight", data);
    },


  }
})