<template>
    <div>
      <div class="lg:flex lg:justify-between lg:items-center text-center">
        <div class="border border-gray-500 sm:my-5 rounded-full p-5 hover:cursor-pointer  hover:border-blue-700	 duration-300">
          <div class="my-5 text-2xl">{{ title }}</div>
          <div class="space-y-3">
            <div class="text-7xl">{{ descriptionOne }}</div>
            <div class="tracking-widest	leading-loose">{{ descriptionTwo }}</div>
            <div class="text-4xl"><div><button><IconsRightArrow/></button></div></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>

  export default {
    props: {
        title: String,
        descriptionOne: String,
        descriptionTwo: String,
    },
};
  </script>
  <style>
  /* .rounded-custom{
    width: 294px;
    padding: 70px 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 250px;
    margin-left: -7px;
    margin-right: -7px;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s;
  } */
</style>
  