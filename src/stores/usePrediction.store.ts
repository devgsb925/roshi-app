import { predictionService } from '@/shared/services/prediction/prediction.service'
import type { Prediction } from '@/shared/services/prediction/predicton.type'
import { sleep } from '@/shared/utils/sleep'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePredictionStore = defineStore('counter', () => {
  const predictions = ref<Prediction[]>([])
  const loading = ref(false)

  const onFetchPredictions = async () => {
    loading.value = true
    await sleep(3000)
    predictions.value = await predictionService.getMany()
    loading.value = false
  }

  return { predictions, loading, onFetchPredictions }
})
