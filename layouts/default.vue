<template>
  <v-app>
    <v-app-bar app dark color="brown darken-1">
      <v-toolbar-title>Blog Post</v-toolbar-title>
      <v-spacer />
      <v-btn v-if="!$store.getters.isAuthenticated" icon :to="'/login'">
        <v-icon>
          mdi-account-circle
        </v-icon>
      </v-btn>
      <v-btn v-else icon @click="logout">
        {{ $store.state.user.displayName }}
        <v-icon>
          mdi-dots-vertical
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
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
