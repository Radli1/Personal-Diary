<template>
  <div>
    <div>
      <PaginationComponent />
      <SortComponent />
      <!-- <div v-for="index in paginatedArray" :key="index">
      <h2>{{paginatedArray.id}}</h2>
      <p>{{paginatedArray.title}}</p>
    </div> -->
    </div>
  </div>
</template>
<script>
import PaginationComponent from '../src/components/PaginationComponent.vue';
import SortComponent from '../src/components/SortComponent.vue';

export default {
  components: {
    PaginationComponent,
    SortComponent,
  },
};
</script>

<!-- <script setup>
  //import { ref, computed, reactive } from "@nuxtjs/composition-api";
  import  PaginationComponent from './src/components';
  import  SortComponent from '@/src/components'

  const { paginatedArray } = storeToRefs(useTitleStore())
  
  defineProps(['paginatedArray']) -->
