<script>
export default {
  methods: {
    logout() {
      sessionStorage.removeItem('isLoggedIn')
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <div class="admin-wrap">
    <header class="admin-header">
      <div class="admin-header-inner">
        <p class="admin-logo">
          <img src="/src/assets/images/logo_240x160.png" alt="CHOCOTA CAFE" width="120" height="80">
        </p>
        <p class="admin-title">管理画面</p>
        <button class="admin-logout" @click="logout">ログアウト</button>
      </div>
      <nav class="admin-nav">
        <ul>
          <li><a href="/admin">猫スタッフ管理</a></li>
        </ul>
      </nav>
    </header>

    <main class="admin-main">
      <RouterView />
    </main>
  </div>
</template>