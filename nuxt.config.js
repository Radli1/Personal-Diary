export default {
    css: ['~/src/assets/css/main.css'],

    axios: {} ,

    plugins:[ 
        {src: "~/plugins/vee-validate.js"},
        
    ],
    components: true,

    build: {
        transpile: ["vee-validate/dist/rules"], 
       
    }
}