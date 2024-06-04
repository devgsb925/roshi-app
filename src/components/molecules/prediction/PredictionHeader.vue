<script lang="ts" setup>
import AtomImage from '@/components/atoms/AtomImage.vue'

defineProps({
  bannerUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="prediction">
    <AtomImage class="prediction-banner" :src="bannerUrl" :alt="title" />

    <!-- TITLE -->
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="prediction-dateTime">
        <!-- date -->
        <h4>{{ date }}</h4>
        <!-- time -->
        <h4>{{ time }} Time</h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prediction .prediction-banner {
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 221.063px;
  margin-bottom: 16px;
}
.prediction .prediction-dateTime {
  margin-top: 8px;
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
}
</style>
