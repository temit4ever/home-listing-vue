<template>
  <div class="home">
     <div class="">
        <listing-group
            v-for="(group, index) in groupByCity"
            :key="index"
            :city="index"
            :listing="group"
        ></listing-group>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sampleData from '../assets/data/data.js'
import ListingGroup from '../components/ListingGroup'
import _ from 'lodash'

export default {
  name: 'Home.vue',
  computed: {
    groupByCity: function () {
      const result = _.reduce(this.data, function (r, a) {
        r[a.city] = r[a.city] || []
        r[a.city].push(a)
        return r
      }, {})
      console.log(result)
      this.$store.commit('addData', result)
      return result
    }
  },
  components: {
    ListingGroup
  },
  data: () => ({
    data: sampleData
  }),
  methods: {
  }
}
</script>
