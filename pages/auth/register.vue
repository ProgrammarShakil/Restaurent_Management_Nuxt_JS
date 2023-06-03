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
                      <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Netigian Team
                      </h4>
                    </div>

                    <form>
                      <!--Username input-->
                      <div class="mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border border-green-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all focus:placeholder:opacity-100"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                        <label
                          for="exampleFormControlInput1"
                          class="left-3 top-0 mb-0 max-w-[90%] text-neutral-500"
                        >
                        </label>
                      </div>

                      <!--Password input-->
                      <div class="mb-6" data-te-input-wrapper-init>
                        <input
                          type="password"
                          class="peer block min-h-[auto] w-full rounded border border-green-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all focus:placeholder:opacity-100"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <label
                          for="exampleFormControlInput11"
                          class="left-3 top-0 mb-0 max-w-[90%] text-neutral-500"
                        >
                        </label>
                      </div>

                      <!--Confirm Password input-->
                      <div class="mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          class="peer block min-h-[auto] w-full rounded border border-green-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all focus:placeholder:opacity-100"
                          id="exampleFormControlInput00"
                          placeholder="Confirm Password"
                        />
                        <label
                          for="exampleFormControlInput00"
                          class="left-3 top-0 mb-0 max-w-[90%] text-neutral-500"
                        >
                        </label>
                      </div>
                      <div class="flex items-start mb-3">
                        <div class="flex items-center h-5">
                          <input
                            id="terms"
                            type="checkbox"
                            class="w-3 h-3 bg-transparent border border-green-500 rounded-md focus:ring-3 focus:ring-primary-300 focus:ring-green-500"
                            required="true"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="terms"
                            class="font-light"
                            >I accept the
                            <NuxtLink
                              class="font-medium text-green-500 hover:underline dark:text-primary-500"
                              to="/terms-and-conditions"
                              >Terms and Conditions</NuxtLink
                            ></label
                          >
                        </div>
                      </div>

                      <!--Submit button-->
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <button
                          class="mb-3 inline-block bg-green-600 w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Register
                        </button>
                      </div>

                      <!--Register button-->
                      <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 mr-2">Already have an account?</p>

                        <NuxtLink to="/auth/login"
                          ><button
                            type="button"
                            class="inline-block text-green-500 rounded border border-green-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Login
                          </button></NuxtLink
                        >
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
                      Empowering Digital Transformations
                    </h4>
                    <p class="text-sm">
                      Our talented team of strategists, designers, developers,
                      and marketers collaborate closely with our clients to
                      understand their unique goals and challenges. By
                      leveraging the latest industry trends and leveraging
                      data-driven insights, we create bespoke digital strategies
                      that maximize results and deliver exceptional experiences.
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
