<template>
<div>
    <div id="search-component">
        <input 
        type="text"
        v-model="search"
        placeholder="Title search">
        <select v-model="filter">
            <option value="0">Все категории</option>
            <option v-for="item in items" :key="item.title" :value="item.title">{{ item.title }}</option>
        </select>
        <button id="link">
            <router-link to="/NewArticle"> Добавить запись</router-link>
        </button>
    </div>
    <div id="sortbydate">
        <button>DATE UP</button>
        <button>DATE DOWN</button>
    </div>
    <div>
        <ol class="list-group">
            <li v-for="item in searchM" :key="item"><a href="https://jsonplaceholder.typicode.com/posts/body" class="list-group-item">{{item.title}}</a></li>
        </ol>
        <ol class="list-group">
            <li v-for="item in filterM" :key="item"><a href="https://jsonplaceholder.typicode.com/posts/body" class="list-group-item">{{item.title}}</a></li>
        </ol> 
    </div>
    <div id="pagination">
        <pagination :totalPages="7" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange"/>
    </div>
</div>
</template>
<script lang="ts">
import axios from 'axios';
import Pagination from '../pages/Pagination.vue';
export default {
    name:"app",
    components: {
        Pagination
    },
    data() {
        return {
            currentPage:1,
            items:[],
            loaded: true,
            search:'',
            filter:''    
        };
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
        sortByDate () {
            return new this.items.id.valueOf() - new this.items.id.valueOf();
        }

    },
    computed:{
        searchM () {
            return this.items.filter(item => {
                return item.title.includes(this.search)
            });
        },
        filterM () {
            return this.items.filter (item => { 
                return item.title.includes(this.filter)
            })
        },
        
    },
    async created () {
        try {
            const results = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            this.items = results.data;
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style>

</style>