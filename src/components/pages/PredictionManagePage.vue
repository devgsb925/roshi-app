<script lang="ts" setup>
import PredictionManageTemplate from '@/components/templates/PredictionManageTemplate.vue'
import { onMounted } from 'vue'
import { useTeamStore } from '@/stores/useTeam.store'
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
  <PredictionManageTemplate />
</template>

<style scoped></style>
