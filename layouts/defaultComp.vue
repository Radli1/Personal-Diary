<template>
  <div>
    <nav
      class="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-start">
          <nuxt-link
            active-class="is-active"
            to="/"
            class="navbar-item"
          >
            Начальная страница
          </nuxt-link>
          <nuxt-link
            active-class="is-active"
            to="articlelist"
            class="navbar-item"
            >Список записей</nuxt-link
          >
          <nuxt-link
            active-class="is-active"
            to="newarticle"
            class="navbar-item"
            >Новая запись</nuxt-link
          >
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style>
.nav {
  margin: 30 px 0;
}

.navbar-item {
  color: crimson;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
