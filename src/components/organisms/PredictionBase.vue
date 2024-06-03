<script lang="ts" setup>
import PredictionHeader from '@/components/molecules/prediction/PredictionHeader.vue'
import PredictionTeamMatch from '@/components/molecules/prediction/PredictionTeamMatch.vue'
import PredictionContent from '@/components/molecules/prediction/PredictionContent.vue'
import PredictionBreak from '@/components/molecules/prediction/PredictionBreak.vue'
//
import BannerImage from '@/assets/mock/banner.png'
import TeamLogoImage from '@/assets/mock/TeamLogo.png'
import type { PredictionTeamMatchProp } from '@/model/prediction.type'

const mockData = {
  urlDummy: BannerImage,
  title: 'Dallas maverics vs Minessota Timberwolves',
  date: '29-May-2024',
  time: '07:30 AM'
}
const teamMock: PredictionTeamMatchProp = {
  imageUrl: TeamLogoImage,
  title: 'Minessota Timberwolves'
}
</script>

<template>
  <section>
    <PredictionHeader
      :banner-url="mockData.urlDummy"
      :title="mockData.title"
      :time="mockData.time"
      :date="mockData.date"
    />
    <PredictionTeamMatch :team-a="teamMock" :team-b="teamMock" />
    <PredictionContent />
    <PredictionBreak />
  </section>
</template>

<style scoped></style>
