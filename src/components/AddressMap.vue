<template>
<div>
  <v-container>
    <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="roadmap"
        style="width: 100%; height: 500px; margin-top: 1px;"
    >
      <GmapMarker
          :key="index"
          v-for="(m, index) in savedLocation"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GmapMap>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'AddressMap.vue',
  data: () => ({
    savedLocation: []
  })
}
</script>

<style scoped>

</style>
