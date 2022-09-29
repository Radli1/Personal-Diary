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
      <button @click="sortedList = 'case'">
        <span v-if="UpCase">от А до Я</span>
        <span v-else>от Я до А</span>
      </button>
      <button @click="sortedList = 'date'">
        <span v-if="UpDate"> Дата по возрастанию </span>
        <span v-else> Дата по убыванию </span>
      </button>
    </div>
    <div
      v-for="item in sortedList"
      :key="item"
    >
      {{ items.title }}
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
    };
  },
  computed: {
    sortedList() {
      const order = this.UpCase ? 1 : -1;
      console.log(order);
      const itemsCopy = [...this.items];
      switch (this.sortParam) {
        case 'case':
          return itemsCopy.sort((d1, d2) =>
            d1.title.toLowerCase() > d2.title.toLowerCase() ? 1 : -1
          );
        case 'date':
          return itemsCopy.sort((d1, d2) => (d1.id > d2.id ? 1 : -1));
        default:
          return itemsCopy;
      }
    },
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
        console.log({ response });
        // this.items = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    sortParam() {
      this.UpCase = !this.UpCase;
      this.UpDate = !this.UpDate;
    },
  },
};
</script>

<style></style>
