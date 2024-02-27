import { createStore } from 'vuex'
import axios from 'axios';
// import router from '@/router';
// axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:8090'


export default createStore({
  state: {
    products:null,
    loggedIn:false
  },
  getters: {
   
  },
  mutations: {
    setProduct(state,payload) {
      state.products = payload
    },
    setUsrs(state,payload) {
      state.users = payload
    },
    setLogged(state,payload){
      state.loggedIn = payload
    }
  },
  actions: {
    async getProduct({commit}){
      let {data} = await axios.get(baseUrl+'/products')
      // console.log(data);
      commit('setProduct', data)
    },
    async getSingle({commit}){
      let {data} = await axios.get(baseUrl+'/products')
      // console.log(data);
      commit('setProduct', data)
    },
    async deleteItem({commit},prodName){
      console.log(prodName)
      await axios.delete(baseUrl+'/products/'+prodName)
      window.location.reload()
    },
    // async editProduct({commit},update){
    // await axios.post(baseUrl+'/products/'+ update.prodID)
    // window.location.reload()
    // },
    async registerUser({commit}, newUser){
      console.log(newUser);
      let {data} = await axios.post(baseUrl+'/users',newUser)
      alert(data.msg)
      window.location.reload()
     },
     async loginUser({commit}, user){
      // console.log(user);
      let {data} = await axios.post(baseUrl+'/login',user)
      alert(data.msg)
      commit('setLogged',true)
      window.location.reload()
     }
  },
  modules: {

  }
})
