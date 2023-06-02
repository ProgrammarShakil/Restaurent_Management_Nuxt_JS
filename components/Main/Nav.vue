<template>
  <nav class="">
    <div class="">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <a href="#" class="mt-5"
            ><img
              style="width: 200px"
              src="~/assets/img/Netigian_logo.png"
              alt=""
          /></a>
        </div>
        <div class="flex items-center">
          <div class="hidden md:flex">
            <NuxtLink
              v-for="link in links"
              :key="link.id"
              :to="link.url"
              class="px-3 py-2 hover:text-green-500 text-animation menuAnimate rounded-md font-medium text-2xl"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
          <div class="md:hidden">
            <button
              @click="isMenuOpen = !isMenuOpen"
              type="button"
              class="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              :class="{
                'text-white': isMenuOpen,
                'text-gray-300': !isMenuOpen,
              }"
            >
              <svg
                class="h-6 w-6"
                :class="{ hidden: isMenuOpen, block: !isMenuOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="h-6 w-6"
                :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- small device none and lg show -->
        <div class="hidden md:block relative">
          <IconsSearchIcon
            class="hover:cursor-pointer text-2xl"
            @click="IsSeachBarOpen = !IsSeachBarOpen"
          />
          <div
            :class="[IsSeachBarOpen ? '' : 'hidden']"
            class="block absolute top-10 right-0"
          >
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="isMenuOpen"
      class="md:hidden bg-gray-900 border border-green-500 rounded-md mt-2"
      @click="isMenuOpen = false"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.url"
          class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-500 text-center"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
      links: [
        { id: 1, label: "Home", url: "/" },
        { id: 2, label: "About", url: "/about/" },
        { id: 3, label: "Services", url: "/services/" },
        { id: 4, label: "Contact", url: "/contact/" },
        { id: 4, label: "Blogs", url: "/blogs/" },
        { id: 4, label: "Login", url: "/auth/login/" },
        { id: 4, label: "Sign Up", url: "/auth/register/" },
      ],
      IsSeachBarOpen: false,
    };
  },
  methods: {},
};
</script>

<style>
.menuAnimate:hover {
  /* background-image: linear-gradient(to right, #3b3838, #c2c2ca); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  /* color:#fff; */
}
.text-animation {
  animation: slide-in 1s ease-in-out infinite alternate;
}

@keyframes slide-in {
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
