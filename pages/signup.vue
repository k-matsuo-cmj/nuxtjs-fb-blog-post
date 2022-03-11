<template>
  <v-row justify="center">
    <v-col cols="12" sm="10">
      <v-card>
        <v-toolbar dense dark color="success">
          <v-toolbar-title>Sign up</v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="$router.back()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="email" type="email" label="E-mail" :rules="rules.email" />
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              :rules="rules.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
            <v-text-field
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              label="Confirm Password"
              :rules="rules.confirmPassword"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showConfirmPassword = !showConfirmPassword"
            />
            <v-text-field v-model="userName" type="text" label="Your Name" :rules="rules.name" />
          </v-form>
        </v-card-text>
        <v-card-text class="error--text">
          {{ message }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn large color="success" @click="signup">
            register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SignupPage',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      userName: '',
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters',
          v => (v && v.match(/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))([a-zA-Z0-9])+$/)) ||
            'Password must contain at least 1 upper case letter, 1 lower case letter, and 1 numeric character.'
        ],
        confirmPassword: [
          v => (v === this.password) || 'Passwords does not match'
        ],
        name: [
          v => !!v || 'Name is required'
        ]
      },
      message: '',
      showPassword: false,
      showConfirmPassword: false
    }
  },
  methods: {
    signup () {
      if (this.$refs.form.validate()) {
        //
        this.$store.dispatch('signUp', {
          email: this.email,
          password: this.password,
          name: this.userName
        }).then(() => this.$router.push('/'))
          .catch(err => (this.message = err.message))
      }
    }
  }
}
</script>

<style>

</style>
