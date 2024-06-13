<script lang="ts" setup>
import LoginForm from '@/components/molecules/LoginForm.vue'
//
import { authService } from '@/shared/services/api/auth.service'
import { notification } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
//
const loading = ref(false)
const router = useRouter()
const onFinish = async (values: any) => {
  loading.value = true
  const result = await authService.login(values)
  if (result.error)
    return notification.error({
      message: result.message
    })
  router.push({
    name: 'prediction.page'
  })
  loading.value = false
}
</script>

<template>
  <LoginForm :loading="loading" @finish="onFinish" />
</template>

<style scoped></style>
