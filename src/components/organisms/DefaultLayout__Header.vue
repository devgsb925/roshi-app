<script lang="ts" setup>
import DateList from '@/components/molecules/DateList.vue'
import LogoApp from '@/components/molecules/LogoApp.vue'
import { usePredictionStore } from '@/stores/usePrediction.store'
import { onBeforeMount, ref } from 'vue'
import type { SchedulePrediction } from '@/model/prediction.type'
const predictionStore = usePredictionStore()

const scheduleLabel = ref('')

const onChange = async (schedule: SchedulePrediction) => {
  if (schedule.label === scheduleLabel.value) return
  predictionStore.filterPredictionScheduleChange(schedule.value)
  scheduleLabel.value = schedule.label
}

onBeforeMount(async () => await predictionStore.onFetchSchedules())
</script>

<template>
  <header class="header-app">
    <LogoApp class="roshi-logo" />

    <DateList
      @prev="predictionStore.onPrevSchedule"
      @next="predictionStore.onNextSchedule"
      @change="onChange"
      :schedule="scheduleLabel"
      :lists="predictionStore.schedules"
    />
  </header>
</template>

<style scoped>
.header-app {
  padding: 10px 6px 0 6px;
  position: sticky;
  margin-bottom: 24px;
}

.header-app .roshi-logo {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
