<template>
  <div>
    <div id="search-component">
      Search section
      <input
        v-model="search"
        type="text"
        placeholder="Title search"
      />
      <select v-model="filter">
        <option value="0">Все категории</option>
        <option
          v-for="item in items"
          :key="item.title"
          :value="item.title"
        >
          {{ item.title }}
        </option>
      </select>
    </div>

    <div id="sortsection">
      Sort section
      <button @click="sortDate">
        <span v-if="UpCase">от А до Я</span>
        <span v-else>от Я до А</span>
      </button>
      <button @click="type = 'date'">
        <span v-if="UpDate"> Дата по возрастанию </span>
        <span v-else> Дата по убыванию </span>
      </button>
    </div>
    <div
      v-for="item in sortedList1"
      :key="item.id"
    >
      {{ item.title }}
    </div>

    <div>
      <button id="link">
        <router-link to="/NewArticle"> Добавить запись</router-link>
      </button>
    </div>
    <div>
      <ol class="list-group">
        <li
          v-for="item in searchM"
          :key="item"
        >
          <a
            href="/DiaryPage"
            class="list-group-item"
            >{{ item.title }}</a
          >
        </li>
      </ol>
      <ol class="list-group">
        <li
          v-for="item in filterM"
          :key="item"
        >
          <a
            href="/DiaryPage"
            class="list-group-item"
            >{{ item.title }}</a
          >
        </li>
      </ol>
    </div>
    <div id="pagination">
      <pagination
        :total-pages="7"
        :per-page="10"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import Pagination from './Pagination.vue';

export default {
  name: 'ArticleList',
  components: {
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      items: [],
      loaded: true,
      search: '',
      filter: '',
      UpCase: true,
      UpDate: true,
      type: '',
    };
  },
  computed: {
    // sortedList1() {
    //   const itemsCopy = [...this.items];
    //   let sortedItems;
    //   this.type = this.sortParam

    //   switch (this.type) {
    //     case 'case':
    //       console.log('в кейсе')

    //       sortedItems = itemsCopy.sort((a, b) =>
    //         a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);

    //       sortedItems = itemsCopy.sort ((a, b) =>
    //         a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1);

    //       break;
    //     case 'date':
    //     console.log('в дате')
    //     sortedItems = itemsCopy.sort((d1, d2) => (d1.id > d2.id ? 1 : -1));
    //       break;
    //     default:
    //       console.log('default')
    //       sortedItems = itemsCopy;
    //   }
    //   return itemsCopy;
    // },
    searchM() {
      return this.items.filter((item) => item.title.includes(this.search));
    },
    filterM() {
      return this.items.filter((item) => item.title.includes(this.filter));
    },
  },
  created() {
    axios({ method: 'get', url: 'https://jsonplaceholder.typicode.com/posts' })
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    sortParamCase() {
      this.UpCase = !this.UpCase;
    },

    sortDate() {
      this.items.sort((a, b) => {
        if (this.UpCase) {
          return b.title - a.title;
        }
        return a.title - b.title;
      });
    },
  },
};
</script>

<style></style>
