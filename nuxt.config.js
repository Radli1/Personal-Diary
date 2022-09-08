export default {
    css: ['~/src/assets/css/main.css'],

    axios: {} ,

    plugins:[ 
        {src: "~/plugins/vee-validate.js"},
        { src: '~/plugins/vue-cropper', ssr: false }
    ],

    components: true,

    build: {
        transpile: ["vee-validate/dist/rules"], 
        vendor: ['vue-cropper']
    }
}