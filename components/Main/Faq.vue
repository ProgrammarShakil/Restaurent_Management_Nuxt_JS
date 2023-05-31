<template>
  <div class="lg:flex justify-between mt-8 pb-4 space-x-8 space-y-5">
    <div class="lg:w-2/6 lg:mt-10">
      <img src="~/assets/img/a1.svg" alt="" />
    </div>
    <div class="lg:w-3/6">
      <div class="">
        <div>
          <h2 class="text-5xl my-6">
            We grow brands through bold & strategic creative
          </h2>
        </div>
        <SmallCompQA
          v-for="(item, index) in faqs"
          :key="index"
          :question="item.question"
          :answer="item.answer"
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
      faqs: [
        {
          question: "Question 1",
          answer: "We grow brands through bold & strategic creative",
        },
        {
          question: "Question 2",
          answer: "We grow brands through bold & strategic creative",
        },
        {
          question: "Question 3",
          answer: "We grow brands through bold & strategic creative",
        },
        {
          question: "Question 4",
          answer: "We grow brands through bold & strategic creative",
        },
        {
          question: "Question 5",
          answer: "We grow brands through bold & strategic creative",
        },
      ],
    };
  },
};
</script>

<style>
/* Add Tailwind CSS classes as per your project setup */
</style>
