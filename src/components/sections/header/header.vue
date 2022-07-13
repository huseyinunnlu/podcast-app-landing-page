<script setup>
import Navbar from "./navbar.vue";
import HeaderMain from "./headerMain.vue";
import HeaderAlt from "./headerAlt.vue";
</script>
<template>
  <section class="header">
    <Navbar />
    <HeaderMain v-if="$route.name != 'recent-episodes'" />
    <HeaderAlt v-else />
  </section>
</template>
