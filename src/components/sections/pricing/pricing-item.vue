<script setup>
const props = defineProps(["isPopular"]);
</script>
<template>
  <div class="picing-card" :class="props.isPopular ? 'popular' : ''">
    <div class="pricing-card-child price">
      <div class="card-header">
        <div class="card-title">
          <h2 class="card-title-main">Member</h2>
          <span class="most-popular" v-if="props.isPopular"> Popular </span>
        </div>
        <span class="card-title-small">
          Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.
        </span>
      </div>
      <div class="card-footer">
        <a href="#" class="subscribe-button">Subcribe</a>
        <div class="price">
          <span>$9.99</span>
          <span>/month</span>
        </div>
      </div>
    </div>
    <div class="pricing-card-child benefits">
      <span class="benefit-title">What's included:</span>
      <ul class="benefit-list">
        <li class="benefit-list-item">Exclusive Content</li>
        <li class="benefit-list-item">5% Discount on Merch</li>
        <li class="benefit-list-item">Join the Community</li>
        <li class="benefit-list-item">Livestreaming Access</li>
      </ul>
    </div>
  </div>
</template>
