<script lang="ts" setup>
import DateList from '@/components/molecules/DateList.vue'
import LogoApp from '@/components/molecules/LogoApp.vue'
</script>

<template>
  <header class="header-app">
    <LogoApp class="roshi-logo" />
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
  justify-content: center;
  width: 100%;
}
</style>
