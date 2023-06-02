<template>
  <div>
    <div class="lg:flex lg:justify-between mt-8 pb-4">
      <div class="lg:w-2/4">
        <h4 class="text-4xl">Our Blog</h4>
      </div>
      <div class="lg:mt-0 sm:mt-8">
        <nuxt-link class="underline underline-offset-4" to="/services"
          >View All Blogs</nuxt-link
        >
      </div>
    </div>
    <div>
      <div class="lg:flex lg:justify-between lg:space-x-7 lg:items-center my-5">
        <div
          class="lg:w-1/3 sm:my-5 border border-gray-500 rounded-lg hover:cursor-pointer hover:border-green-500 duration-300"
        >
          <img class="rounded-t-lg" src="~/assets/img/blog/comp1.jpg" alt="" />
          <hr />
          <div class="p-5">
            <h3 class="text-xl text-green-500 pb-5">
              Running a successful Facebook ad campaign involves several steps:
            </h3>
            <div>
              <span class="font-bold">Define your goals : </span>
              <span
                >Clearly define the objectives of your ad campaign. Is it to
                increase brand awareness, drive traffic to your website,
                generate leads, or boost sales? Understanding your goals will
                shape your overall strategy...</span
              >
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:my-5 border border-gray-500 rounded-lg hover:cursor-pointer hover:border-green-500 duration-300"
        >
          <img class="rounded-t-lg" src="~/assets/img/blog/comp1.jpg" alt="" />
          <hr />
          <div class="p-5">
            <h3 class="text-xl text-green-500 pb-5">
              Creating a website involves several steps, from planning and
              designing to development and deployment:
            </h3>
            <div>
              <span class="font-bold">Define Your Goals and Purpose : </span>
              <span
                >Determine the purpose of your website (e.g., e-commerce, blog,
                portfolio). Identify your target audience and their needs. Set
                specific goals for your website....</span
              >
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 sm:my-5 border border-gray-500 rounded-lg hover:cursor-pointer hover:border-green-500 duration-300"
        >
          <img class="rounded-t-lg" src="~/assets/img/blog/comp1.jpg" alt="" />
          <hr />
          <div class="p-5">
            <h3 class="text-xl text-green-500 pb-5">
              Creating a brand from scratch involves several key steps:
            </h3>
            <div>
              <span class="font-bold">Define your brand's purpose : </span>
              <span
                >Clarify the reason for your brand's existence. What problem
                does it solve or what need does it fulfill? Determine your
                brand's values, mission, and unique selling proposition...</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
