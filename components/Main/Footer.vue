<template>
  <div>
    <div class="text-7xl text-center">Contact Us!</div>
    <div>
      <div class="lg:flex lg:justify-between lg:space-x-7 my-5">
        <div
          class="lg:w-2/4 sm:my-5 rounded-lg hover:cursor-pointer hover:border-blue-500 duration-300"
        >
          <div class="lg:mt-4 rounded-md sm:mb-5 flex justify-center">
            <iframe
              class="rounded-lg"
              width="560"
              height="305"
              src="https://www.youtube.com/embed/7YuSCyaGJ90"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          class="lg:w-2/4 sm:my-5 rounded-lg hover:border-blue-500 duration-300"
        >
          <form class="space-y-6">
            <label class="block">
              <span class="block text-sm font-medium">Name:</span>
              <!-- Using form state modifiers, the classes can be identical for every input -->
              <input
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium">Email:</span>
              <!-- Using form state modifiers, the classes can be identical for every input -->
              <input
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
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
                class="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
            <input type="submit" class="btn" value="Send Us" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
