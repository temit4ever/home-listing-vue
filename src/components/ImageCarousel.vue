<template>
  <v-container>
    <div class="image-carousel">
    <span v-for="(src, index) in image" :key="index">
      <v-img :src="src.src"
      >
      </v-img>
    </span>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'ImageCarousel.vue',
  components: {
  },
  data: () => ({
  })
}
</script>

<style scoped>
.image-carousel {
  width: 45px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
