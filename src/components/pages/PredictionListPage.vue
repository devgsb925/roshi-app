<script lang="ts" setup>
import PredictionListTemplate from '@/components/templates/PredictionListTemplate.vue'
import { useTeamStore } from '@/stores/useTeam.store'
import { onMounted } from 'vue'
import { notification } from 'ant-design-vue'
const teamStore = useTeamStore()
onMounted(async () => {
  const message = await teamStore.onFetchTeams()
  if (message)
    notification.error({
      message: message
    })
})
</script>

<template>
  <PredictionListTemplate />
</template>

<style scoped></style>
