<script setup>
import { useNavbar } from "@/composables/useNavbar";
import { ref } from "@vue/reactivity";

const mobileNavbar = ref();
const navbar = useNavbar(mobileNavbar);
</script>
<template>
  <header class="navbar container">
    <div class="logo">
      <router-link to="/"
        ><img src="@/assets/media/logo.svg" alt=""
      /></router-link>
    </div>
    <nav class="nav">
      <router-link to="/" class="nav-item">Episodes</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/" class="nav-item">More</router-link>
    </nav>
    <div class="nav-buttons">
      <router-link to="/recentepisodes" class="recent-episodes"
        >Recent Episodes</router-link
      >
      <a href="#" class="subscribe">Subscribe</a>
    </div>

    <i
      class="nav-toggler fas fa-bars"
      role="nav-toggler"
      @click="navbar.toggle"
    ></i>
  </header>

  <div class="nav-mobile" ref="mobileNavbar">
    <div class="nav-wrapper">
      <i
        class="nav-toggler fas fa-times"
        role="nav-toggler"
        @click="navbar.toggle"
      ></i>
      <nav class="nav">
        <router-link to="/" class="nav-item">Episodes</router-link>
        <router-link to="/" class="nav-item">About</router-link>
        <router-link to="/" class="nav-item">More</router-link>
      </nav>
      <div class="nav-buttons">
        <a href="#" class="recent-episodes">Recent episodes</a>
        <a href="#" class="subscribe">Subscribe</a>
      </div>
    </div>
  </div>
</template>
