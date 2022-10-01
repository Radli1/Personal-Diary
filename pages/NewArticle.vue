<template>
  <div>
    <ol>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|alpha_dash"
      >
        <input
          v-model="login"
          type="text"
          placeholder="login"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </ol>
    <ol>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|alpha_dash"
      >
        <input
          v-model="password"
          type="text"
          placeholder="password"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </ol>
    <ol>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|alpha_dash"
      >
        <input
          v-model="title"
          type="text"
          placeholder="article text"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </ol>
    <h3>ЗАГРУЗКА ФОТО</h3>
    <div>
      <img class="uploading-image" />
      <input
        type="file"
        accept="image/jpeg"
        @change="uploadImage"
      />
      <cropper
        class="cropper"
        :src="previewImage"
        @change="change"
      ></cropper>
    </div>
    <button
      type="submit"
      @click="onsubmit"
    >
      Загрузить
    </button>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import axios from 'axios';

export default {
  components: {
    ValidationProvider,
    Cropper,
  },
  data() {
    return {
      login: '',
      title: '',
      password: '',
      previewImage: null,
      photo: [],
      /// /img: '/src/img/img.jpg'
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (Event) => {
        this.previewImage = Event.target.result;
        console.log(this.previewImage);
      };
    },
    onsubmit() {
      alert('Form has been submitted');
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        login: this.login,
        password: this.password,
        title: this.title,
      });
    },
    change({ coordinates, canvas }) {
      console.log(coordinates, canvas);
    },
  },
};
</script>

<style></style>
