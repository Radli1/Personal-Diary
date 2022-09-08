<template>
  <ValidationObserver>
    <form @submit.prevent="onSubmit">
      <ValidationProvider v-slot="title">
        <input v-model="title" type="text" placeholder="Title">
      </ValidationProvider>
      <ValidationProvider v-slot="text">
        <input v-model="text" type="text" placeholder="Text">
      </ValidationProvider>
      <ValidationProvider v-slot="date">
        <input v-model="date" type="date" placeholder="Date">
      </ValidationProvider>
    
    <button type="submit" >Submit</button>
    </form>
  </ValidationObserver>
  
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
    components: {
      ValidationObserver,
      ValidationProvider
    },

    methods: {
      onsubmit (){
        alert('Form has been submitted')
      }
    }
}
</script>

<style>

</style>

