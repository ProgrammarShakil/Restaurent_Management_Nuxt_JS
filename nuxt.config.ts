// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  // plugins: ['@/plugins/particles'],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
    darkMode:"class",     // class or media
    // theme: {
    //   extend: {
    //     backgroundImage: {
    //       'hero-pattern': "url('/img/hero-pattern.svg')",
    //       'footer-texture': "url('/img/footer-texture.png')",
    //     }
    //   }
    // }
  },

  app:{
    head:{
      title: 'Netigian - Digital Solution',
      meta: [
        {name: 'description', content:'Netigian is your ditigal solution, we focus on help you to make a brand from zero.'}
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
});
