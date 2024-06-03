<script lang="ts" setup></script>

<template>
  <header class="header-app">
    <div class="roshi-logo">ROSHI LOGO</div>
    <div>Menu</div>
  </header>
</template>

<style scoped>
.header-app {
  display: grid;
  padding: 10px 6px 0 6px;
  grid-template-columns: repeat(12, 1fr);
  height: 50px;
}
.header-app .roshi-logo {
  grid-column: 1/12;
  text-align: center;
  /* justify-content: center; */
  width: 100%;
}
</style>
