<template>
  <v-app>
    <v-app-bar app dark color="brown darken-1">
      <v-toolbar-title>Blog Post</v-toolbar-title>
      <v-spacer />
      <v-btn icon :to="'/login'">
        <v-icon>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app dark color="brown darken-1" padless>
      <v-col class="text-center text-caption">
        <span>&copy; CyberMissions {{ new Date().getFullYear() }}</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
