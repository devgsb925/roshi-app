<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import AtomLoading from '@/components/atoms/AtomLoading.vue'
//
import PredictionBase from '@/components/organisms/PredictionBase.vue'
import { usePredictionStore } from '@/stores/usePrediction.store'
const predictionStore = usePredictionStore()

onBeforeMount(async () => await predictionStore.onFetchPredictions())
</script>

<template>
  <section>
    <div v-if="predictionStore.loading"><AtomLoading /></div>
    <PredictionBase
      v-for="(prediction, idx) in predictionStore.predictions"
      :class="{
        'not-first-prediction': idx
      }"
      :key="prediction.id"
      :prediction="prediction"
    />
  </section>
</template>

<style scoped>
.not-first-prediction {
  margin-top: 24px;
}
</style>
