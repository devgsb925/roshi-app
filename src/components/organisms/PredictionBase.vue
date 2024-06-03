<script lang="ts" setup>
import PredictionHeader from '@/components/molecules/prediction/PredictionHeader.vue'
import BannerImage from '@/assets/mock/banner.png'
const mockData = {
  urlDummy: BannerImage,
  title: 'Dallas maverics vs Minessota Timberwolves',
  date: '29-May-2024',
  time: '07:30 AM'
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
  </section>
</template>

<style scoped></style>
