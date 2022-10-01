<template>
  <div>
    <nav
      class="navbar"
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.navbar-item {
  background-color: green;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  text-align: justify;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>
