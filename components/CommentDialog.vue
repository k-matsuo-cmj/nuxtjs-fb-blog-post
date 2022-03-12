<template>
  <v-dialog v-model="show" :max-width="'520px'" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dense dark color="secondary">
        <v-toolbar-title>New Comment for ...</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="cancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="mt-4">
        <v-form>
          <v-text-field :value="blog.title" disabled label="Blog Title" />
          <v-textarea v-model="comment" rows="3" outlined autofocus label="Your Comment" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn large color="secondary" @click="postComment">
          post
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { addDoc, collection, doc, serverTimestamp } from '@firebase/firestore'
export default {
  name: 'CommentDialog',
  props: {
    blog: { type: Object, default: () => {} }
  },
  data () {
    return {
      show: false,
      comment: ''
    }
  },
  methods: {
    open () {
      this.show = true
      this.comment = ''
    },
    cancel () {
      this.show = false
    },
    postComment () {
      const docRef = doc(this.$db, 'blogs', this.blog.id)
      const commentsRef = collection(docRef, 'comments')
      addDoc(commentsRef, {
        comment: this.comment,
        created_at: serverTimestamp(),
        user_id: this.$store.state.user.uid,
        user_name: this.$store.state.user.displayName
      })
        .then(() => {
          this.show = false
          this.$store.dispatch('snackbar/show', 'Comment posted!')
        })
    }
  }
}
</script>

<style>

</style>
