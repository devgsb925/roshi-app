<script lang="ts" setup>
import AtomButton from '@/components/atoms/AtomButton.vue'
import AtomIcon from '@/components/atoms/AtomIcon.vue'
import { Icons } from '@/shared/enums/icon.enum'
import type { SchedulePrediction } from '@/model/prediction.type'

defineProps<{
  lists: SchedulePrediction[]
  schedule: string
}>()
// const canPrev = computed(() => props.page - 1)
const emits = defineEmits(['prev', 'next', 'change'])
</script>

<template>
  <div class="date-list">
    <!-- pre -->
    <AtomIcon @click="emits('prev')" :icon="Icons.ArrowLeft" class="date-list__prev flex-center" />
    <div class="date-list__lists">
      <AtomButton
        @click="emits('change', list)"
        style="padding-top: 8px"
        :type="list.label === schedule ? 'primary' : 'secondary'"
        v-for="list in lists"
        :key="list.label"
        ><p style="font-size: 12px">{{ list.label }}</p></AtomButton
      >
    </div>
    <!-- next -->
    <AtomIcon @click="emits('next')" :icon="Icons.ArrowRight" class="date-list__next flex-center" />
  </div>
</template>

<style scoped>
.date-list {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  column-gap: 8px;
}

.date-list .date-list__prev {
  grid-column: 1;
  display: flex;
  justify-self: center;
}
.date-list .date-list__next {
  grid-column: 12/13;
  display: flex;
  justify-self: center;
}

.date-list .date-list__lists {
  display: flex;
  justify-content: center;
  grid-column: 2/12;
  overflow: hidden;
  gap: 8px;
  width: 100%;
}
</style>
