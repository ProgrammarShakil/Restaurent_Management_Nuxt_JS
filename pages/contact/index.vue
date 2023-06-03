<template>
  <div>
    <MainNav/>
    <section class="gradient-form h-full mt-10">
      <div class="container h-full p-10">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
        >
          <div class="w-full">
            <div
              class="block rounded-lg bg-dark text-gray-100 border border-green-500 shadow-lg dark:bg-neutral-800"
            >
              <div class="g-0 lg:flex lg:flex-wrap">
                <!-- Left column container-->
                <div class="px-4 md:px-0 lg:w-6/12">
                  <div class="md:mx-6 md:p-12">
                    <!--Logo-->
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="~/assets/img/Netigian_logo.png"
                        alt="Netigian logo"
                      />
                      <h4 class="mb-12 mt-1 pb-1 text-7xl font-semibold">
                        Contact Us!
                      </h4>
                    </div>

                    <form class="space-y-6">
                      <label class="block">
                        <span class="block text-sm font-medium">Name:</span>
                        <!-- Using form state modifiers, the classes can be identical for every input -->
                        <input
                          type="text"
                          class="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </label>
                      <label class="block">
                        <span class="block text-sm font-medium">Email:</span>
                        <!-- Using form state modifiers, the classes can be identical for every input -->
                        <input
                          type="text"
                          class="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </label>
                      <label class="block">
                        <span class="block text-sm font-medium"
                          >Which services you needed?</span
                        >
                        <!-- Using form state modifiers, the classes can be identical for every input -->
                        <textarea
                          name="message"
                          rows="5"
                          cols="50"
                          type="text"
                          class="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </label>
                      <!--Submit button-->
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <input
                          class="mb-3 inline-block bg-green-600 w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:cursor-pointer"
                          type="submit"
                          value="Send"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <!-- Right column container with background and description-->
                <div
                  class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-green-500"
                >
                  <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 class="mb-10 text-5xl font-semibold">
                        Partnering with Netigian means gaining a trusted.
                    </h4>
                    <p class="text-sm">
                      At Netigian, we pride ourselves on our commitment to
                      excellence, professionalism, and customer satisfaction.
                      Our dedicated team is passionate about bringing your
                      digital vision to life and providing you with a
                      competitive advantage in the digital realm. Partner with
                      Netigian today and embark on a transformative journey that
                      will elevate your brand, expand your reach, and drive your
                      business forward in the digital age. Experience the power
                      of digital transformation with Netigian.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
