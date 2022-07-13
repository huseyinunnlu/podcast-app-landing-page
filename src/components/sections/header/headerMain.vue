<script setup>
import Navbar from "./navbar.vue";
import HeaderMain from "./headerMain.vue";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
const headerTitles = [
  {
    route: "index",
    title: `<h1 class="black">
        Your Daily <br />
        <span class="vermililion">Podcast</span>
      </h1>`,
    text: "We cover all kinds of categories and a weekly special guest.",
  },
  {
    route: "about",
    title: `<h1 class="black">
        About <br />
        <span class="vermililion">Pod of Cast</span>
      </h1>`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.",
  },
];

const getTitle = computed(() => {
  const routeName = route.name;
  return headerTitles.find((item) => {
    return item.route == routeName;
  });
});
</script>
<template>
  <div class="header-title">
    <div class="title" v-html="getTitle.title"></div>
    <span class="header-text">{{ getTitle.text }}</span>
    <a href="#" class="subscribe header-subscribe-button"> Subscribe </a>
  </div>
</template>
