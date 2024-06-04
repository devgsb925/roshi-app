<script lang="ts" setup>
import ErrorImage from '@/assets/images/errorImage.jpg'
function errorImage(e: any) {
  e.target.src = ErrorImage
}
defineProps<{
  alt: string
  src: string
}>()
</script>

<template>
  <img :src="src" :alt="alt" srcset="" @error="errorImage" />
</template>

<style scoped></style>
