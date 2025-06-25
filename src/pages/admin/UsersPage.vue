<template>
  <h1>Users</h1>
</template>

<script setup lang="ts">
// No need to import DefaultLayout
</script>

<style scoped lang="scss">
.admin-users {
  h2 {
    margin-bottom: 1rem;
  }

  .user-list {
    margin-top: 1rem;
    list-style: none;
    padding: 0;

    li {
      background: white;
      padding: 0.75rem 1rem;
      margin-bottom: 0.5rem;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
  }
}
</style>
