<template>
  <div>
    <div class="lg:flex lg:justify-between mt-8 pb-4">
      <div class="lg:w-2/4">
        <h4 class="text-4xl">
         Our Approach
        </h4>
      </div>
      <div class="lg:mt-0 sm:mt-8 "><nuxt-link class="underline underline-offset-4" to="/services">View All Services</nuxt-link></div>
    </div>
    <div>
      <div class="lg:flex lg:justify-between lg:space-x-7 lg:items-center my-5">
        <SmallCompRoundedCard
          title="Research"
          descriptionOne="01"
          descriptionTwo="We help you to go online and increase your conversion rate"
        />
        <SmallCompRoundedCard
          title="Concept"
          descriptionOne="02"
          descriptionTwo="We help you to go online and increase your conversion rate"
        />
        <SmallCompRoundedCard
          title="Implement"
          descriptionOne="03"
          descriptionTwo="We help you to go online and increase your conversion rate"
        />
        <SmallCompRoundedCard
          title="Handover"
          descriptionOne="04"
          descriptionTwo="We help you to go online and increase your conversion rate"
        />
      </div>
    </div>
    <div class="text-7xl py-3 text-center">Have a project in mind?</div>
    <div class="text-7xl py-3 text-center text-green-500 underline lg:mb-8">Let’s get to work</div>
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
