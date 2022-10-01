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
        }
    }
    
