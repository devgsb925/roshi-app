<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' }
})
</script>
<template>
  <img :src="src" :alt="alt" class="image" />
</template>

<style scoped>
.image {
  max-width: 100%;
  height: auto;
}
</style>
