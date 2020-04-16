import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id:'1',name:'Bimal Sharma'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    todo: [
      {id:1,name:"...",done:true},
      {id:2,name:"...",done:false},
      {id:3,name:"...",done:false},
      {id:4,name:"...",done:true},
      
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength:state=>{
      return state.categories.length;
    },
    doneTodo:state => {
      return state.todo.filter(todo => todo.done)
    },
    notActiveTodoCount: (state,getters) => {
      return state.todo.length - getters.doneTodo.length;
    },
    getTodoById: (state) => (id) => {
      return state.todo.find(todo => todo.id === id)
    } 
  }
});
