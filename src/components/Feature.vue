<template>
<div>
  <v-container>
    <div class="header col-xs-12">
      <v-card>
        <v-carousel>
          <v-carousel-item v-for="(image, index) in singleList.image" :key="index">
            <img :src=image.src class="header-img"/>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </div>
  </v-container>
  <v-container>
      <h1 class="indigo--text">{{ singleList.title }}</h1>
      <div class="subtitle-2 mt-2 mb-2">{{ singleList.address }}</div>
      <v-divider></v-divider>
  </v-container>
  <div>
    <v-container>
      <v-row>
        <div class="col-8">
          <div class="mt-5 ">
            <h2>About this listing</h2>
            <p class="text-subtitle-1 text-justify">{{ singleList.about }}</p>
          </div>
          <v-divider></v-divider>
          <div class="subtitle-2">
            <h3 class="mt-3">Amenities</h3>
          </div>
          <v-card color="indigo lighten-1">
            <div class="mt-2">
              <Amenities :amenities="singleList.amenities" />
            </div>
          </v-card>
          <v-divider></v-divider>
          <div>
            <h3 class="mt-3 ">Price</h3>
          </div>
          <v-card color="indigo lighten-1">
            <div class="mt-3">
              <Prices :prices="singleList.prices" />
            </div>
          </v-card>
          <v-divider></v-divider>
        </div>
        <div class="col-4">
          <h1> The Address Map</h1>
          <AddressMap />
        </div>
      </v-row>
    </v-container>
  </div>
</div>
</template>

<script>
import Prices from '@/components/Prices'
import Amenities from '@/components/Amenities'
import _ from 'lodash'
import AddressMap from '@/components/AddressMap'

export default {
  name: 'Feature',
  components: {
    AddressMap,
    Prices,
    Amenities
  },
  data: () => ({
    detail: {}
  }),
  props: {
    listDetails: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String
    },
    listId: {
      type: String
    }
  },
  computed: {
    singleList: function () {
      let details = []
      const id = this.$route.params.id
      const city = this.$route.params.city
      console.log(city)
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const items = this.listDetails
      console.log(typeof items)
      if (items !== undefined) {
        if (typeof items === 'object') {
          console.log(items)
          _.forEach(items, function (value, index) {
            // console.log(value)

            if (index === city) {
              details = _.find(value, function (obj) {
                console.log(value)

                // debugger
                if (obj.id === id) {
                  return true
                }
              })
            }
          })
        } else {
          const list = JSON.parse(items)
          _.forEach(list, function (value, index) {
            if (index === city) {
              _.forEach(value, function (oneList) {
                details = oneList
              })
            }
          })
          console.log(details)
        }
        return details
      } else {
        return null
      }
      // localStorage.setItem('single-list', JSON.stringify(details))
      // this.$store.commit('list', details)
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: nowrap;
  margin: 2em 0;
  justify-content: space-around;
}
.header .header-img {
  background-position: 50% 50%;
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
}

</style>
