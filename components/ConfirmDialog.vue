<template>
  <v-dialog v-model="show" :max-width="'520px'" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dense flat dark color="grey" class="text-subtitle-1">
        <v-toolbar-title v-text="title" />
      </v-toolbar>
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" class="d-flex justify-center">
            <p>{{ message }}</p>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn width="100px" @click.native="ok">
          ok
        </v-btn>
        <v-btn width="100px" @click.native="cancel">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  data () {
    return {
      show: false,
      title: '',
      message: '',
      resolve: null,
      reject: null
    }
  },
  methods: {
    open (title, message, options) {
      this.show = true
      this.title = title
      this.message = message
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    ok () {
      this.resolve(true)
      this.show = false
    },
    cancel () {
      this.resolve(false)
      this.show = false
    }
  }
}
</script>

<style>

</style>
