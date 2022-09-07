<template>
  <div>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-start">
          <nuxt-link active-class="is-active" to="/" class="navbar-item"> Начальная страница </nuxt-link>
          <nuxt-link active-class="is-active" to="articlelist" class="navbar-item">Список записей</nuxt-link>
          <nuxt-link active-class="is-active" to="newarticle" class="navbar-item">Новая запись</nuxt-link>
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
</style>
