<template>
  <section class="payment-section">
    <!-- Header -->
    <div class="payment-header">
      <div>
        <h1 class="payment-title">Payments</h1>
        <p class="payment-desc">Send money, request payments, and manage your payment methods</p>
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
          <p class="quick-desc">Transfer funds to anyone instantly</p>
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
          <p class="quick-desc">Ask for money from contacts</p>
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
          <p class="quick-desc">Utilities, subscriptions & more</p>
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
        <div v-for="r in pendingRequestsWithFallback" :key="r.id" class="pending-item">
          <div class="pending-left">
            <img v-if="r.avatar" :src="r.avatar" class="pending-avatar" />
            <div v-else class="pending-avatar fallback" :class="r.fallbackClass">
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
import { ref, computed } from 'vue'
import SendMoneyModal from './SendMoneyModal.vue'
import RequestPaymentModal from './RequestPaymentModal.vue'
import PayBillsModal from './PayBillsModal.vue'
import AddPaymentMethodModal from './AddPaymentMethodModal.vue'

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
    name: 'Sarah Johnson',
    desc: 'Dinner split payment',
    amount: -1250,
    time: '2 hours ago',
    avatar: 'https://avatar.iran.liara.run/public/12',
    fallback: 'SJ',
    fallbackClass: 'blue',
  },
  {
    id: 2,
    name: 'Mike Chen',
    desc: 'Freelance payment',
    amount: 15000,
    time: 'Yesterday',
    avatar: 'https://avatar.iran.liara.run/public/25',
    fallback: 'MC',
    fallbackClass: 'green',
  },
  {
    id: 3,
    name: 'Electricity Bill',
    desc: 'Monthly utility payment',
    amount: -2450,
    time: '3 days ago',
    fallback: 'EB',
    fallbackClass: 'blue',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    desc: 'Rent contribution',
    amount: -8500,
    time: '1 week ago',
    avatar: 'https://avatar.iran.liara.run/public/38',
    fallback: 'EW',
    fallbackClass: 'purple',
  },
]
const paymentMethods = [
  {
    id: 1,
    type: 'VISA',
    label: '•••• •••• •••• 4532',
    desc: 'Expires 12/26',
    bgClass: 'visa',
    primary: true,
  },
  { id: 2, type: 'MC', label: '•••• •••• •••• 8901', desc: 'Expires 08/25', bgClass: 'mc' },
  { id: 3, type: 'BANK', label: 'HDFC Bank ••••2847', desc: 'Savings Account', bgClass: 'bank' },
]
const pendingRequests = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    desc: 'Movie tickets reimbursement',
    amount: 800,
    time: '2 days ago',
    avatar: 'https://avatar.iran.liara.run/public/67',
    fallback: undefined,
    fallbackClass: '',
  },
  {
    id: 2,
    name: 'Lisa Park',
    desc: 'Lunch bill split',
    amount: 450,
    time: '1 day ago',
    avatar: 'https://avatar.iran.liara.run/public/89',
    fallback: undefined,
    fallbackClass: '',
  },
  {
    id: 3,
    name: 'David Kim',
    desc: 'Uber ride share',
    amount: 320,
    time: '3 hours ago',
    avatar: 'https://avatar.iran.liara.run/public/34',
    fallback: undefined,
    fallbackClass: '',
  },
]

const pendingRequestsWithFallback = computed(() =>
  pendingRequests.map((r) => {
    if (r.avatar) return r
    // fallback: initials from name
    const initials = r.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
    // fallbackClass: pick a color based on hash of name
    const colors = ['blue', 'green', 'purple', 'orange', 'red']
    let hash = 0
    for (let i = 0; i < r.name.length; i++) hash += r.name.charCodeAt(i)
    const fallbackClass = colors[hash % colors.length]
    return { ...r, fallback: initials, fallbackClass }
  }),
)
</script>

