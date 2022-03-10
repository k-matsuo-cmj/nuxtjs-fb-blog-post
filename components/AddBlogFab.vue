<template>
  <v-tooltip left>
    <template #activator="{ on }">
      <v-fab-transition>
        <v-btn
          color="deep-orange darken-2"
          dark
          fixed
          absolute
          large
          bottom
          right
          fab
          to="/post"
          style="bottom: 30px"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>
    <span>Add Blog</span>
    <span v-if="!$store.getters.isAuthenticated"><br>(require Login)</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'AddBlogFab'
}
</script>

<style>

</style>
