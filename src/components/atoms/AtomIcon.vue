<script lang="ts" setup>
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { computed } from 'vue'
import { Icons } from '@/shared/enums/icon.enum'

const props = defineProps<{
  icon: Icons
}>()

const selectIcon = (icon: Icons) => {
  switch (icon) {
    case Icons.ArrowRight:
      return ArrowRight
    case Icons.ArrowLeft:
      return ArrowRight
  }
}
const src = computed(() => selectIcon(props.icon))
</script>

<template>
  <img
    :src="src"
    :class="{
      'rotate-arrow': Icons.ArrowLeft === icon
    }"
    :alt="icon"
    srcset=""
  />
</template>

<style scoped>
.rotate-arrow {
  transform: rotate(180deg);
}
</style>
