<script setup>
import SliderItem from "./slider-item.vue";
</script>
<template>
  <section class="testimonials">
    <div class="title">
      <h1 class="title-main">What our listeners say</h1>
      <h3 class="title-small">Their experience throught every platform</h3>
    </div>
    <div class="testimonial-slider">
      <SliderItem v-for="i in 3" :key="i" />
    </div>
  </section>
  <Scribble />
</template>
