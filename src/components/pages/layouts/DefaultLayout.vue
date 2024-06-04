<script lang="ts" setup>
import { RouterView } from 'vue-router'
import DefaultLayoutHeader from '@/components/organisms/DefaultLayout__Header.vue'
import AtomLoading from '@/components/atoms/AtomLoading.vue'
import { usePredictionStore } from '@/stores/usePrediction.store'
const predictionStore = usePredictionStore()
</script>

<template>
  <div class="background">
    <AtomLoading v-show="predictionStore.loading" />
    <DefaultLayoutHeader v-show="!predictionStore.loading" />
    <main v-show="!predictionStore.loading" style="overflow-x: hidden">
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
