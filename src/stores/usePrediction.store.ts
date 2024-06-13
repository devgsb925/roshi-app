import type { PaginationResponse, PaginationTableType } from '@/model/pagination.type'
import type { PredictionModel, SchedulePrediction } from '@/model/prediction.type'
import { predictionPublicService } from '@/shared/services/api/prediction-public.service'
import { notification } from 'ant-design-vue'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

type Filter = {
  schedule: PaginationTableType
  prediction: {
    schedule: null | Date
  } & PaginationTableType
}

export const usePredictionStore = defineStore('counter', () => {
  const predictions = ref<PredictionModel[]>([])
  const schedules = ref<SchedulePrediction[]>([])
  const filters = ref<Filter>({
    schedule: {
      page: 1,
      pageSize: 4
    },
    prediction: {
      page: 1,
      pageSize: 10,
      schedule: null
    }
  })

  const pagination = ref<{
    prediction: PaginationResponse
    schedule: PaginationResponse
  }>({
    prediction: {
      total: 0,
      page: 0,
      perPage: 0,
      totalPages: 0
    },
    schedule: {
      total: 0,
      page: 0,
      perPage: 0,
      totalPages: 0
    }
  })

  const loading = ref(false)

  const onFetchPredictions = async () => {
    loading.value = true
    const { data, error, message } = await predictionPublicService.getAll(filters.value.prediction)
    if (error) return notification.error({ message })

    pagination.value.prediction.page = data.pagination.page
    pagination.value.prediction.perPage = data.pagination.perPage
    pagination.value.prediction.totalPages = data.pagination.totalPages
    pagination.value.prediction.total = data.pagination.total
    predictions.value = data.data

    loading.value = false
  }

  const onFetchSchedules = async () => {
    loading.value = true
    const { data, error, message } = await predictionPublicService.getSchedules(
      filters.value.schedule
    )
    if (error) return notification.error({ message })

    pagination.value.schedule.page = data.pagination.page
    pagination.value.schedule.perPage = data.pagination.perPage
    pagination.value.schedule.totalPages = data.pagination.totalPages
    pagination.value.schedule.total = data.pagination.total
    schedules.value = data.data
    loading.value = false
  }

  const onNextSchedule = async () => {
    //
  }
  const onPrevSchedule = async () => {
    //
  }

  return {
    onFetchSchedules,
    onNextSchedule,
    onPrevSchedule,
    predictions,
    loading,
    onFetchPredictions
  }
})
