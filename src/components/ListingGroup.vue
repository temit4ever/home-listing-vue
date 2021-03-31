<template>
<v-container>
  <div>
    <h1 class="indigo--text">Places in {{ city }}</h1>
    <div>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-6 col-lg-4" v-for="list in listing" :key="list.id">
          <listing-summary
              :listing="list"
          >
          </listing-summary>
          <v-divider></v-divider>
        </div>
      </div>
        </div>
      </div>
</v-container>
</template>

<script>
// import CarouselControl from './CarouselControl'
import ListingSummary from './ListingSummary'
export default {
  name: 'ListingGroup.vue',
  components: {
    ListingSummary
  },
  props: {
    city: {
      type: String
    },
    listing: {
      type: Array
    },
    image: {
      type: Object
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
</style>
