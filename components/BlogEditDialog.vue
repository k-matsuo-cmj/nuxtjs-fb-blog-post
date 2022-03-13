<template>
  <v-dialog v-model="show" :max-width="'640px'" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dense dark color="secondary">
        <v-toolbar-title>Edit Blog</v-toolbar-title>
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
        <v-btn large color="secondary" @click="update">
          update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { doc, serverTimestamp, updateDoc } from '@firebase/firestore'
export default {
  name: 'BlogEditDialog',
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
      this.title = this.blog.title
      this.content = this.blog.content
    },
    cancel () {
      this.show = false
    },
    update () {
      const docRef = doc(this.$db, 'blogs', this.blog.id)
      updateDoc(docRef, {
        title: this.title,
        content: this.content,
        updated_at: serverTimestamp()
      })
        .then(() => {
          this.show = false
          this.$store.dispatch('snackbar/show', 'Blog updated!')
        })
    }
  }
}
</script>

<style>

</style>
