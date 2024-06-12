<script lang="ts" setup>
import { notification } from 'ant-design-vue'
import { reactive, onMounted } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
//
import PredictionTable from '@/components/molecules/prediction/PredictionTable.vue'
import { predictionService } from '@/shared/services/api/prediction.service'
import { type PredictionModel } from '@/model/prediction.type'
import { useRouter } from 'vue-router'
import { type PaginationTableType } from '@/model/pagination.type'

type StateType = {
  predictions: PredictionModel[]
  loading: boolean
  total: number
  filters: {
    page: number
    pageSize: number
  }
}

const state = reactive<StateType>({
  predictions: [],
  loading: false,
  total: 0,
  filters: {
    page: 1,
    pageSize: 10
  }
})
const onFetchPredictions = async () => {
  //
  const { data, error, message } = await predictionService.getAll(state.filters)
  if (error) return notification.error({ message })

  state.predictions = data.data
  state.total = data.pagination.total
}

const onPaginateChanged = async (paginate: PaginationTableType) => {
  state.filters.page = paginate.page
  state.filters.pageSize = paginate.pageSize
  await onFetchPredictions()
}

const router = useRouter()
const navigateToCreate = () =>
  router.push({
    name: 'prediction.create'
  })

const navigateToUpdate = (id: string) =>
  router.push({
    params: {
      id
    },
    name: 'prediction.update'
  })

onMounted(async () => {
  await onFetchPredictions()
})
</script>

<template>
  <div>
    <div style="display: flex; justify-content: flex-end; margin-bottom: 10px">
      <a-button type="primary" @click="navigateToCreate">
        <template #icon> <PlusOutlined /> </template>
        New Prediction</a-button
      >
    </div>
    <div style="width: 100%; overflow-x: auto">
      <PredictionTable
        @paginate-change="onPaginateChanged"
        @edit="navigateToUpdate"
        :total="state.total"
        :data="state.predictions"
      />
    </div>
  </div>
</template>

<style scoped></style>
