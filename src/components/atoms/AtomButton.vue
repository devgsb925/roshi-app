<script setup lang="ts">
withDefaults(
  defineProps<{
    type: 'primary' | 'secondary' | 'normal'
  }>(),
  {
    type: 'normal'
  }
)
defineOptions({
  inheritAttrs: true
})
</script>

<template>
  <button :class="`btn btn-${type}`">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  border-radius: 8px;

  padding: 4px 12px;
  min-width: 68px;
  height: 34px;
  cursor: pointer;
  /* test */
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
}

.btn-primary {
  border: 1px solid var(--color-white);
  background-color: var(--color-blue);
  color: var(--color-white);
}

.btn-secondary {
  border: 1px solid var(--color-blue);
}
</style>
