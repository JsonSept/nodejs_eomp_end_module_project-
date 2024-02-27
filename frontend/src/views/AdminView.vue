<template>
    <div class="View">
        <br><br><br>
        <h1>Administration</h1>
    </div>

    <div>
      <input type="text" name="username" placeholder="username" v-model="username"><br><br>
      <input type="text" name="password" placeholder="password" v-model="password"><br><br>
      <button @click="registerUser">SignUp</button>
      {{ $store.state.loggedIn }}
      <button @click="loginUser">Login</button>
  </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'

export default{
    components:{
        Spinner
    },


  data(){
      return {
          username:null,
          password:null
      }
  },
  computed: {
      registerUser(){
          //console.log(this.$data)
          this.$store.dispatch("registerUser",this.$data)
      },
      loginUser(){
          this.$store.dispatch('loginUser',this.$data)
      }
  }
}
</script>
<style scoped>
*{
  color: black;
  padding-left: 5%;
  padding-right: 5%;
}
.View{
  background-color: rgba(136, 136, 136, 0.181);
  margin-top: 5%;
  margin-bottom: 0%;
  margin-right: 1.5%;
  margin-left: 1.5%;
  padding-bottom: 10%;
}
</style>
