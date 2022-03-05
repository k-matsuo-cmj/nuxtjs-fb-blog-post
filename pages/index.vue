<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list v-if="blogs.length" class="overflow-y-auto">
          <v-list-item v-for="blog in blogs" :key="blog.id">
            <blog-card :blog="blog" />
          </v-list-item>
        </v-list>
        <span v-else>No Blogs...</span>
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
  name: 'IndexPage',
  computed: {
    blogs () {
      return this.$store.state.blogs.blogs
    }
  },
  mounted () {
    this.$store.dispatch('blogs/init')
  }
}
</script>

<style scoped>
.v-list {
  height: 78vh;
}
</style>
