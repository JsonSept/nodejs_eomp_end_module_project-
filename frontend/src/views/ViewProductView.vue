
<template>
    <div>
      <h1>Product View</h1>
      <div v-if="singleProduct">
        <!-- Display details of singleProduct here -->
        <p>{{ getSingle.prodID }}</p>
        <p>{{ getSingle.prodName }}</p>
        <!-- ... other details ... -->
      </div>
      <router-link to="/view">Back to View Product</router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
        getSingle() {
        return this.$store.state.getSingle
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