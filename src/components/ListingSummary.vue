<template>
  <v-container class="container-scoped">
    <div>
      <router-link :to="{ name: 'Details', params: { id: listing.id, city: listing.city }}">
        <div class="">
          <img :src="listing.thumb.src"
               class="shadow"
               :width=largeMediaWidth
               :height=largeMediaHeight />
        </div>
      </router-link>
    </div>
    <h3>{{ listing.address }}</h3>
    <h3>{{ listing.prices[0].value }}</h3>
  </v-container>
</template>

<script>
// import vuetify from './plugins/vuetify'

export default {
  name: 'ListingSummary.vue',
  components: {
    // Details
  },
  props: {
    listing: {
      type: Object
    }
  },
  computed: {
    // Set the width of an image based on the breakpoint
    largeMediaWidth: function () {
      let width = ''
      console.log(this.$vuetify.breakpoint.xlOnly)
      if (this.$vuetify.breakpoint.xlOnly) {
        width = '560'
      } else {
        width = '370'
      }
      return width
    },
    // Set the height of an image based on the breakpoint
    largeMediaHeight: function () {
      let height = ''
      if (this.$vuetify.breakpoint.xlOnly) {
        height = '500'
      } else {
        height = '350'
      }
      return height
    }
  }
}

</script>

<style scoped>
.container-scoped {
  justify-items: center;
  flex-direction: column;
}
.shadow {
  border-radius: 4px;
}
</style>
