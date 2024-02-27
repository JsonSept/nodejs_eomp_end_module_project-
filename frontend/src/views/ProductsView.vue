<template>
    <div class="View">
        <br><br><br>
        <h1>Products</h1>
    </div>
    <!-- <button @click="getProduct">Get Products</button> -->
  <table>
    <tr>
      <th>Product ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Category</th>
      <th>image</th>
    </tr>
    <!-- <td><img :src="item.product_Url" alt=""></td><br> -->
    <tbody v-for="item in $store.state.products" :key="item.prodID">
      <td>{{ item.prodID }}</td>
      <td>{{ item.prodName }}</td>
      <td>{{ item.amount }}</td>
      <td>{{ item.Category }}</td>
      <td><img :src="item.prodUrl" alt=""></td>
      <button @click="deleteItem(item.prodID)">Delete</button>
      <button @click="editProduct(item.prodID)">Edit</button>
      <router-link target="_blank" to="'productview/'+ item.prodID" ><button @click="getSingle(item.prodID)">View</button></router-link>

    </tbody>

</table>
</template> 
<script>
import Spinner from '@/components/Spinner.vue'

export default{

    data(){
        return{
            // prodID:null,
            prodName:null,
            amount:null,
            Category:null,
            prodUrl:null,
        }
    },
computed: {
    getProduct(){
        this.$store.dispatch('getProduct')
        // this.$store.dispatch('deleteItem')
    },
    getSingle(){
        this.$store.dispatch('getSingle')
    },
},
methods:{
    deleteItem(prodName){
      this.$store.dispatch('deleteItem',prodName)
    },
    editProduct(prodID){
      let edit = {
        prodID:prodID,
        prodName:this.prodName,
        amount:this.amount,
        Category:this.Category,
        prodUrl:this.prodUrl
      }
      this.$store.dispatch('editProduct',edit)
    },
    getSingle(prodID) {
      this.$store.commit('getSingle', prodID)
    }
},
mounted() {
    this.getProduct
    this.getSingle
},
    components:{
        Spinner
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