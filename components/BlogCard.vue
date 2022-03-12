<template>
  <v-card ref="card" class="mb-1" color="yellow lighten-4" @click="toggle">
    <v-card-text class="pb-1">
      <div class="d-inline-block">
        <span>{{ created_datetime }} </span>
        <span class="pl-5 font-weight-bold">{{ blog.user_name }}</span>
      </div>
    </v-card-text>
    <v-card-actions dense class="pl-4">
      <div class="text-h5" :class="{'text-truncate':!open}">
        {{ blog.title }}
      </div>
      <v-spacer />
      <v-icon small>
        {{ open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      </v-icon>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="open">
        <v-card-text class="text-caption pre-wrap" v-text="blog.content" />
        <v-divider />
        <v-card-actions>
          <v-btn text x-small color="primary">
            <v-icon>mdi-message-reply-text</v-icon>
            <span>{{ commentCount }}</span>
          </v-btn>
          <v-btn
            v-show="$store.getters.isAuthenticated"
            icon
            small
            color="success"
            class="ml-6"
            @click.stop="addComment"
          >
            <v-icon>mdi-comment-edit</v-icon>
          </v-btn>
          <comment-dialog ref="addDialog" :blog="blog" />
          <v-spacer />
          <v-btn v-if="isMine" icon x-small color="secondary" @click.stop="remove">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <confirm-dialog ref="delDialog" />
        </v-card-actions>
        <v-card-text v-show="comments.length" class="text-caption pre-wrap pt-1">
          <v-list v-for="comment in comments" :key="comment.id" class="py-1" color="transparent">
            <v-list-item dense>
              <v-list-item-content class="py-0">
                {{ comment.comment }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import ConfirmDialog from './ConfirmDialog.vue'
export default {
  components: { ConfirmDialog },
  props: {
    blog: { type: Object, default: null }
  },
  data () {
    return {
      open: false,
      comments: []
    }
  },
  computed: {
    created_datetime: ({ $dateFns, blog }) => {
      if (blog && blog.created_at) {
        return $dateFns.format(blog.created_at.toDate(), 'yyyy-MM-dd HH:mm')
      } else {
        return ''
      }
    },
    isMine: ({ $store, blog }) => {
      return $store.getters.isAuthenticated &&
        $store.state.user.uid === blog.user_id
    },
    commentCount () {
      return this.comments.length
    }
  },
  mounted () {
    const commentsRef = collection(this.$db, 'blogs', this.blog.id, 'comments')
    const commentsQuery = query(commentsRef, orderBy('created_at', 'desc'))
    onSnapshot(commentsQuery, (querySnapshot) => {
      this.comments = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
  },
  methods: {
    async remove () {
      // if (confirm('Are you sure?')) {
      if (await this.$refs.delDialog.open(`Delete "${this.blog.title}"`, 'Are you sure?')) {
        this.$store.dispatch('blogs/remove', this.blog.id)
          .then(() => {
            this.$store.dispatch('snackbar/show', 'Blog deleted!')
          })
      }
    },
    addComment () {
      // this.$router.push({ path: '/comment', query: { id: this.blog.id } })
      this.$refs.addDialog.open()
    },
    toggle () {
      const open = this.open
      if (!open) { this.$emit('close') }
      this.open = !open
    },
    close () {
      this.open = false
    }
  }
}
</script>

<style scoped>
  .v-card {
    width: 100%;
  }
  .pre-wrap {
    white-space: pre-wrap;
  }
</style>
