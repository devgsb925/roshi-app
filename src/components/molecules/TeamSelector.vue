<script lang="ts" setup>
import { filterAntOption } from '@/shared/utils/filterOption'
import { computed } from 'vue'
import { useTeamStore } from '@/stores/useTeam.store'

const props = defineProps<{
  value: any
  placeholder?: string
  excludeTeam?: string | null
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
    <template v-for="team in teamStore.teams" :key="team">
      <a-select-option v-if="team !== excludeTeam" :value="team" :label="team"></a-select-option>
    </template>
  </a-select>
</template>

<style scoped></style>
