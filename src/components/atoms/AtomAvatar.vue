<template>
  <div class="avatar">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'Avatar' }
})
</script>

<style scoped>
.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
