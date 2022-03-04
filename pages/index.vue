<template>
  <v-container>
    <v-row>
      <v-col v-if="!blogs.length" cols="12">
        <span>No Blogs...</span>
      </v-col>
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
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      blogs: []
    }
  }
}
</script>
