<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Spinner from "./components/Spinner.vue";

export default{
  components:{ 
    Navbar,
    Footer,
    Spinner
  }
}
</script>

<style>
/* Google Fonts */
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  background-color: white;
  background-image: url("");
  background-repeat: repeat-y;
  background-size: 1550px;
  background-attachment: fixed;

  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 0%;
}
#app::before{
  opacity: 0.75;
}
</style>