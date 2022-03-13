<template>
  <div>
    <v-tooltip left>
      <template #activator="{ on }">
        <v-fab-transition>
          <v-btn
            color="deep-orange darken-2"
            dark
            fixed
            large
            bottom
            right
            fab
            style="bottom: 30px"
            @click="openDialog"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span>Add Blog</span>
      <span v-if="!$store.getters.isAuthenticated"><br>(require Login)</span>
    </v-tooltip>
    <blog-post-dialog ref="postDialog" />
  </div>
</template>

<script>
export default {
  name: 'AddBlogFab',
  methods: {
    openDialog () {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push('/login')
      } else {
        this.$refs.postDialog.open()
      }
    }
  }
}
</script>

<style>

</style>
