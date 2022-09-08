<template>
  <div>
    <h2 class="title">TITLE</h2>
    <div class="text">

    </div>
    <div>
      <img class="uploading-image" />
      <input type="file" accept="image/jpeg" @change=uploadImage>
   </div>
   <div class="comment-box" id="comment">
        <div class="loader" v-show="loading" >
          <span class="spinner"></span>  
        </div>
        
        <form action="" method="post" @submit.prevent="submit">
          <textarea v-model="data.message" class="input-message" name="message" id="message" rows="3" placeholder="Your comment..." required></textarea>
          <input v-model="data.name" class="input-name" type="text" name="name" placeholder="Your Name" required>
          <input :disabled="loading" type="submit" value="Comment">
        </form>
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
               data: {}
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
        }
     }
</script>

<style>

</style>