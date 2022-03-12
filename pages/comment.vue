<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar dense dark color="secondary">
            <v-toolbar-title>New Comment for ...</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="$router.back()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="blog.title" disabled label="Blog Title" />
              <v-text-field v-model="blog.user_name" disabled label="Author" />
              <v-textarea v-model="comment" rows="6" outlined autofocus label="Your Comment" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large color="secondary" @click="postComment">
              post
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { addDoc, collection, doc, getDoc, serverTimestamp } from '@firebase/firestore'
export default {
  name: 'CommentPage',
  data () {
    return {
      blogId: '',
      blog: {},
      comment: ''
    }
  },
  mounted () {
    this.blogId = this.$route.query.id
    const docRef = doc(this.$db, 'blogs', this.blogId)
    getDoc(docRef).then((doc) => {
      this.blog = doc.data()
    })
  },
  methods: {
    postComment () {
      const docRef = doc(this.$db, 'blogs', this.blogId)
      const commentsRef = collection(docRef, 'comments')
      addDoc(commentsRef, {
        comment: this.comment,
        created_at: serverTimestamp(),
        user_id: this.$store.state.user.uid,
        user_name: this.$store.state.user.displayName
      })
        .then(() => this.$store.dispatch('snackbar/show', 'Comment posted!'))
    }
  }
}
</script>

<style>

</style>
