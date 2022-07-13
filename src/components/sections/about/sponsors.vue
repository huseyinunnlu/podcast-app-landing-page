<script setup>
import SponsorCardItem from "./sponsorCardItem.vue";
</script>
<template>
  <section class="sponsors">
    <div class="container">
      <div class="title">
        <h1 class="title-main">Our Sponsor</h1>
        <h3 class="title-small">Our current offical sponsor</h3>
      </div>
      <div class="sponsor-cards">
        <SponsorCardItem v-for="i in 3" :key="i" />
      </div>
    </div>
  </section>
</template>
