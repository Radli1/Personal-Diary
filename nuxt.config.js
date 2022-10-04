export default {
    css: ['~/src/assets/css/main.css'],
    axios: {
        baseUrl_text:"https://jsonplaceholder.typicode.com/posts",
        baseUrl_photo:"https://api.unsplash.com/photos/random/?client_id=2XvEghmfJiiZDW9ybYbJyzhZaLNJh_h9MC8CIVoDZ1o"
    } ,
    plugins:[ 
        {src: "~/plugins/vee-validate.js"},   
    ],
    components: true,
    build: {
        transpile: ["vee-validate/dist/rules"],  
    },
    env: {
        baseUrl: 'http://localhost:3000'
        },
    modules: [
        '@pinia/nuxt',
        // {
        //     autoImports: [
        //       // automatically imports `defineStore`
        //       'defineStore', // import { defineStore } from 'pinia'
        //       // automatically imports `defineStore` as `definePiniaStore`
        //       ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        //     ],
        //   },
    ],
    buildModules: [
    ['@nuxtjs/composition-api/module'],
        ['@pinia/nuxt', { disableVuex: false }],
      ]

    }
    
