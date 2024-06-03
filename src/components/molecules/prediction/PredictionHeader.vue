<script lang="ts" setup>
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
  <div class="prediction">
    <img class="prediction-banner" :src="bannerUrl" :alt="title" />
    <!-- TITLE -->
    <h2>{{ title }}</h2>
    <div class="prediction-dateTime">
      <!-- date -->
      <h4>{{ date }}</h4>
      <!-- time -->
      <h4>{{ time }}</h4>
    </div>
  </div>
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
  justify-content: space-between;
}
</style>
