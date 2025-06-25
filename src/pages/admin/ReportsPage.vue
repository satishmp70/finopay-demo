<template>
  <div class="admin-reports">
    <h2>System Reports</h2>
    <p>Overview of system performance and logs.</p>

    <div class="report-card" v-for="report in reports" :key="report.id">
      <h3>{{ report.title }}</h3>
      <p>{{ report.summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const reports = [
  { id: 1, title: 'Usage Statistics', summary: 'Total 1,000 users this month.' },
  { id: 2, title: 'System Health', summary: 'All services operational.' },
  { id: 3, title: 'Security Logs', summary: 'No breaches detected.' },
]
</script>

<style scoped lang="scss">
.admin-reports {
  h2 {
    margin-bottom: 1rem;
  }

  .report-card {
    background: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;

    h3 {
      margin-bottom: 0.25rem;
    }

    p {
      color: #4b5563;
    }
  }
}
</style>
