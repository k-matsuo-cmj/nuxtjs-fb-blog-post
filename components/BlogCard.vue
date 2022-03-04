<template>
  <v-card class="mb-1">
    <v-card-title>{{ blog.title }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    blog: { type: Object, default: null }
  }
}
</script>

<style scoped>
  .v-card {
    width: 100%;
  }
</style>
