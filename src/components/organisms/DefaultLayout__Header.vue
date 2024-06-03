<script lang="ts" setup>
import DateList from '@/components/molecules/DateList.vue'
</script>

<template>
  <header class="header-app">
    <div class="roshi-logo"><img src="@/assets/logo.png" alt="roshi-app" /></div>
    <DateList :lists="[1, 2, 3, 4]" />
  </header>
</template>

<style scoped>
.header-app {
  padding: 10px 6px 0 6px;
  position: sticky;
  margin-bottom: 24px;
}

.header-app .roshi-logo {
  display: flex;
  width: 99px;
  height: 50px;
  margin-bottom: 16px;
  justify-content: center;
  width: 100%;
}
</style>
