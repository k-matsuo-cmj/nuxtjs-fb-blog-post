<template>
  <v-app>
    <v-app-bar app :color="baseColor.color" :dark="baseColor.dark">
      <v-toolbar-title>Blog Post</v-toolbar-title>
      <v-spacer />
      <v-tooltip v-if="!$store.getters.isAuthenticated" left>
        <template #activator="{ on }">
          <v-btn icon :to="'/login'" v-on="on">
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-btn>
        </template>
        <span>Login</span>
      </v-tooltip>
      <v-menu v-else bottom transition="slide-y-transition">
        <template #activator="{ on }">
          <v-btn text v-on="on">
            {{ $store.state.user.displayName }}
            <v-icon>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>
        <v-list :color="baseColor.color" :dark="baseColor.dark">
          <v-list-item :key="'logout'" @click="logout">
            <v-icon>mdi-exit-to-app</v-icon>
            Logout
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app :color="baseColor.color" :dark="baseColor.dark" padless>
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
  computed: {
    baseColor () {
      return {
        color: this.$store.getters.isAuthenticated ? 'brown lighten-3' : 'brown darken-1',
        dark: !this.$store.getters.isAuthenticated
      }
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
