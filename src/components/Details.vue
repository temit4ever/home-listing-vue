<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <v-container>
      <div>
        <router-link to="/" class="v-btn">
          <v-icon>mdi-chevron-left</v-icon><span>Back</span>
        </router-link>
      </div>
    </v-container>
    <Feature
        :list-details="groupList"
    />
    <v-container>
    </v-container>
  </div>
</template>

<script>
import Feature from './Feature'

export default {
  name: 'Details.vue',
  components: {
    Feature
  },
  data: () => ({
  }),
  computed: {
    groupList: function () {
      return this.$store.getters.getGroupList
    }
  }
}
</script>

<style scoped>

</style>
