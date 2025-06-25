<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-header">
        <h3>Send Money</h3>
        <button class="modal-close" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <slot>
          <!-- Default content: simple form -->
          <form class="modal-form">
            <label>Recipient</label>
            <input type="text" placeholder="Enter name or number" />
            <label>Amount</label>
            <input type="number" placeholder="₹0.00" />
            <button type="submit" class="modal-action">Send</button>
          </form>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  min-width: 340px;
  max-width: 95vw;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  position: relative;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}
.modal-close {
  background: none;
  border: none;
  font-size: 1.7rem;
  color: #888;
  cursor: pointer;
}
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  label {
    font-weight: 500;
    color: #222;
  }
  input {
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .modal-action {
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 0.5rem;
    &:hover {
      background: #1d4ed8;
    }
  }
}
</style>
