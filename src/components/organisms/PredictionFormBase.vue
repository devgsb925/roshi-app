<script lang="ts" setup>
import PredictionForm from '@/components/molecules/PredictionForm.vue'
import type { PredictionModelForm } from '@/model/prediction.type'
import { predictionService } from '@/shared/services/api/prediction.service'
import { notification } from 'ant-design-vue'

const onFinish = async (form: PredictionModelForm) => {
  const result = await predictionService.save(form)
  if (result.error) return notification.error({ message: result.message })

  notification.success({ message: result.data })
}
</script>

<template>
  <PredictionForm @finish="onFinish" />
</template>

<style scoped></style>
