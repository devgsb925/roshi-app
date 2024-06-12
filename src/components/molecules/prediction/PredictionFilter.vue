<script lang="ts" setup>
import type { PredictionFilterType } from '@/model/prediction.type'
import TeamSelector from '@/components/molecules/TeamSelector.vue'
import { ref } from 'vue'
const filtersRef = ref<PredictionFilterType>({
  archive: undefined,
  onPoint: undefined,
  schedule: undefined,
  team: undefined,
  winner: undefined
})

const booleanOptions = [
  {
    label: 'True',
    value: true
  },
  {
    label: 'False',
    value: false
  }
]

const onChange = () => {
  emits('change', filtersRef.value)
}
const emits = defineEmits(['change'])
</script>

<template>
  <a-row :gutter="[8, 8]">
    <a-col :span="4">
      <TeamSelector
        placeholder="filter by team"
        style="width: 100%"
        @change="onChange"
        v-model:value="filtersRef.team"
      />
    </a-col>
    <a-col :span="4">
      <TeamSelector
        placeholder="filter by winner"
        style="width: 100%"
        @change="onChange"
        v-model:value="filtersRef.winner"
      />
    </a-col>
    <a-col :span="4">
      <a-date-picker
        style="width: 100%"
        v-model:value="filtersRef.schedule"
        @change="onChange"
        placeholder="filter by date"
      >
      </a-date-picker>
    </a-col>
    <a-col :span="4">
      <a-select
        style="width: 100%"
        placeholder="filter by onPoint"
        @change="onChange"
        v-model:value="filtersRef.onPoint"
        allowClear
        :options="booleanOptions"
      />
    </a-col>
    <a-col :span="4">
      <a-select
        style="width: 100%"
        placeholder="filter by archive"
        @change="onChange"
        v-model:value="filtersRef.archive"
        allowClear
        :options="booleanOptions"
      />
    </a-col>
  </a-row>
</template>

<style scoped></style>
