<script setup>
import Filter from "@/components/sections/latestEpisodes/filter.vue";
import EpisodeCards from "@/components/sections/recentEpisodes/episodeCards.vue";
</script>
<template>
  <section class="latest-episodes container">
    <div class="title">
      <h1 class="title-main">Latest Episode</h1>
    </div>
    <Filter />
    <EpisodeCards />
  </section>
  <Scribble />
</template>
