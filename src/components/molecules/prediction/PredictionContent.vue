<script lang="ts" setup>
import AtomBreadcrumb from '@/components/atoms/AtomBreadcrumb.vue'

defineProps<{
  links: string[]
  reliability: number
  roshiPrediction: string
  oddDetail: string
}>()
</script>

<template>
  <div class="container prediction-content">
    <!-- Score -->
    <h4 class="prediction-content-score text-center">Score match will :</h4>
    <!-- TeamName -->
    <h1 class="prediction-content-team_name text-center text-gradient">{{ oddDetail }}</h1>
    <!-- Possibly -->
    <h4 class="prediction-content-possibly text-center">
      Reliability ({{ `${reliability}`.replace('.', ',') }}%)
    </h4>
    <!-- Link Views -->
    <h4 class="prediction-content-link_text text-center">Can be viewed at :</h4>
    <AtomBreadcrumb class="prediction-content-link_list" :links="links" />
    <!-- Description -->
    <h3 class="prediction-content-description">
      {{ roshiPrediction }}
    </h3>
  </div>
</template>

<style scoped>
.prediction-content .prediction-content-score {
  margin-top: 16px;
}
.prediction-content .prediction-content-team_name {
  margin-top: 8px;
}
.prediction-content .prediction-content-possibly {
  margin-top: 3.5px;
}
.prediction-content .prediction-content-link_text {
  margin-top: 19.5px;
}
.prediction-content .prediction-content-link_list {
  margin-top: 12px;
}

.prediction-content .prediction-content-description {
  margin-top: 16px;
  text-align: justify;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 22.4px;
}
</style>
