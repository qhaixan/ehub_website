import Vue from 'vue'
import Vuex from 'vuex'
//import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    users:[
      {email:'anon',username:'anon',token:'anon'}
    ]

  },
  getters:{
    userInfo: state=>{
      var user = state.users.map(user => {
        return{
          email:user.email,
          username:user.username,
          token:user.token
        }
      });
      return usrInfo;
    }
  },
  mutations:{

  }
})
