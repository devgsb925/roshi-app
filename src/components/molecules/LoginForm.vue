<script lang="ts" setup>
import { reactive } from 'vue'

const formState = reactive({
  username: 'mack-vi',
  password: 'fAAiv53c8K5Y'
})

const emits = defineEmits(['finish'])
const onFinish = async () => emits('finish', formState)
</script>

<template>
  <a-card class="card">
    <a-form
      :model="formState"
      name="login-form"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
    >
      <h2>Sign-in</h2>
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="input username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" placeholder="*********" />
      </a-form-item>

      <a-form-item>
        <a-button style="width: 100%" type="primary" html-type="submit">Sign-in</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<style scoped>
.card {
  width: 380px;
}
.content {
  display: flex;
  height: 120px;

  gap: 8px;
  flex-direction: column;
}
.content .input-password {
  width: 100% !important;
}
</style>
