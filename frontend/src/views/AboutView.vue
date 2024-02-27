<template>
  <div class="about">
    <br><br><br>
    <div>
      <h1>About Us</h1>
      <h3>Who are We?</h3>
      <p>Deluxe Café isn't just another coffee shop; it's an immersive experience designed to cater to the discerning tastes of urbanites seeking a blend of elegance and comfort. As you step through its inviting doors, you're greeted by the rich aroma of freshly brewed coffee beans and the warm glow of Edison bulbs casting a soft light over the modern, minimalist decor.</p>
      <br>
      <p>The café boasts a carefully curated menu that emphasizes quality and creativity. Baristas expertly craft each cup of coffee, showcasing a range of brewing methods from pour-over to cold brew, sourced from single-origin beans carefully selected for their flavor profiles. Patrons can also indulge in a selection of specialty teas and freshly squeezed juices for those seeking alternative beverages.</p>
      <br>
      <p>But Deluxe Café isn't just about drinks. The menu features a mouthwatering array of pastries, baked goods, and light bites, all made in-house with the finest ingredients. From flaky croissants to decadent cakes, there's something to satisfy every craving.</p>
      <br>
      <p>What sets Deluxe Café apart is its commitment to fostering a sense of community. The space is designed to encourage socializing and connection, with cozy seating areas perfect for catching up with friends or getting lost in a good book. Regular events such as live music nights, poetry readings, and art exhibitions further enrich the café's vibrant atmosphere, ensuring there's always something new to discover.</p>
      <br>
      <p>Whether you're seeking a quiet spot to work, a casual meeting place, or simply a place to unwind and recharge, Deluxe Café offers a haven where every visit feels like a luxurious treat for the senses. It's more than just a café; it's a destination where the art of coffee meets the art of living.</p>
      <br><br>
      <h3>Our Purpose</h3>
      <p>The purpose of Deluxe Café is to provide more than just a place to grab a cup of coffee; it aims to create a vibrant and welcoming community hub where people can gather, connect, and indulge in high-quality coffee and food offerings. The café strives to elevate the traditional café experience by offering a blend of elegance and comfort, fostering an environment where patrons feel inspired to linger, socialize, work, or simply unwind. Through its carefully curated menu, cozy ambiance, and regular events, Deluxe Café seeks to enrich the lives of its customers by providing a space where they can relax, recharge, and enjoy the finer things in life.</p>
      <br><br>

      <h3>The Founders</h3>
      <p>
        Darren Viljoen and Jason September, two longtime friends with a shared passion for coffee and community, embarked on a journey to bring their vision of Deluxe Café to life. Their story begins with a serendipitous encounter during their college years, where they bonded over late-night study sessions fueled by endless cups of coffee. It was during these moments of camaraderie that they realized the transformative power of a good cup of coffee and the importance of creating spaces where people could come together.
        <br><br>
        After years of working in various roles within the coffee industry, Darren and Jason decided to combine their expertise and entrepreneurial spirit to pursue their dream of opening a café. Armed with a shared vision of creating a space that would not only serve exceptional coffee but also foster a sense of community and connection, they began laying the groundwork for "Deluxe Café."
        <br><br>
        The journey was not without its challenges. From securing funding and scouting the perfect location to navigating the complexities of permits and regulations, Darren and Jason faced numerous obstacles along the way. However, their unwavering determination and shared belief in their vision propelled them forward, and after months of meticulous planning and hard work, "Deluxe Café" finally opened its doors to the public.
        <br><br>
        From the moment they opened, Darren and Jason poured their hearts and souls into every aspect of the café, from the meticulously curated menu to the warm and inviting atmosphere. Their dedication to quality and customer experience quickly paid off, as "Deluxe Café" became a beloved fixture in the community, attracting coffee enthusiasts and food lovers alike.
        <br><br>
        Today, Darren and Jason continue to be the driving force behind "Deluxe Café," constantly striving to innovate and evolve while staying true to their original vision. Their journey serves as an inspiration to aspiring entrepreneurs everywhere, proving that with passion, perseverance, and a strong sense of purpose, anything is possible.
      </p>
    </div>
    <div>
      <!-- <Spinner /> -->
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default{
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
.about{
  background-color: rgba(136, 136, 136, 0.181);
  margin-top: 5%;
  margin-bottom: 0%;
  margin-right: 1.5%;
  margin-left: 1.5%;
  padding-bottom: 10%;
}

@media screen and (max-width:720px){
  .about{
    padding-bottom: 0%;
  }
}
@media screen and (max-width:360px){
  .about{
    padding-bottom: 0%;
  }
}
@media screen and (max-width:300px){
  .about{
    padding-bottom: 0%;
  }
}
</style>