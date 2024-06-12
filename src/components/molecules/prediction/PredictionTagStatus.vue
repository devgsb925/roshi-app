<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  status: boolean
}>()
const color = computed(() => (props.status ? 'green' : 'red'))
</script>

<template>
  <a-tag :color="color">{{ `${status}`.toUpperCase() }}</a-tag>
</template>

<style scoped></style>
