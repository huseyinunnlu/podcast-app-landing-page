<script setup>
import EpisodeItem from "./episodeItem.vue";
</script>
<template>
  <div class="episode-cards">
    <EpisodeItem v-for="i in 6" :key="i" />
  </div>
</template>
