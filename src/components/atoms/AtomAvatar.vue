<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  title: string
  src: string
}>()

const titleNewLine = computed(() => props.title.replace(' ', '<br>'))
</script>

<template>
  <div class="avatar">
    <div class="avatar-image flex-center">
      <img :src="src" :alt="title" />
    </div>
    <p class="text-blue" style="text-align: center" v-html="titleNewLine"></p>
  </div>
</template>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.avatar .avatar-image {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 100%;
  padding: 12px;
  background-color: var(--color-white);
}

.avatar .avatar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
