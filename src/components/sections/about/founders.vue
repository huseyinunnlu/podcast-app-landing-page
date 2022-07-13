<script setup>
import FounderCardItem from "./founderCardItem.vue";
</script>
<template>
  <section class="founders container">
    <h2 class="title">Founder and Main Host</h2>
    <div class="founder-cards">
      <FounderCardItem v-for="i in 2" :key="i" />
    </div>
  </section>
</template>
