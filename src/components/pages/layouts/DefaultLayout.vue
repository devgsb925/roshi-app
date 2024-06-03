<script lang="ts" setup>
import { RouterView } from 'vue-router'
import DefaultLayoutHeader from '@/components/organisms/DefaultLayout__Header.vue'
</script>

<template>
  <div class="background">
    <DefaultLayoutHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.background {
  background-color: var(--color-background);
  color: white;
  min-height: 100dvh;
}
</style>
