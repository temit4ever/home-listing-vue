<template>
  <div class="list">
    <v-row>
      <div v-for="(price, i) in prices" :key="i" class="col-6">
        <div class="subtitle-2">
          <div>{{ price.title }}: {{ price.value }}</div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Prices.vue',
  props: {
    prices: {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>
