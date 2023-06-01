<template>
  <div>
    <div class="lg:flex lg:justify-evenly lg:items-center">
      <div class="border sm:my-5 border-gray-500 rounded-lg p-5 hover:cursor-pointer  hover:scale-110 duration-300">
        <div class=""><img style="width: 50px" :src="imgSrc" alt="" /></div>
        <div class="my-5 text-2xl text-green-500">{{ title }}</div>
        <div class="space-y-3">
          <div class="">{{ descriptionOne }}</div>
          <div class="">{{ descriptionTwo }}</div>
          <div class="">{{ descriptionThree }}</div>
          <div class="">{{ descriptionFour }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    imgSrc: String,
    descriptionOne: String,
    descriptionTwo: String,
    descriptionThree: String,
    descriptionFour:String,
  },
};
</script>
<style></style>
