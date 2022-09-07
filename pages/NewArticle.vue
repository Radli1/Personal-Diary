<template>
  <!-- <div class="addArticle">
      <Form v-slot="{errors}">
      <Field name="field" :rules="isRequired" />
      <span> {{ errors.field }} </span>
      </Form>
  </div> -->
  <ValidationObserver v-slot="{invalid}">
    <form @submit.prevent="omSubmit">
      <ValidationProvider v-slot="title">
        <input v-model="title" type="text" placeholder="Title">
      </ValidationProvider>
      <ValidationProvider v-slot="text">
        <input v-model="text" type="text" placeholder="Text">
      </ValidationProvider>
      <ValidationProvider v-slot="date">
        <input v-model="date" type="date" placeholder="Date">
      </ValidationProvider>
    
    <button type="submit" :disabled="invalid">Submit</button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
    name: 'NewArticle',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    methods: {
      
    }
}
</script>

<style>

</style>

