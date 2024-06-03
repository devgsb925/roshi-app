<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>
  <div class="background">
    <HeaderApp />
    <RouterView />
  </div>
</template>

<style scoped>
.background {
  background-color: var(--color-background);
  color: white;
}
</style>
