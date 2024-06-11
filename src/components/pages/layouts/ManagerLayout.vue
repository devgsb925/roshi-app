<script lang="ts" setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()

const logout = () => router.push('/')
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="header">
        <div class="logo"><img src="@/assets/logo.png" /></div>
        <a-button @click="logout">Logout</a-button>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Prediction</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <RouterView></RouterView>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
}
.header .logo {
  display: flex;
  width: 90px;
  height: 40px;
  color: white;
}
.site-layout-content {
  min-height: 100dvh;
  padding: 24px;
  background: #fff;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
