<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar dense dark color="secondary">
            <v-toolbar-title>New Blog</v-toolbar-title>
            <v-spacer />
            <v-btn icon to="/">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Title" />
              <v-textarea rows="10" label="Content" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large color="secondary" to="/">
              post
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PostPage'
}
</script>

<style>

</style>
