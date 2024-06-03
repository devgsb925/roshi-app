<script lang="ts" setup>
import AtomButton from '@/components/atoms/AtomButton.vue'

defineProps<{
  lists: any[]
}>()
</script>

<template>
  <div class="date-list">
    <!-- pre -->
    <div class="date-list__prev flex-center">Prev</div>

    <!-- list -->
    <!-- TODO KEY not from index that for test component -->
    <div class="date-list__lists">
      <AtomButton type="secondary" v-for="(list, idx) in lists" :key="idx"
        ><p>{{ idx + 1 }}/5</p></AtomButton
      >
    </div>
    <!-- next -->
    <div class="date-list__next flex-center">Next</div>
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
}
.date-list .date-list__next {
  grid-column: 12/13;
}

.date-list .date-list__lists {
  display: flex;
  grid-column: 2/12;
  overflow: hidden;
  gap: 8px;
  width: 100%;
}
</style>
