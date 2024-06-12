<script lang="ts" setup>
import PredictionForm from '@/components/molecules/PredictionForm.vue'
import type { PredictionModelForm } from '@/model/prediction.type'
import { predictionService } from '@/shared/services/api/prediction.service'
import { notification } from 'ant-design-vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()
const router = useRouter()

const id = route.params.id as string
const isCreate = route.name !== 'prediction.update'
const onFinish = async (form: PredictionModelForm) => {
  const result = await (isCreate
    ? predictionService.save(form)
    : predictionService.update(id, form))

  if (result.error) return notification.error({ message: result.message })

  router.push({
    name: 'prediction.page'
  })
  notification.success({ message: result.data })
}

const predictionFormRef = ref<InstanceType<typeof PredictionForm>>()
const onFetchPrediction = async () => {
  if (isCreate) return

  const result = await predictionService.getOne(id)

  if (result.error) return notification.error({ message: result.message })

  predictionFormRef.value?.onReplaceForm(result.data)
}
onMounted(async () => {
  await onFetchPrediction()
})
</script>

<template>
  <PredictionForm ref="predictionFormRef" :id="id" @finish="onFinish" />
</template>

<style scoped></style>
