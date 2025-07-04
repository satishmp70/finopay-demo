<template>
  <div
    v-if="show"
    class="bank-modal-backdrop"
    @click.self="$emit('close')"
    aria-modal="true"
    aria-hidden="true"
  >
    <div class="bank-modal" @click.stop>
      <div class="bank-modal-header">
        <h3 class="bank-modal-title">Find Bank IFSC Code</h3>
        <button @click="$emit('close')" class="close-modal-btn">
          <svg class="close-modal-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="bank-modal-content">
        <div class="bank-search-container">
          <input
            type="text"
            v-model="searchModel"
            id="bank-search"
            placeholder="Search by bank name, branch, or IFSC code"
            class="bank-search-input"
          />
        </div>
        <div class="bank-list">
          <div
            v-for="bank in filteredBanks"
            :key="bank.ifsc"
            @click="$emit('select', bank)"
            class="bank-list-item"
          >
            <p class="bank-list-name">{{ bank.name }}</p>
            <p class="bank-list-ifsc">IFSC: {{ bank.ifsc }}</p>
            <p class="bank-list-branch">{{ bank.branch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
const props = defineProps<{
  show: boolean
  search: string
  banks: Array<{ ifsc: string; name: string; branch: string }>
}>()
const emit = defineEmits(['close', 'select', 'update:search'])
const filteredBanks = computed(() => {
  if (!props.search) return props.banks
  const search = props.search.toLowerCase()
  return props.banks.filter(
    (bank) =>
      bank.name.toLowerCase().includes(search) ||
      bank.ifsc.toLowerCase().includes(search) ||
      bank.branch.toLowerCase().includes(search),
  )
})
const searchModel = computed({
  get: () => props.search,
  set: (val: string) => emit('update:search', val),
})
</script>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.bank-modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.bank-modal {
  background-color: white;
  border-radius: 0.5rem;
  max-width: 32rem;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
}

.bank-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.bank-modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.close-modal-btn {
  color: #9ca3af;
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #6b7280;
    background-color: #f9fafb;
  }
}

.close-modal-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.bank-modal-content {
  padding: 1.5rem;
}

.bank-search-container {
  margin-bottom: 1rem;
}

.bank-search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #374151;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
}

.bank-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 15rem;
  overflow-y: auto;
}

.bank-list-item {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
}

.bank-list-name {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
}

.bank-list-ifsc {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.125rem;
}

.bank-list-branch {
  font-size: 0.75rem;
  color: #9ca3af;
}
</style>
