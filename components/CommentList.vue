<template>
  <div>
    <v-card-text v-show="comments.length" class="text-caption pre-wrap pt-1">
      <v-list v-for="comment in pageList" :key="comment.id" class="py-1" color="transparent">
        <v-list-item dense>
          <v-list-item-content class="py-0">
            <v-container>
              <v-row>
                <v-col cols="8">
                  {{ comment.comment }}
                </v-col>
                <v-col cols="2" class="font-weight-bold">
                  {{ comment.user_name }}
                </v-col>
                <v-col cols="2">
                  {{ formatted_datetime(comment) }}
                </v-col>
              </v-row>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-show="length > 1" @click.stop>
        <v-pagination v-model="page" :length="length" circle />
      </div>
    </v-card-text>
  </div>
</template>

<script>
import { ja } from 'date-fns/locale'
const PAGE_ROWS = 3
export default {
  name: 'CommentList',
  props: {
    comments: { type: Array, default: () => [] }
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    length () {
      return Math.ceil(this.comments.length / PAGE_ROWS)
    },
    pageList () {
      return this.comments.slice(PAGE_ROWS * (this.page - 1), PAGE_ROWS * this.page)
    },
    formatted_datetime () {
      return (comment) => {
        if (comment && comment.created_at) {
          return this.$dateFns.formatDistanceToNow(comment.created_at.toDate(), { addSuffix: true, locale: ja })
        } else {
          return ''
        }
      }
    }
  },
  methods: {
    changePage () {
      this.commentList = this.comments
    }
  }
}
</script>

<style>

</style>
