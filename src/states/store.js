import Vuex from "vuex";
import Data from "../data/users";
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: Data.users,
    selected: "none"
  },
  mutations: {
    changeName(state, id) {
      console.log(state.users);
      console.log("store, imamo id ", id);
      for(let i = 0; i < state.users.length; i++) {
        if(id == state.users[i].id) {
          state.users[i].firstName = 'Peter';
        }
      }
    },
    changeSelected(state, name) {
      console.log(name);
      state.selected = name[0] + " " + name[1];
    },
    changeDetails(state, data) {
      console.log("changeDetails", data);
      for(let i = 0; i < state.users.length; i++) {
        console.log(state.users[i].id);
        if(data[0] == state.users[i].id) {
          state.users[i].details = data[1];
          console.log("osebi " + state.users[i].firstName + " smo spremenili details");
          break;
        }
      }
    }

  }
});

