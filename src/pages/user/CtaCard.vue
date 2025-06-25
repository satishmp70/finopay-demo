<template>
  <div class="cta">
    <div class="icon">{{ icon }}</div>
    <div class="info">
      <h4>{{ title }}</h4>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ icon: string; title: string; subtitle: string }>()
</script>

<style scoped lang="scss">
.cta {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  .icon {
    font-size: 1.75rem;
  }

  h4 {
    margin: 0;
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: #6b7280;
  }
}

@media (max-width: 768px) {
  .cta-card {
    padding: 1rem 0.75rem;
    font-size: 0.98rem;
  }
}
@media (max-width: 480px) {
  .cta-card {
    padding: 0.75rem 0.5rem;
    font-size: 0.95rem;
  }
}
</style>
