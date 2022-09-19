<template>
  <div>
    <h2 class="title">TITLE</h2>
    <h3>TEXT</h3>
    <div class="title">{{item}}</div>
    <h3>PHOTO</h3>
    <div>{{photo}}</div>
    <h3>ЗАГРУЗКА ФАЙЛОВ</h3>
    <div>
      <img class="uploading-image" />
      <input type="file" accept="image/jpeg" @change=uploadImage>
    </div>
    <h3>COMMENTS</h3>
      <button v-on:click="visible=!visible">{{visible?'Удалить комментарий':'Добавить комментарий'}}</button>
       <div v-show="visible">
        <div class="comment-box" id="comment">
              <div class="loader" v-show="loading" >
                <span class="spinner"></span>  
              </div>
        </div>
        <form action="" method="post" @submit.prevent="submit">
          <textarea v-model="data.message" class="input-message" name="message" id="message" rows="3" placeholder="Your comment..." required></textarea>
          <input v-model="data.name" class="input-name" type="text" name="name" placeholder="Your Name" required>
          <input :disabled="loading" type="submit" value="Comment">
        </form>
        </div>
      
        <div>
            <button v-on:click="show=!show, getComments()">{{show?'Показать комментарии':'Скрыть комментарии'}}</button>
            <div v-show="show">
                <div v-for="item in comments" :key="item">{{comments}}
            </div>
          </div>
        </div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
        name:'imageUpload',
        data(){
            return{
               previewImage:null,
               loading: false,
               data: {},
               item:'',
               photo:[],
               visible: 'true',
               comments:[],
               show: 'true'
              }
        },
        methods:{
            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };
            },
            submit () {
                this.loading = true;
                axios.post('https://jsonplaceholder.typicode.com/posts',this.data)
                .then((response) => console.log(response))
            },
            getComments() {    
                
                axios               
                .get('https://jsonplaceholder.typicode.com/comments')
                .then(response => (this.comments = response.data))}
                
            },
            mounted () {  
                axios
                .get('https://baconipsum.com/api/?type=meat-and-filler')
                .then(response => (this.item = response.data)),
                
                axios
                .get('https://api.unsplash.com/photos/random/?client_id=2XvEghmfJiiZDW9ybYbJyzhZaLNJh_h9MC8CIVoDZ1o')
                .then(response => (this.photo = response.data))
                
                
            }
          
        
     }
</script>

<style>

</style>