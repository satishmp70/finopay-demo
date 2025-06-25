<template>
  <div class="transfer-sidebar">
    <!-- Quick Transfer -->
    <div class="sidebar-box">
      <h3 class="sidebar-title">Quick Transfer</h3>
      <div class="quick-transfer-list">
        <button
          v-for="contact in quickContacts"
          :key="contact.mobile"
          @click="$emit('quick-transfer', contact)"
          class="quick-transfer-btn"
        >
          <div class="quick-transfer-avatar" :class="contact.bgClass">
            <span :class="contact.textClass">{{ contact.initials }}</span>
          </div>
          <div class="quick-transfer-info">
            <p class="quick-transfer-name">{{ contact.name }}</p>
            <p class="quick-transfer-mobile">{{ contact.mobile }}</p>
          </div>
        </button>
      </div>
    </div>
    <!-- Recent Transfers -->
    <div class="sidebar-box">
      <h3 class="sidebar-title">Recent Transfers</h3>
      <div class="recent-transfers-list">
        <div v-for="transfer in recentTransfers" :key="transfer.id" class="recent-transfer-item">
          <div class="recent-transfer-left">
            <div :class="transfer.iconBg" class="recent-transfer-icon">
              <svg
                class="recent-transfer-svg"
                :class="transfer.iconColor"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
                />
              </svg>
            </div>
            <div>
              <p class="recent-transfer-name">{{ transfer.name }}</p>
              <p class="recent-transfer-time">{{ transfer.time }}</p>
            </div>
          </div>
          <div class="recent-transfer-right">
            <p class="recent-transfer-amount">₹{{ transfer.amount.toLocaleString() }}</p>
            <p :class="transfer.statusClass" class="recent-transfer-status">
              {{ transfer.status }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Transfer Limits -->
    <div class="sidebar-box">
      <h3 class="sidebar-title">Transfer Limits</h3>
      <div class="transfer-limits-list">
        <div class="transfer-limit-row">
          <span class="transfer-limit-label">Daily Limit</span>
          <span class="transfer-limit-value">₹2,00,000</span>
        </div>
        <div class="transfer-limit-row">
          <span class="transfer-limit-label">Used Today</span>
          <span class="transfer-limit-value">₹7,500</span>
        </div>
        <div class="transfer-limit-row">
          <span class="transfer-limit-label">Remaining</span>
          <span class="transfer-limit-remaining">₹1,92,500</span>
        </div>
        <div class="transfer-limit-bar">
          <div class="transfer-limit-progress" style="width: 3.75%"></div>
        </div>
      </div>
    </div>
    <!-- Support -->
    <div class="sidebar-box">
      <h3 class="sidebar-title">Need Help?</h3>
      <p class="support-desc">Having trouble with money transfer?</p>
      <div class="support-buttons">
        <button class="support-btn">
          <svg class="support-btn-icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          Call Support
        </button>
        <button class="support-btn">
          <svg class="support-btn-icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
          FAQ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  quickContacts: Array,
  recentTransfers: Array,
})
const emit = defineEmits(['quick-transfer'])
</script>

<style scoped lang="scss">
@import '@/assets/base.scss';
</style>
