<template>
  <div>
    <!-- <MainNav/> -->
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
                      <p class="mb-4">Please login to your account</p>
                      <!--Username input-->
                      <div class="relative mb-4" data-te-input-wrapper-init>
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
                      <div class="relative mb-4" data-te-input-wrapper-init>
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

                      <!--Submit button-->
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <button
                          class="mb-3 inline-block bg-green-600 w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Log in
                        </button>

                        <!--Forgot password link-->
                        <a href="#!">Forgot password?</a>
                      </div>

                      <!--Register button-->
                      <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          class="inline-block text-rose-500 rounded border border-green-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          <NuxtLink to="/auth/register">Register</NuxtLink>
                        </button>
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
                      We are more than just a company
                    </h4>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
