<template>
  <div class="header-slider">
    <img :src="`/stock/cover-${i}.png`" alt="" v-for="i in 6" :key="i" />
  </div>
</template>
