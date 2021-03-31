<template>
  <div class="list">
    <v-row>
        <div v-for="(amenity, i) in amenities" :key="i" class="col-6">
            <v-icon class="ml-2">{{amenity.icon}}</v-icon>
            <span class="ml-4">{{amenity.title}}</span>
        </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Amenities.vue',
  props: {
    amenities: {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>
