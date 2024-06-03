<script lang="ts" setup>
import AtomAvatar from '@/components/atoms/AtomAvatar.vue'
import type { PredictionTeamMatchProp } from '../../../model/prediction.type'
defineProps<{
  teamA: PredictionTeamMatchProp
  teamB: PredictionTeamMatchProp
}>()
</script>

<template>
  <div class="prediction-team-match">
    <!-- teamA -->
    <AtomAvatar :src="teamA.imageUrl" :title="teamA.title" />
    <!-- vs image -->
    <img src="@/assets/images/versus.svg" alt="versus" />
    <!-- teamB -->
    <AtomAvatar :src="teamB.imageUrl" :title="teamB.title" />
  </div>
</template>

<style scoped>
.prediction-team-match {
  display: flex;
  align-items: self-start;
  gap: 42px;
  justify-content: center;
}
</style>
