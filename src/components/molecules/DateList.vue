<script lang="ts" setup>
import AtomButton from '@/components/atoms/AtomButton.vue'
import AtomIcon from '@/components/atoms/AtomIcon.vue'
import { Icons } from '@/shared/enums/icon.enum'

defineProps<{
  lists: any[]
}>()
</script>

<template>
  <div class="date-list">
    <!-- pre -->
    <AtomIcon :icon="Icons.ArrowLeft" class="date-list__prev flex-center" />

    <!-- list -->
    <!-- TODO KEY not from index that for test component -->
    <div class="date-list__lists">
      <AtomButton
        :type="idx !== 2 ? 'secondary' : 'primary'"
        v-for="(list, idx) in lists"
        :key="idx"
        ><p style="font-size: 12px">{{ idx + 1 }}/5</p></AtomButton
      >
    </div>
    <!-- next -->
    <AtomIcon :icon="Icons.ArrowRight" class="date-list__next flex-center" />
  </div>
</template>

<style scoped>
.date-list {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  column-gap: 8px;
}

.date-list .date-list__prev {
  grid-column: 1;
  display: flex;
  justify-self: center;
}
.date-list .date-list__next {
  grid-column: 12/13;
  display: flex;
  justify-self: center;
}

.date-list .date-list__lists {
  display: flex;
  justify-content: center;
  grid-column: 2/12;
  overflow: hidden;
  gap: 8px;
  width: 100%;
}
</style>
