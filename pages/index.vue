<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <blog-list />
        <v-fab-transition>
          <v-btn
            color="deep-orange darken-2"
            dark
            absolute
            large
            bottom
            right
            fab
            to="/post"
            style="bottom: 30px"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
</style>
