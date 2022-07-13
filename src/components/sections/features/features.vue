<script setup>
import FeatureItem from "./featureItem.vue";
</script>
<template>
  <section class="features container">
    <div class="title">
      <h1 class="title-main">Membership benefits</h1>
      <span class="title-small">Become our sponsor and get all benefits</span>
    </div>
    <div class="feature-cards">
      <FeatureItem v-for="i in 6" :key="i" />
    </div>
    <a href="#" class="see-pricing"> See pricing </a>
  </section>
  <Scribble />
</template>
