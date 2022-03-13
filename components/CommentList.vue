<template>
  <div>
    <v-card-text v-show="comments.length" class="text-caption pre-wrap pt-1 comment-box">
      <v-list v-for="comment in pageList" :key="comment.id" class="py-1 comment-list" color="transparent">
        <v-list-item dense class="comment-item">
          <v-list-item-content class="pb-0">
            <v-container>
              <v-row>
                <v-col cols="12" md="8" class="pa-1">
                  {{ comment.comment }}
                </v-col>
                <v-col cols="6" md="2" class="font-weight-bold">
                  {{ comment.user_name }}
                </v-col>
                <v-col cols="6" md="2">
                  {{ formatted_datetime(comment) }}
                </v-col>
              </v-row>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-show="length > 1" @click.stop>
        <v-pagination v-model="page" :length="length" circle class="pagination" />
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
  .comment-box>.comment-list:not(:first-child) .comment-item {
    border-top: 1px dotted #BBBBBB;
  }
  .v-pagination__navigation, .v-pagination__item {
    height: 24px;
    font-size: .75rem;
  }
</style>
