<script lang="ts" setup>
import PredictionHeader from '@/components/molecules/prediction/PredictionHeader.vue'
import PredictionTeamMatch from '@/components/molecules/prediction/PredictionTeamMatch.vue'
import PredictionContent from '@/components/molecules/prediction/PredictionContent.vue'
import PredictionBreak from '@/components/molecules/prediction/PredictionBreak.vue'
import type { PredictionTeamMatchProp } from '@/model/prediction.type'
import { computed } from 'vue'
import type { PredictionModelNotNull } from '@/model/prediction.type'

const props = defineProps<{
  prediction: PredictionModelNotNull
}>()

const schedule = computed(() => {
  const schedule = new Date(props.prediction.schedule).toLocaleDateString()
  const [date, time] = schedule.split(' ')

  return {
    date: date ?? '',
    time: time ?? ''
  }
})

const teamMatching = computed(() => {
  const teamA: PredictionTeamMatchProp = {
    title: props.prediction.teamLeft,
    imageUrl: ''
  }
  const teamB: PredictionTeamMatchProp = {
    title: props.prediction.teamRight,
    imageUrl: ''
  }
  return {
    teamA,
    teamB,
    info: `${props.prediction.teamLeft} VS ${props.prediction.teamRight}`
  }
})
</script>

<template>
  <section v-if="prediction">
    <PredictionHeader
      :banner-url="prediction.poster"
      :title="teamMatching.info"
      :time="schedule.time"
      :date="schedule.date"
    />
    <PredictionTeamMatch :team-a="teamMatching.teamA" :team-b="teamMatching.teamB" />
    <PredictionContent :links="prediction.links" />
    <PredictionBreak />
  </section>
</template>

<style scoped></style>
