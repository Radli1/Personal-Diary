<template>
  <button @click="orderType='asc'">Сортировка по возрастанию</button>
  <button @click="orderType='desc'">Сортировка по убыванию</button>

</template>
<script>
export default {
    setup() {
        if (orderType='asc') {
          console.log('true statement');
          paginatedArray.sort((a, b) => {
            if (orderType === 'asc') {
              return b.id - a.id;
            }
            return a.id - b.id;
          })
      }
      return {
          searchTitle,
          result,
          listTitles
          }
      }
    }
  </script>

  <template>
     <button class="sort" @click="orderType">Сортировка по возрастанию
   </button>
  </template>