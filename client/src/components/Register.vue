<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="nhred" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <form
          name="nhform"
          autocomplete="off">
        <v-text-field label="Email" v-model="email"></v-text-field>
        <br>
        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="nhred" @click="register">Register</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}

.nhred {
  background-color: #C2002F;
  color: white;
}

.nhinput {
  border-width: 1px;
  border: 1px;
  border-color: black;
}
</style>
