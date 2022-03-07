<template>
  <v-card class="mb-1">
    <v-card-text class="pb-1">
      <div>
        <span>{{ created_datetime }} </span>
        <span class="font-weight-bold">{{ blog.user_name }}</span>
      </div>
      <div class="text-h6">
        {{ blog.title }}
      </div>
    </v-card-text>
    <v-card-actions dense class="pl-4">
      <v-btn icon x-small @click="open = !open">
        <v-icon>{{ open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn v-if="isMine" icon x-small color="blue" @click="remove">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="open">
        <v-card-text class="text-caption">
          {{ blog.content }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    blog: { type: Object, default: null }
  },
  data () {
    return {
      open: false
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
    }
  },
  methods: {
    remove () {
      if (confirm('Are you sure?')) {
        this.$store.dispatch('blogs/remove', this.blog.id)
      }
    }
  }
}
</script>

<style scoped>
  .v-card {
    width: 100%;
  }
</style>
