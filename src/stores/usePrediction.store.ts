import type { PaginationTableType } from '@/model/pagination.type'
import type { PredictionModelNotNull, SchedulePrediction } from '@/model/prediction.type'
import { predictionPublicService } from '@/shared/services/api/prediction-public.service'
import { notification } from 'ant-design-vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type Filter = {
  schedule: PaginationTableType
  prediction: {
    schedule: null | Date
  } & PaginationTableType
}

export const usePredictionStore = defineStore('counter', () => {
  const predictions = ref<PredictionModelNotNull[]>([])
  const schedules = ref<SchedulePrediction[]>([])
  const filters = ref<Filter>({
    schedule: {
      page: 1,
      perPage: 4
    },
    prediction: {
      page: 1,
      perPage: 10,
      schedule: null
    }
  })

  // const predictionTotalPage = ref(0)
  const scheduleTotalPage = ref(0)

  const loading = ref(false)

  const onFetchPredictions = async () => {
    loading.value = true
    const { data, error, message } = await predictionPublicService.getAll(filters.value.prediction)
    if (error) return notification.error({ message })

    // pagination.value.prediction.page = data.pagination.page
    // pagination.value.prediction.perPage = data.pagination.perPage
    // pagination.value.prediction.totalPages = data.pagination.totalPages
    // pagination.value.prediction.total = data.pagination.total
    predictions.value = data.data

    loading.value = false
  }

  const onFetchSchedules = async () => {
    const { data, error, message } = await predictionPublicService.getSchedules(
      filters.value.schedule
    )
    if (error) return notification.error({ message })

    scheduleTotalPage.value = data.pagination.totalPages
    schedules.value = data.data
  }

  const onNextSchedule = async () => {
    const hasNext = filters.value.schedule.page < scheduleTotalPage.value
    if (hasNext) {
      filters.value.schedule.page++
      await onFetchSchedules()
    }
  }
  const onPrevSchedule = async () => {
    if (filters.value.schedule.page > 1) {
      filters.value.schedule.page--
      await onFetchSchedules()
    }
  }

  const filterPredictionScheduleChange = async (value: Date) => {
    filters.value.prediction.schedule = value
    await onFetchPredictions()
  }
  return {
    onFetchSchedules,
    onNextSchedule,
    onPrevSchedule,
    predictions,
    loading,
    schedules,
    onFetchPredictions,
    filterPredictionScheduleChange
  }
})
