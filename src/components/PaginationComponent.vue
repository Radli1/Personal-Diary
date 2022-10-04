<template>
  <div>
   <div class="pagination-row">
    <button class="pagination-button"> Previous</button>
    <span v-for="index in paginatedArray" :key="index">
      <button class="pagination-button">{{index+1}}</button>
    </span>
    <button class="pagination-button">Next</button>
   </div>
   
  </div>
</template>

<script>
import { ref, computed } from "@nuxtjs/composition-api";
import { useTitlesApi, useTitleStore } from "../../store/titleApi";
import { storeToRefs } from "pinia";
const { paginatedArray } = storeToRefs(useTitleStore())

export default {
  name: "PaginationComponent",
  setup() {
    const {
      currentPage,
      lastPage,
      next,
      prev,
  
    } = usePagination({
      currentPage: 1,
      pageSize: 10,
      total: computed(() => paginatedArray.value.length),
    });

    return {
      currentPage,
      lastPage,
      next,
      prev
    };
  }
}

</script>
<style>
  .pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
  }
</style>
