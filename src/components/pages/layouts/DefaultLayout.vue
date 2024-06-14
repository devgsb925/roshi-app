<script lang="ts" setup>
import { RouterView } from 'vue-router'
import DefaultLayoutHeader from '@/components/organisms/DefaultLayout__Header.vue'
import AtomLoading from '@/components/atoms/AtomLoading.vue'
import { usePredictionStore } from '@/stores/usePrediction.store'
import { onMounted, onUnmounted, ref } from 'vue'
const predictionStore = usePredictionStore()

const isFixed = ref(false)
const handleScroll = () => {
  if (window.scrollY >= 111) {
    isFixed.value = true
  } else {
    isFixed.value = false
  }
}

// Register scroll event listener
onMounted(() => window.addEventListener('scroll', handleScroll))

// Cleanup scroll event listener
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="background">
    <AtomLoading v-show="predictionStore.loading" />
    <DefaultLayoutHeader
      :class="{
        fixed: isFixed
      }"
      v-show="!predictionStore.loading"
    />
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

.fixed {
  position: fixed;
  padding-bottom: 24px;
}
</style>
