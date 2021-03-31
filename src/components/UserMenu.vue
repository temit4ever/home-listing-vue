<template>
  <v-container>
    <v-row justify="space-around">
    <div class="text-center">
      <v-menu
          open-on-hover
          offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class=""
              v-bind="attrs"
              v-on="on"
              text
          >
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
          >
            <v-list-item-title>
              <div>
                <v-btn text>
                  <v-icon class="mr-5">{{item.icon}}</v-icon>
                  <span>{{ item.title }}</span>
                </v-btn>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'UserMenu.vue',
  data: () => ({
    items: [
      { title: 'Sign In', icon: 'mdi-login-variant' },
      { title: 'Create Account', icon: 'mdi-account-plus' }
    ]
  })
}
</script>

<style scoped>

</style>
