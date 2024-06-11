<script lang="ts" setup>
import LoginForm from '@/components/molecules/LoginForm.vue'
import { authService } from '@/shared/services/api/auth.service'
import { notification } from 'ant-design-vue'
const onFinish = async (values: any) => {
  const result = await authService.login(values)
  if (result.error)
    return notification.error({
      message: result.message
    })
}
</script>

<template>
  <LoginForm @finish="onFinish" />
</template>

<style scoped></style>
