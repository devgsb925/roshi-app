<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  links: string[]
}>()
</script>

<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(link, index) in links" :key="index" class="breadcrumb-item">
        <a :href="link" class="breadcrumb-link text-normal"> Link 0{{ index + 1 }} </a>
        <span v-if="index !== links.length - 1" class="breadcrumb-separator text-normal">/</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-blue);
}

.breadcrumb ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  text-decoration: none;
  color: var(--color-blue);
  padding: 0.5rem;
  transition: color 0.3s;
}

.breadcrumb-text {
  padding: 0.5rem;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: #374151;
}
</style>
