<template>
<div>
  <v-container>
    <v-footer class="indigo pa-3 footer-section" dark app>
      <span align="center">&copy; 2021 Sorillas Home &#124; All right reserved</span>
      <div class="footer-social-media-logo col-12">
        <div class="ma-0">
          <a href="https://www.facebook.com/pages/category/Property-Management-Company/Sorillas-Homes-LTD-1907636309551602/" target="_blank">
            <v-icon x-large>mdi-facebook</v-icon>
          </a>
        </div>
        <div class="ma-0">
          <a href="/" target="_blank">
            <v-icon x-large>mdi-twitter</v-icon>
          </a>
        </div>
        <div class="ma-0">
          <a href="/" target="_blank">
            <v-icon x-large>mdi-whatsapp</v-icon>
          </a>
        </div>
      </div>
    </v-footer>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'Footer.vue'
}
</script>

<style scoped>
.footer-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer-social-media-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.footer-social-media-logo a{
  font-size: large;
  transition: 0.5s;
  color: indigo;
  text-decoration: none;
}
</style>
