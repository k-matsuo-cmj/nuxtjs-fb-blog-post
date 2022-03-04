<template>
  <v-row justify="center">
    <v-col cols="12" sm="10">
      <v-card>
        <v-toolbar dense dark color="success">
          <v-toolbar-title>Sign up</v-toolbar-title>
          <v-spacer />
          <v-btn icon to="/">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" />
            <v-text-field label="Password" />
            <v-text-field label="Confirm Password" />
            <v-text-field label="Your Name" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn large color="success" to="/">
            register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SignupPage'
}
</script>

<style>

</style>
