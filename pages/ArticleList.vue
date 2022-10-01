<template>
  <div>
    <div id="search-component">
      Search section
      <input
        v-model="search"
        type="text"
        placeholder="Title search"
      />
    </div>
    <div>
      <button id="link">
        <router-link to="/NewArticle"> Добавить запись</router-link>
      </button>
    </div>
    <div id="sortsection">
      Sort section
      <button @click="setOrderType(0)">Сортировка по возрастанию</button>
      <button @click="setOrderType(1)">Сортировка по убыванию</button>
    </div>
    <div
      v-for="item in filterItems"
      :key="item.id"
    >
      №{{ item.id }}
      <a href="/DiaryPage">
        <!-- <a :href="`https://jsonplaceholder.typicode.com/posts/${item.id}`"> -->
        {{ item.title }} Название статьи
      </a>
    </div>
    <div
      id="pagination"
      class="container"
    >
      <ul class="list-group">
        <li
          v-for="item in collection"
          :key="item.id"
          class="list-group-item"
        >
          {{ item.title }}
        </li>
      </ul>
      <hr />
      <div class="btn-toolbar">
        <div class="btn-group">
          <button
            v-for="p in pagination.pages"
            id="pagin"
            :key="p"
            class="btn btn-primary"
            @click.prevent="setPage(p)"
          >
            {{ p }}
          </button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script lang="ts">
import axios from 'axios';
/// import Pagination from './Pagination.vue';

export default {
  name: 'ArticleList',
  components: {
    /// Pagination,
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
      orderType: 0,

      perPage: 20,
      pagination: {},
    };
  },
  computed: {
    filterItems() {
      const { search, items, orderType } = this;
      console.log({ orderType, items });
      let filterArr = [...items];

      filterArr = items.filter((item) => item.title.indexOf(search) !== -1);

      if (orderType) {
        console.log('in IF statement');
        filterArr.sort((a, b) => {
          if (orderType === 1) {
            return b.id - a.id;
          }
          return a.id - b.id;
        });
      }
      return filterArr;
    },

    collection() {
      return this.paginate(this.items);
    },
  },
  async created() {
    await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })
      .then((response) => {
        this.items = response.data;
        this.setPage(1);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    setOrderType(orderType) {
      this.orderType = orderType;
    },
    // onPageChange(page) {
    //   this.currentPage = page;
    // },
    setPage(p) {
      console.log('setPage', this.items);
      this.pagination = this.paginator(this.items.length, p);
    },
    paginate(items) {
      return items.slice(
        items,
        this.pagination.startIndex,
        this.pagination.endIndex
      );
    },
    paginator(totalItems, currentPage) {
      console.log('paginator', totalItems, currentPage);
      const startIndex = currentPage * this.perPage;
      const endIndex = Math.min(startIndex + this.perPage, totalItems);

      const test = {
        currentPage,
        startIndex,
        endIndex,
        pages: [...new Array(Math.ceil(totalItems / this.perPage)).keys()].map(
          (i) => i + 1
        ),
      };
      console.log('grh', test);
      return test;
    },
  },
};
</script>

<style>
#link {
  border-radius: 6px;
  font-size: large;
  background-color: #fff;
  margin: 20px 10px;
  transition: 0.2s;
  transition-delay: 0.2s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}
#search-component {
  border-radius: 6px;
  font-size: large;
}
#pagin {
  margin: 5px 2px;
}
</style>
