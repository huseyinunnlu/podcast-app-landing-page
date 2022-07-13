<script setup></script>

<template>
  <notifications />
  <router-view :key="$route.fullPath"></router-view>
</template>

<style lang="scss">
@import url("./assets/sass/style.scss");
</style>
