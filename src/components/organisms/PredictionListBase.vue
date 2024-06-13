<script lang="ts" setup>
import { Modal, notification } from 'ant-design-vue'
import { reactive, onMounted, createVNode } from 'vue'
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
//
import PredictionTable from '@/components/molecules/prediction/PredictionTable.vue'
import { predictionService } from '@/shared/services/api/prediction.service'
import type { PredictionModel, PredictionFilterType } from '@/model/prediction.type'
import { type PaginationTableType } from '@/model/pagination.type'
import PredictionFilter from '../molecules/prediction/PredictionFilter.vue'

type StateType = {
  predictions: PredictionModel[]
  loading: boolean
  total: number
  filters: PredictionFilterType
}

const state = reactive<StateType>({
  predictions: [],
  loading: false,
  total: 0,
  filters: {
    page: 1,
    perPage: 10
  }
})
// #Section management
const onFetchPredictions = async (value?: PredictionFilterType) => {
  //
  const { data, error, message } = await predictionService.getAll({ ...state.filters, ...value })
  if (error) return notification.error({ message })

  state.predictions = data.data
  state.total = data.pagination.total
}

const onDelete = (id: string) => {
  Modal.confirm({
    title: 'Do you want to delete these prediction?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'When clicked the OK button, this dialog will be closed',
    async onOk() {
      const result = await predictionService.del(id)
      if (result.error) return notification.error({ message: result.message })

      await onFetchPredictions()
      notification.success({ message: result.data })
      return true
    }
  })
}

// end Manage

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

const onPaginateChanged = async (paginate: PaginationTableType) => {
  state.filters.page = paginate.page
  state.filters.perPage = paginate.perPage
  await onFetchPredictions()
}

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
    <PredictionFilter @change="onFetchPredictions" style="margin-bottom: 12px" />
    <div style="width: 100%; overflow-x: auto">
      <PredictionTable
        @paginate-change="onPaginateChanged"
        @edit="navigateToUpdate"
        @delete="onDelete"
        :total="state.total"
        :data="state.predictions"
      />
    </div>
  </div>
</template>

<style scoped></style>
