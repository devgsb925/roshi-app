<script lang="ts" setup>
import AtomAvatar from '@/components/atoms/AtomAvatar.vue'
import type { PredictionTeamMatchProp } from '../../../model/prediction.type'
defineProps<{
  teamA: PredictionTeamMatchProp
  teamB: PredictionTeamMatchProp
}>()
</script>

<template>
  <div>
    <!-- teamA -->
    <AtomAvatar :src="teamA.imageUrl" :title="teamA.title" />
    <!-- vs image -->
    <!-- <img src="" alt="" srcset="" /> -->
    <!-- teamB -->
    <AtomAvatar :src="teamB.imageUrl" :title="teamB.title" />
  </div>
</template>

<style scoped></style>
