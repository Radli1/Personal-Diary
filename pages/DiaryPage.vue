<template>
  <div>
    <h2 class="title">TITLE</h2>
    <h3>TEXT</h3>
    <div class="title">{{ item }}</div>
    <h3>PHOTO</h3>
    <div>
      <img :src="photo" />
    </div>

    <h3>COMMENTS</h3>
    <button @click="visible = !visible">
      {{ visible ? 'Удалить комментарий' : 'Добавить комментарий' }}
    </button>
    <div v-show="visible">
      <div
        id="comment"
        class="comment-box"
      >
        <div
          v-show="loading"
          class="loader"
        >
          <span class="spinner"></span>
        </div>
      </div>
      <form
        action=""
        method="post"
        @submit.prevent="submit"
      >
        <textarea
          id="message"
          v-model="data.message"
          class="input-message"
          name="message"
          rows="3"
          placeholder="Your comment..."
          required
        ></textarea>
        <input
          v-model="data.name"
          class="input-name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          :disabled="loading"
          type="submit"
          value="Comment"
        />
      </form>
    </div>

    <div>
      <button @click="(show = !show), getComments()">
        {{ show ? 'Показать комментарии' : 'Скрыть комментарии' }}
      </button>
      <div v-show="show">
        <div
          v-for="comment in comments"
          :key="comment.id"
        >
          {{ comment }}
        </div>
      </div>
    </div>
    <div>
      <button id="modal">
        <router-link to="/ModalComponent">Редактировать запись</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      photo: '',
      loading: false,
      data: {},
      item: '',
      visible: 'true',
      comments: [],
      show: 'true',
      srcImage: '',
    };
  },
  mounted() {
    axios({
      method: 'get',
      url: 'https://baconipsum.com/api/?type=meat-and-filler',
    }).then((response) => {
      this.item = response.data;
    });

    axios({
      method: 'get',
      url: 'https://api.unsplash.com/photos/random/?client_id=2XvEghmfJiiZDW9ybYbJyzhZaLNJh_h9MC8CIVoDZ1o',
    }).then((response) => {
      console.log('rsp', response);
      this.photo = response.data.urls.small;
    });
  },
  methods: {
    submit() {
      this.loading = true;
      axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: this.data,
      }).then((response) => {
        console.log(response);
      });
    },
    getComments() {
      axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments',
      }).then((response) => {
        this.comments = response.data;
      });
    },
  },
};
</script>

<style>
#comment {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
