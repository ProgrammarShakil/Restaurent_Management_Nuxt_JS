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
          question: "What services does your digital agency offer?",
          answer:
            "We focus on build your brand and solve you problem. we also offer a comprehensive range of digital marketing services, including web design and development, search engine optimization - SEO, social media management, content marketing, email marketing, branding, and more. Our goal is to provide end-to-end solutions that meet your digital marketing needs.",
        },
        {
          question: "How can digital marketing benefit my business?",
          answer:
            "Digital marketing can significantly benefit your business by increasing brand visibility, driving targeted website traffic, generating leads, boosting online sales, improving customer engagement and retention, and expanding your reach in the digital landscape. It enables you to connect with your target audience effectively and achieve measurable results.",
        },
        {
          question: "Can you work within my budget?",
          answer:
            "Absolutely! We understand that budgets can vary for different businesses. Our digital agency is dedicated to providing flexible solutions tailored to your budget and objectives. We will work closely with you to determine the most cost-effective strategies that deliver maximum impact and value for your investment",
        },
        {
          question:
            "How do you determine the right digital marketing strategy for my business?",
          answer:
            "We take a strategic approach to develop customized digital marketing strategies for each client. Our team conducts a thorough analysis of your business, industry, target audience, and competitors to understand your goals and challenges. Based on this research, we create a tailored strategy that aligns with your objectives, maximizes your online presence, and delivers measurable results.",
        },
        {
          question:
            "How do you measure the success of digital marketing campaigns?",
          answer:
            "We use various key performance indicators (KPIs) to measure the success of our digital marketing campaigns. These can include website traffic, conversion rates, click-through rates (CTR), engagement metrics, return on investment (ROI), and more. We provide regular reports and analytics that showcase campaign performance and progress towards your goals.",
        },
      ],
    };
  },
};
</script>

<style>
/* Add Tailwind CSS classes as per your project setup */
</style>
