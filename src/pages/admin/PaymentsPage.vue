<template>
  <section class="payment-section">
    <!-- Header -->
    <div class="payment-header">
      <div>
        <h1 class="payment-title">Payments (Admin)</h1>
        <p class="payment-desc">Manage, send, and review all payments as an admin</p>
      </div>
      <div class="payment-header-actions">
        <button class="payment-btn primary" @click="showSendMoney = true">Send Money</button>
        <button class="payment-btn outline" @click="showRequest = true">Request Payment</button>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="payment-quick-grid">
      <div class="quick-card send" @click="showSendMoney = true">
        <div class="quick-icon blue">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div>
          <h3 class="quick-title">Send Money</h3>
          <p class="quick-desc">Transfer funds to users or vendors</p>
        </div>
      </div>
      <div class="quick-card request" @click="showRequest = true">
        <div class="quick-icon green">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div>
          <h3 class="quick-title">Request Payment</h3>
          <p class="quick-desc">Request funds from users or partners</p>
        </div>
      </div>
      <div class="quick-card bills" @click="showPayBills = true">
        <div class="quick-icon purple">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </div>
        <div>
          <h3 class="quick-title">Pay Bills</h3>
          <p class="quick-desc">Settle company utilities & subscriptions</p>
        </div>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="payment-main-grid">
      <!-- Recent Payments -->
      <div class="payment-card recent-payments">
        <div class="card-header">
          <h3>Recent Payments</h3>
          <button class="card-link">View All</button>
        </div>
        <div class="recent-list">
          <div v-for="p in recentPayments" :key="p.id" class="recent-item">
            <div class="recent-left">
              <img v-if="p.avatar" :src="p.avatar" class="recent-avatar" />
              <div
                v-else-if="p.fallback && p.fallbackClass"
                class="recent-avatar fallback"
                :class="p.fallbackClass"
              >
                {{ p.fallback }}
              </div>
              <div>
                <p class="recent-name">{{ p.name }}</p>
                <p class="recent-desc">{{ p.desc }}</p>
              </div>
            </div>
            <div class="recent-right">
              <p :class="p.amount > 0 ? 'recent-amount green' : 'recent-amount red'">
                {{ p.amount > 0 ? '+' : '' }}₹{{ Math.abs(p.amount).toLocaleString() }}
              </p>
              <p class="recent-time">{{ p.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Payment Methods -->
      <div class="payment-card payment-methods">
        <div class="card-header">
          <h3>Payment Methods</h3>
          <button class="card-link" @click="showAddPayment = true">Add New</button>
        </div>
        <div class="methods-list">
          <div v-for="m in paymentMethods" :key="m.id" class="method-item">
            <div class="method-left">
              <div class="method-icon" :class="m.bgClass">{{ m.type }}</div>
              <div>
                <p class="method-title">{{ m.label }}</p>
                <p class="method-desc">{{ m.desc }}</p>
              </div>
            </div>
            <div class="method-right">
              <span v-if="m.primary" class="method-badge">Primary</span>
              <button class="method-action">
                <svg viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button class="method-add" @click="showAddPayment = true">
            <svg viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Add Payment Method</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Pending Requests -->
    <div class="payment-card pending-requests">
      <div class="card-header">
        <h3>Pending Requests</h3>
        <span class="pending-badge">{{ pendingRequests.length }} pending</span>
      </div>
      <div class="pending-list">
        <div v-for="r in pendingRequests" :key="r.id" class="pending-item">
          <div class="pending-left">
            <img v-if="r.avatar" :src="r.avatar" class="pending-avatar" />
            <div
              v-else-if="r.fallback && r.fallbackClass"
              class="pending-avatar fallback"
              :class="r.fallbackClass"
            >
              {{ r.fallback }}
            </div>
            <div>
              <p class="pending-name">{{ r.name }}</p>
              <p class="pending-desc">{{ r.desc }}</p>
              <p class="pending-time">{{ r.time }}</p>
            </div>
          </div>
          <div class="pending-right">
            <span class="pending-amount">₹{{ r.amount }}</span>
            <div class="pending-actions">
              <button class="pending-pay">Pay</button>
              <button class="pending-decline">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <SendMoneyModal v-if="showSendMoney" @close="showSendMoney = false" />
    <RequestPaymentModal v-if="showRequest" @close="showRequest = false" />
    <PayBillsModal v-if="showPayBills" @close="showPayBills = false" />
    <AddPaymentMethodModal v-if="showAddPayment" @close="showAddPayment = false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SendMoneyModal from '../user/SendMoneyModal.vue'
import RequestPaymentModal from '../user/RequestPaymentModal.vue'
import PayBillsModal from '../user/PayBillsModal.vue'
import AddPaymentMethodModal from '../user/AddPaymentMethodModal.vue'

const showSendMoney = ref(false)
const showRequest = ref(false)
const showPayBills = ref(false)
const showAddPayment = ref(false)

const recentPayments: Array<{
  id: number
  name: string
  desc: string
  amount: number
  time: string
  avatar?: string
  fallback?: string
  fallbackClass?: string
}> = [
  {
    id: 1,
    name: 'Vendor Payout',
    desc: 'Monthly vendor payment',
    amount: -25000,
    time: '1 hour ago',
    fallback: 'VP',
    fallbackClass: 'blue',
  },
  {
    id: 2,
    name: 'User Refund',
    desc: 'Refund to user #1234',
    amount: -1200,
    time: 'Today',
    fallback: 'UR',
    fallbackClass: 'green',
  },
  {
    id: 3,
    name: 'Corporate Bill',
    desc: 'Internet subscription',
    amount: -4500,
    time: 'Yesterday',
    fallback: 'CB',
    fallbackClass: 'purple',
  },
  {
    id: 4,
    name: 'Received Payment',
    desc: 'From partner org',
    amount: 50000,
    time: '2 days ago',
    avatar: 'https://avatar.iran.liara.run/public/45',
    fallback: 'RP',
    fallbackClass: 'blue',
  },
]
const paymentMethods = [
  {
    id: 1,
    type: 'BANK',
    label: 'ICICI Bank ••••1234',
    desc: 'Corporate Account',
    bgClass: 'bank',
    primary: true,
  },
  { id: 2, type: 'VISA', label: '•••• •••• •••• 5678', desc: 'Admin Card', bgClass: 'visa' },
  { id: 3, type: 'UPI', label: 'admin@slenpay', desc: 'UPI Handle', bgClass: 'upi' },
]
const pendingRequests = [
  {
    id: 1,
    name: 'John Doe',
    desc: 'Expense reimbursement',
    amount: 3200,
    time: '3 hours ago',
    avatar: 'https://avatar.iran.liara.run/public/12',
    fallback: 'JD',
    fallbackClass: 'blue',
  },
  {
    id: 2,
    name: 'Vendor X',
    desc: 'Invoice #567',
    amount: 15000,
    time: 'Yesterday',
    fallback: 'VX',
    fallbackClass: 'green',
  },
]
</script>

<style scoped lang="scss">
@import '../user/PaymentPage.vue';
</style>
