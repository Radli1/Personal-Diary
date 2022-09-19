<template>
  <div>
    <section>
    <ValidationProvider rules="required|alpha" v-slot="{errors}">
      <input type="text" v-model="value">
      <span>{{ errors[0]}}</span>
    </ValidationProvider>
    <!-- <input v-model="value" placeholder="Type something" />
    <span>{{ errorMessage }}</span>
    <button type="submit" @click = "onsubmit">Submit</button> -->
  </section>  
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
      components: {
        ValidationProvider
      },
      data(){
        return{
          value:"",
          ///errorMessage:''
        }
      },
      methods: {
      onsubmit (){
        alert('Form has been submitted')
        },
      },
      // computed:{
      //   defineRule (value) {
      //   if (!value) {
      //     return 'this field is required';
      //   }
      //   if (value.length < 8) {
      //     return 'this field must contain at least 8 characters';
      //   }
      //   return true;
      //   }
    //}
  };    

</script>
<style>

</style>