<script>
export default {
  data() {
    return {
      inputId: '',
      inputPassword: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      const adminId = import.meta.env.VITE_ADMIN_ID
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

      if (this.inputId === adminId && this.inputPassword === adminPassword) {
        sessionStorage.setItem('isLoggedIn', 'true')
        this.$router.push('/admin')
      } else {
        this.errorMessage = 'IDまたはパスワードが違います'
      }
    }
  }
}
</script>

<template>
  <div class="login-wrap">
    <div class="login-box">
      <h1>管理者ログイン</h1>
      <div class="login-form">
        <div>
          <label>管理者ID</label>
          <input type="text" v-model="inputId">
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" v-model="inputPassword">
        </div>
        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="login">ログイン</button>
      </div>
    </div>
  </div>
</template>