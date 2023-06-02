<template>
  <div>
    <div class="lg:flex lg:justify-between mt-8 pb-4">
      <div class="lg:w-2/4">
        <h4 class="text-4xl">
          We help you to go online & increase your conversion rate.
        </h4>
      </div>
      <div class="lg:mt-0 sm:mt-8">
        <nuxt-link class="underline underline-offset-4" to="/services"
          >View All Services</nuxt-link
        >
      </div>
    </div>
    <div>
      <div class="lg:flex lg:justify-between lg:space-x-7 lg:items-center my-5">
        <SmallCompCard
          class="lg:w-1/3"
          title="Social Media Management"
          :imgSrc="imageUrlOne"
          descriptionOne="  Social media to engage your target audience"
          descriptionTwo=" Unlock the Power of Social Media with Expert Management Services from Netigian"
          descriptionThree=" Manage your social media channelels with Netigian"
        />
        <SmallCompCard
          class="lg:w-1/3"
          title="UX/UI Design"
          :imgSrc="imageUrlOne"
          descriptionOne=" User friendly interface & Engaging User Experiences"
          descriptionTwo=" Creating Meaningful UI & Collaborative Design"
          descriptionThree=" Mobile-First Approach & Usability and Accessibility"
        />
        <SmallCompCard
          class="lg:w-1/3"
          title=" Graphics Design"
          :imgSrc="imageUrlTwo"
          descriptionOne=" Make a lasting impression with our creative branding"
          descriptionTwo=" and graphic design solutions"
          descriptionThree="We develop unique brand identities, logos, and marketing collaterals"
        />
      </div>
      <div class="lg:flex lg:justify-between lg:space-x-7 lg:items-center my-5">
        <SmallCompCard
          class="lg:w-1/3"
          title="Android App Development"
          :imgSrc="imageUrlFour"
          descriptionOne="  User experience is at the core of our Android app development process"
          descriptionTwo="  Create user-centric interfaces that engage and delight users"
          descriptionThree=" Cutting-Edge Functionality & Quality Assurance"
        />
        <SmallCompCard
          class="lg:w-1/3"
          title="Website Development"
          :imgSrc="imageUrlFive"
          descriptionOne=" Single Page Application with SEO Friendly"
          descriptionTwo=" Custom Features with optimized Code & API Development & Awesome Custom UI"
          descriptionThree=" Fullstack web development with android application"
        />
        <SmallCompCard
          class="lg:w-1/3"
          title="Digital Marketing"
          :imgSrc="imageUrlSix"
          descriptionOne=" We take the time to understand your business goals, target audience"
          descriptionTwo=" Industry landscape to develop tailored strategies"
          descriptionThree="SEO, PPC, SMM, Analytics and Reporting, Email Marketing"
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
      imageUrlOne:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/0.png",
      imageUrlTwo:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/1.png",
      imageUrlThree:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/2.png",
      imageUrlFour:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/0.png",
      imageUrlFive:
        "https://ui-themez.smartinnovates.net/items/geekfolio1/dark/assets/imgs/serv-icons/1.png",
      imageUrlSix:
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
