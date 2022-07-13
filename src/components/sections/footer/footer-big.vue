<template>
  <div class="footer-big">
    <div class="footer-column logo">
      <div class="footer-logo">
        <img src="@/assets/media/logo.svg" />
        <span class="copyright">&copy; 2022</span>
      </div>
      <p class="footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="footer-icons">
        <img src="@/assets/media/icons/twitter-icon.svg" />
        <img src="@/assets/media/icons/instagram-icon.svg" />
        <img src="@/assets/media/icons/tiktok-icon.svg" />
      </div>
    </div>
    <div class="footer-column menu">
      <ul class="footer-menu">
        <router-link to="/" class="footer-menu-item">About</router-link>
        <router-link to="/" class="footer-menu-item active"
          >Testimonials</router-link
        >
        <router-link to="/" class="footer-menu-item">Features</router-link>
        <router-link to="/" class="footer-menu-item">Episodes</router-link>
        <router-link to="/" class="footer-menu-item">Pricing</router-link>
        <router-link to="/" class="footer-menu-item">Blog</router-link>
      </ul>
    </div>
    <div class="footer-column platforms">
      <div class="footer-platforms">
        <p class="platform-text">Listen to episodes on your fav platform:</p>
        <div class="footer-icons">
          <img src="@/assets/media/icons/google-podcasts-icon.svg" />
          <img src="@/assets/media/icons/spotify-icon.svg" />
          <img src="@/assets/media/icons/youtube-icon.svg" />
        </div>
      </div>
      <div class="footer-aviable-stores">
        <p class="aviable-store-text">App aviable on:</p>
        <div class="footer-icons">
          <img src="@/assets/media/icons/app-store-icon.svg" />
          <img src="@/assets/media/icons/google-play-icon.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
