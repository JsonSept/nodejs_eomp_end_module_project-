<template>
  <div class="home">
    <br><br><br>
    <div>
      <h1>Welcome To The <br> DELUXE CAFÉ</h1>
      <br><br><br>
      <p>Deluxe Café is a trendy startup café nestled in the heart of the city, offering a luxurious yet cozy ambiance where patrons can indulge in artisanal coffee, delectable pastries, and gourmet sandwiches. With a focus on quality ingredients sourced locally, the café aims to elevate the traditional café experience by infusing it with modern sophistication.</p>
      <br><br>
      <p> From its chic interior design to its attentive customer service, Deluxe Café strives to create a welcoming haven for coffee enthusiasts and food lovers alike, fostering a sense of community and connection in every sip and bite.</p>
      <br><br><br><br><br>

    </div>
    <div >
      <!-- <Spinner /> -->
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'HomeView',
  components: {
    Spinner
  }
}
</script>

<style scoped>
*{
  text-align: center;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
}
.home{
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)), url("https://i.postimg.cc/jdrXL6sC/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg");
  background-blend-mode: darken;
  background-size: 100%;
  background-repeat: repeat-y;
  background-attachment: fixed;
  margin-top: 5%;
  margin-bottom: 0%;
  margin-right: 1.5%;
  margin-left: 1.5%;
  padding-bottom: 5%;
  padding-top: 16%;
}

@media screen and (max-width:720px){
  .home{
    padding-bottom: 0%;
  }
}
@media screen and (max-width:360px){
  .home{
    padding-bottom: 0%;
  }
}
@media screen and (max-width:300px){
  .home{
    padding-bottom: 0%;
  }
}
</style>