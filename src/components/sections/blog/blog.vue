<script setup>
import BlogCardItem from "./blog-card-item.vue";
</script>
<template>
  <section class="blog container">
    <div class="title">
      <h1 class="title-main">Article and News</h1>
      <h3 class="title-small">News, tips, tricks and more</h3>
    </div>
    <div class="blog-cards">
      <BlogCardItem v-for="i in 2" :key="i" />
    </div>
    <div class="browse-all">
      <a href="#">BROWSE ALL </a>
    </div>
  </section>
  <Scribble />
</template>
