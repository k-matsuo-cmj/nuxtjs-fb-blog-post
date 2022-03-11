<template>
  <v-container>
    <v-row dense align="center">
      <v-col cols="6">
        <v-text-field v-model="word" label="Search Word" append-icon="mdi-magnify" autofocus clearable />
      </v-col>
      <v-col cols="2">
        <v-tooltip right>
          <template #activator="{ on }">
            <v-btn text small color="grey" @click="$store.dispatch('blogs/closeSearchBox')" v-on="on">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Close Search Box</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BlogSearchBox',
  computed: {
    word: {
      get () {
        return this.$store.state.blogs.searchWord
      },
      set (newValue) {
        this.$store.dispatch('blogs/doSearch', newValue)
      }
    }
  }
}
</script>

<style>

</style>
