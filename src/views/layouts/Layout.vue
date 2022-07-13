<script setup>
import Header from "@/components/sections/header/header.vue";
import HeaderSlider from "@/components/sections/header/headerSlider.vue";
import About from "@/components/sections/about/about.vue";
import Cta from "@/components/sections/cta/cta.vue";
import Footer from "@/components/sections/footer/footer.vue";
</script>
<template>
  <Header />
  <router-view></router-view>
  <Cta />
  <Footer />
</template>
