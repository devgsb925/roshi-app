<script lang="ts" setup>
import PredictionHeader from '@/components/molecules/prediction/PredictionHeader.vue'
import PredictionTeamMatch from '@/components/molecules/prediction/PredictionTeamMatch.vue'
import PredictionContent from '@/components/molecules/prediction/PredictionContent.vue'
import PredictionBreak from '@/components/molecules/prediction/PredictionBreak.vue'
//TODO delete  mock just for mocking
import TeamLogoImage from '@/assets/mock/TeamLogo.png'
import type { PredictionTeamMatchProp } from '@/model/prediction.type'
import type { Prediction } from '@/shared/services/prediction/predicton.type'
import { computed } from 'vue'

const props = defineProps<{
  prediction: Prediction
}>()

const schedule = computed(() => {
  const [date, time] = props.prediction.schedule.split(' ')

  return {
    date: date ?? '',
    time: time ?? ''
  }
})

const teamMatching = computed(() => {
  const [titleA, titleB] = props.prediction.matchInfo.split(' VS ')
  const teamA: PredictionTeamMatchProp = {
    title: titleA,
    // TODO team LOGO
    imageUrl: TeamLogoImage
  }
  const teamB: PredictionTeamMatchProp = {
    title: titleB,
    // TODO team LOGO
    imageUrl: TeamLogoImage
  }
  return {
    teamA,
    teamB
  }
})
const links = computed(() => [
  props.prediction.link1,
  props.prediction.link2,
  props.prediction.link3
])
</script>

<template>
  <section v-if="prediction">
    <PredictionHeader
      :banner-url="prediction.poster"
      :title="prediction.matchInfo"
      :time="schedule.time"
      :date="schedule.date"
    />
    <PredictionTeamMatch :team-a="teamMatching.teamA" :team-b="teamMatching.teamB" />
    <PredictionContent :links />
    <PredictionBreak />
  </section>
</template>

<style scoped></style>
