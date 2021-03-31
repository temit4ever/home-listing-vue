<template>
  <v-container>
    <v-app-bar
        app
        color="indigo"
        dark
    >
      <div class="d-flex align-center">
        <router-link to="/" class="v-btn">
          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src=siteLogo.src
              transition="scale-transition"
              width="80"
              height="70"
          />
        </router-link>
        <v-app-bar-title>
          <h5 class="col-xs-12">Property Investment</h5>
          <div>Fully Managed | Long Term | Guaranteed Rent</div>
        </v-app-bar-title>
      </div>
      <v-spacer></v-spacer>
      <div>
        <UserMenu />
      </div>
    </v-app-bar>

  </v-container>
</template>

<script>
import logo from '../assets/site_logo/siteLogo.js'
import UserMenu from '@/components/UserMenu'
export default {
  name: 'NavBar.vue',
  components: {
    UserMenu
  },
  data: () => ({
    siteLogo: logo
  })
}
</script>

<style scoped>

</style>
