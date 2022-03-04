<template>
  <v-row justify="center">
    <v-col cols="12" sm="10">
      <v-card>
        <v-toolbar dense dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer />
          <v-btn icon to="/">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" />
            <v-text-field label="Password" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <nuxt-link to="/">
            Sign up
          </nuxt-link>
          <v-spacer />
          <v-btn large color="primary" to="/">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style>

</style>
