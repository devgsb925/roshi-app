<script lang="ts" setup>
import AtomImage from '@/components/atoms/AtomImage.vue'
defineProps<{
  title: string
  src: string
}>()
</script>

<template>
  <div class="avatar">
    <AtomImage :src="src" :alt="title" />
    <p class="text-blue">{{ title }}</p>
  </div>
</template>

<style scoped>
.avatar {
  width: 60px;
  height: 60px;
  background-color: var(--color-white);
}
</style>
