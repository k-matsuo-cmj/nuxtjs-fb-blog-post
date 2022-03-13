<template>
  <v-dialog v-model="show" :max-width="'640px'" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dense dark color="secondary">
        <v-toolbar-title>New Blog</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="cancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="mt-4">
        <v-form>
          <v-text-field v-model="title" autofocus outlined label="Blog Title" />
          <v-textarea v-model="content" rows="10" outlined label="Blog Content" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn large color="secondary" @click="postBlog">
          post
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { serverTimestamp } from '@firebase/firestore'
export default {
  name: 'BlogPostDialog',
  props: {
    blog: { type: Object, default: () => {} }
  },
  data () {
    return {
      show: false,
      title: '',
      content: ''
    }
  },
  methods: {
    open () {
      this.show = true
      this.title = ''
      this.content = ''
    },
    cancel () {
      this.show = false
    },
    postBlog () {
      const blog = {
        title: this.title,
        content: this.content,
        created_at: serverTimestamp(),
        user_id: this.$store.state.user.uid,
        user_name: this.$store.state.user.displayName
      }
      this.$store.dispatch('blogs/add', blog)
        .then(() => {
          this.show = false
          this.$store.dispatch('snackbar/show', 'Blog posted!')
        })
    }
  }
}
</script>

<style>

</style>
