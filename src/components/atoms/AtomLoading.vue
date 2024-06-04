<script lang="ts" setup>
import AtomImage from '@/components/atoms/AtomImage.vue'
</script>

<template>
  <AtomImage class="loading flex-center" src="/public/loading.gif" alt="roshi-app-loading" />
</template>

<style scoped>
.loading {
  width: 100%;
  height: 100dvh;
  object-fit: contain;
  object-position: center;
}
</style>
