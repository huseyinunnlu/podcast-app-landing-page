<script setup>
import PricingItem from "./pricing-item.vue";
</script>
<template>
  <section class="pricing container">
    <div class="title">
      <h1 class="title-main">Become our sponsor</h1>
      <h3 class="title-small">Get exclusive episodes, merch and more</h3>
    </div>
    <div class="pricing-cards">
      <PricingItem v-for="i in 3" :key="i" :isPopular="i == 2 ? true : false" />
    </div>
  </section>
  <Scribble />
</template>
