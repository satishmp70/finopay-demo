<!-- src/pages/not-found.vue -->
<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.not-found {
  text-align: center;
  padding: 4rem;

  h1 {
    margin-bottom: 1rem;
  }

  a {
    color: #2563eb;
    text-decoration: underline;
  }
}
</style>
