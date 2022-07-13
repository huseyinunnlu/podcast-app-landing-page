<script setup>
import EpisodeCards from "./episodeCards.vue";
</script>
<template>
  <section class="recent-episodes">
    <div class="container">
      <div class="title">
        <h1 class="title-main">Recent Episodes</h1>
        <span class="title-small">Available on your favorite platform</span>
      </div>

      <EpisodeCards />

      <div class="browse-all">
        <a href="#">Browse all categories</a>
      </div>
    </div>
  </section>
  <Scribble />
</template>
