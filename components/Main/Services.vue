<template>
  <div>
    <div class="lg:flex lg:justify-between mt-8 pb-4">
      <div class="lg:w-2/4">
        <h4 class="text-4xl">
          We help you to go online & increase your conversion rate.
        </h4>
      </div>
      <div class="lg:mt-0 sm:mt-8 "><nuxt-link class="underline underline-offset-4" to="/services">View All Services</nuxt-link></div>
    </div>
    <div>
      <div class="lg:flex lg:justify-between lg:space-x-7 lg:items-center my-5">
        <SmallCompCard
          title="Brand Strategy & Art Direction"
          :imgSrc="imageUrl"
          descriptionOne=" User friendly interface"
          descriptionTwo=" Nothing distracts from work"
          descriptionThree=" Easy to start chatting"
        />
        <SmallCompCard
          title="UX/UI Design & Website/App Design"
          :imgSrc="imageUrlOne"
          descriptionOne=" User friendly interface"
          descriptionTwo=" Nothing distracts from work"
          descriptionThree=" Easy to start chatting"
        />
        <SmallCompCard
          title="Engage your customers dramatically."
          :imgSrc="imageUrlTwo"
          descriptionOne=" User friendly interface"
          descriptionTwo=" Nothing distracts from work"
          descriptionThree=" Easy to start chatting"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  data() {
    return {
      imageUrl:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/0.png",
      imageUrlOne:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/1.png",
      imageUrlTwo:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/2.png",
    };
  },
  //   methods:{
  //     imageUrl() {
  //       try {
  //         return require(`~/assets/img/shap2.png`)
  //       } catch (error) {
  //         return ''
  //       }
  //     },
  //   }
};
</script>

<style>
/* Add Tailwind CSS classes as per your project setup */
</style>