<style scoped lang="scss">
.payment-section {
  padding: 2rem 2.5vw;
  background: #f9fafb;
  min-height: 100vh;
}
.payment-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
  min-width: 0;
}
.payment-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
}
.payment-desc {
  color: #6b7280;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.payment-header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.payment-btn {
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s;
  &.primary {
    background: #2563eb;
    color: #fff;
    box-shadow: 0 2px 8px 0 rgba(60, 72, 88, 0.1);
    &:hover {
      background: #1d4ed8;
    }
  }
  &.outline {
    background: #fff;
    color: #2563eb;
    border: 1.5px solid #2563eb;
    &:hover {
      background: #f3f6fa;
    }
  }
}
.payment-quick-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.quick-card {
  background: #fff;
  border-radius: 1.1rem;
  border: 1px solid #e5e7eb;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(60, 72, 88, 0.13);
  }
  .quick-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &.blue {
      background: #dbeafe;
      svg {
        color: #2563eb;
      }
    }
    &.green {
      background: #d1fae5;
      svg {
        color: #059669;
      }
    }
    &.purple {
      background: #ede9fe;
      svg {
        color: #7c3aed;
      }
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
    }
  }
  .quick-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 0.2rem;
  }
  .quick-desc {
    color: #6b7280;
    font-size: 0.98rem;
  }
}
.payment-main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
}
.payment-card {
  background: #fff;
  border-radius: 1.1rem;
  border: 1px solid #e5e7eb;
  padding: 2rem 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 0;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111827;
  }
}
.card-link {
  color: #2563eb;
  background: none;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #1d4ed8;
  }
}
.recent-list,
.methods-list,
.pending-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.recent-item,
.pending-item,
.method-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9fafb;
  border-radius: 0.7rem;
  padding: 1rem 1.2rem;
}
.recent-left,
.pending-left,
.method-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.recent-avatar,
.pending-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.7rem;
}
.recent-avatar.fallback,
.pending-avatar.fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  background: #2563eb;
}
.recent-avatar.fallback.blue {
  background: #2563eb;
}
.recent-avatar.fallback.green {
  background: #059669;
}
.recent-avatar.fallback.purple {
  background: #7c3aed;
}
.method-icon {
  width: 3rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  margin-right: 0.7rem;
}
.method-icon.visa {
  background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
}
.method-icon.mc {
  background: linear-gradient(90deg, #dc2626 0%, #f59e42 100%);
}
.method-icon.bank {
  background: #374151;
}
.method-title {
  font-weight: 600;
  color: #1a237e;
  font-size: 1.05rem;
}
.method-desc {
  color: #6b7280;
  font-size: 0.98rem;
}
.method-badge {
  background: #d1fae5;
  color: #059669;
  font-size: 0.85rem;
  border-radius: 0.4rem;
  padding: 0.2rem 0.7rem;
  font-weight: 600;
  margin-right: 0.5rem;
}
.method-action {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 0.4rem;
  transition: background 0.18s;
  &:hover {
    background: #f3f4f6;
    color: #2563eb;
  }
  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
}
.method-add {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 2px dashed #e5e7eb;
  color: #2563eb;
  border-radius: 0.7rem;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.7rem;
  transition:
    border 0.18s,
    background 0.18s;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  &:hover {
    border-color: #2563eb;
    background: #f3f6fa;
  }
}
.recent-name,
.pending-name {
  font-weight: 600;
  color: #1a237e;
  font-size: 1.05rem;
}
.recent-desc,
.pending-desc {
  color: #6b7280;
  font-size: 0.98rem;
}
.recent-amount.green {
  color: #059669;
  font-weight: 700;
}
.recent-amount.red {
  color: #dc2626;
  font-weight: 700;
}
.recent-time,
.pending-time {
  color: #9ca3af;
  font-size: 0.85rem;
  margin-top: 0.2rem;
}
.pending-badge {
  background: #fef9c3;
  color: #f59e42;
  font-size: 0.95rem;
  border-radius: 0.5rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
}
.pending-amount {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
  display: block;
}
.pending-actions {
  display: flex;
  gap: 0.5rem;
}
.pending-pay {
  background: #059669;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem 1.1rem;
  font-weight: 600;
  font-size: 0.98rem;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #047857;
  }
}
.pending-decline {
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem 1.1rem;
  font-weight: 600;
  font-size: 0.98rem;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #e5e7eb;
  }
}

// Modal styles (simple)
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  max-width: 28rem;
  width: 100%;
  padding: 2rem;
  animation: modalIn 0.2s;
}
@keyframes modalIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

// Responsive
@media (max-width: 1100px) {
  .payment-main-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 900px) {
  .payment-quick-grid {
    grid-template-columns: 1fr;
  }
  .payment-section,
  .payment-card {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
@media (max-width: 700px) {
  .payment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .payment-header-actions {
    width: 100%;
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
  .payment-quick-grid,
  .payment-main-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .payment-card {
    padding: 1rem 0.5rem;
  }
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
