<template>
  <div class ="search-form">
    <input 
    type="text"
    class="form-control"
    id="search"
    placeholder="Name, text..."
    v-model="search">
    {{search}}
  </div>
</template>

<script>
export default {
    name: "Search",
    data: {
        search:''
    }

}
</script>

<style>

</style>