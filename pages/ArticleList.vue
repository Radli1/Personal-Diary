<template>
<div>
    <div id="search-component">Search section 
        <input 
        type="text"
        v-model="search"
        placeholder="Title search">
        <select v-model="filter">
            <option value="0">Все категории</option>
            <option v-for="item in items" :key="item.title" :value="item.title">{{ item.title }}</option>
        </select>
    </div>
    
    <div id="sortsection">Sort section
        <button v-on:click="sortedList='case'">
            <span v-if="UpCase">от А до Я</span>
            <span v-else>от Я до А</span>
        </button>
        <button v-on:click="sortedList='date'">
            <span v-if="UpDate"> Дата по возрастанию </span>
            <span v-else> Дата по убыванию </span>
        </button>
    </div>
    <div v-for = "item in sortedList" :key="item">{{items.title}}</div>
    <div>
        <button id="link">
            <router-link to="/NewArticle"> Добавить запись</router-link>
        </button>
    </div>
    <div>
        <ol class="list-group">
            <li v-for="item in searchM" :key="item"><a href="/DiaryPage" class="list-group-item">{{item.title}}</a></li>
        </ol>
        <ol class="list-group">
            <li v-for="item in filterM" :key="item"><a href="/DiaryPage" class="list-group-item">{{item.title}}</a></li>
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
            filter:'',
           
            UpCase: true,
            UpDate: true    
        };
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
        sortParam () {
            this.UpCase = !this.UpCase
        }
    },
    computed:{
        sortedList() {
            const order = this.UpCase ? 1 : -1;
            console.log(order);
            switch (this.sortParam) {
                case 'case': return this.items.sort(sortByCase);
                case 'date': return this.items.sort(sortByDate);
                default: return this.items;
            }
        },
        searchM () {
            return this.items.filter(item => {
                return item.title.includes(this.search)
            });
        },
        filterM () {
            return this.items.filter (item => { 
                return item.title.includes(this.filter)
            })
        }
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
const sortByCase = function (d1, d2) { return (d1.title.toLowerCase() > d2.title.toLowerCase()) ? 1 : -1;}
const sortByDate = function (d1, d2) { return (d1.id > d2.id) ? 1 : -1;}

</script>

<style>

</style>