<script lang="ts" setup>
import { filterAntOption } from '@/shared/utils/filterOption'
import { computed } from 'vue'
import { useTeamStore } from '@/stores/useTeam.store'

const props = defineProps<{
  value: any
  placeholder?: string
}>()

const emits = defineEmits(['update:value'])

const val = computed({
  get: () => props.value,
  set: (newVal) => emits('update:value', newVal)
})

const teamStore = useTeamStore()
</script>

<template>
  <a-select
    :filter-option="filterAntOption"
    show-search
    allowClear
    style="width: 100%"
    v-model:value="val"
    :placeholder="placeholder"
  >
    <a-select-option
      v-for="team in teamStore.teams"
      :key="team"
      :value="team"
      :label="team"
    ></a-select-option>
  </a-select>
</template>

<style scoped></style>
