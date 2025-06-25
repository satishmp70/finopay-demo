<template>
  <div class="dashboard-main">
    <!-- Header -->
    <div class="dashboard-header">
      <div class="dashboard-header-left">
        <h1 class="dashboard-title">
          {{ role === 'admin' ? 'Dashboard' : 'User Dashboard' }}
        </h1>
        <p class="dashboard-subtitle">
          {{
            role === 'admin'
              ? "Welcome back! Here's your business overview"
              : "Welcome back! Here's your account overview"
          }}
        </p>
      </div>
      <div v-if="role === 'user'" class="dashboard-header-right">
        <button class="dashboard-action-btn">Quick Transfer</button>
      </div>
    </div>

    <!-- Admin Dashboard -->
    <div v-if="role === 'admin'" class="admin-dashboard">
      <AdminDashboard />
    </div>

    <!-- User Dashboard -->
    <div v-if="role === 'user'" class="user-dashboard">
      <!-- Stats Cards -->
      <div class="stats-cards-row">
        <div v-for="card in statsCards" :key="card.title" class="stats-card">
          <div class="stats-card-icon" :class="card.iconBg">
            <component :is="card.icon" class="stats-card-svg" />
          </div>
          <div class="stats-card-info">
            <p class="stats-card-title">{{ card.title }}</p>
            <p class="stats-card-value">{{ card.value }}</p>
          </div>
        </div>
      </div>

      <div class="main-content-grid">
        <div class="main-content-left">
          <!-- Quick Actions -->
          <div class="quick-actions-box">
            <h3 class="section-title">Quick Actions</h3>
            <div class="quick-actions-row">
              <button v-for="action in quickActions" :key="action.title" class="quick-action-btn">
                <div class="quick-action-icon" :class="action.iconBg">
                  <component :is="action.icon" class="quick-action-svg" />
                </div>
                <span class="quick-action-title">{{ action.title }}</span>
              </button>
            </div>
          </div>
          <!-- Recent Transactions -->
          <div class="recent-tx-box">
            <div class="recent-tx-header">
              <h3 class="section-title">Recent Transactions</h3>
              <button class="view-all-btn">View All</button>
            </div>
            <div class="recent-tx-list">
              <div v-for="tx in recentTransactions" :key="tx.id" class="recent-tx-item">
                <div class="recent-tx-main">
                  <div class="recent-tx-icon" :class="tx.iconBg">
                    <component :is="tx.icon" class="recent-tx-svg" />
                  </div>
                  <div class="recent-tx-info">
                    <p class="recent-tx-title">{{ tx.title }}</p>
                    <p class="recent-tx-subtitle">{{ tx.subtitle }}</p>
                  </div>
                </div>
                <div class="recent-tx-amount">
                  <p class="recent-tx-value">{{ tx.amount }}</p>
                  <p class="recent-tx-status" :class="tx.statusColor">{{ tx.status }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-content-right">
          <!-- Account Summary -->
          <div class="account-summary-box">
            <h3 class="section-title">Account Summary</h3>
            <div class="account-summary-list">
              <div class="account-summary-row">
                <span class="account-summary-label">Available Balance</span>
                <span class="account-summary-value">₹25,430</span>
              </div>
              <div class="account-summary-row">
                <span class="account-summary-label">Pending Amount</span>
                <span class="account-summary-value">₹0</span>
              </div>
              <div class="account-summary-row">
                <span class="account-summary-label">Commission Balance</span>
                <span class="account-summary-value">₹1,240</span>
              </div>
              <hr class="account-summary-divider" />
              <div class="account-summary-row total">
                <span class="account-summary-label total">Total Balance</span>
                <span class="account-summary-value total">₹26,670</span>
              </div>
            </div>
            <button class="add-money-btn">Add Money</button>
          </div>
          <!-- Notifications -->
          <div class="notifications-box">
            <h3 class="section-title">Notifications</h3>
            <div class="notifications-list">
              <div v-for="note in notifications" :key="note.id" class="notification-item">
                <div class="notification-dot" :class="note.dotColor" />
                <div>
                  <p class="notification-text">{{ note.text }}</p>
                  <p class="notification-time">{{ note.time }}</p>
                </div>
              </div>
            </div>
            <button class="view-all-btn">View All Notifications</button>
          </div>
          <!-- Support -->
          <div class="support-box">
            <h3 class="section-title">Need Help?</h3>
            <p class="support-desc">Contact our support team for assistance</p>
            <div class="support-actions">
              <button class="support-btn">
                <svg class="support-svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                Call Support
              </button>
              <button class="support-btn">
                <svg class="support-svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineProps } from 'vue'
import type { FunctionalComponent } from 'vue'
import AdminDashboard from '@/pages/admin/AdminDashboard.vue'
import { DollarSign, Phone, Send, Activity, FileText } from 'lucide-vue-next'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import RefreshIcon from '@/components/icons/RefreshIcon.vue'

interface IStatCard {
  title: string
  value: string
  icon: FunctionalComponent | object
  iconBg: string
}

interface IQuickAction {
  title: string
  icon: FunctionalComponent | object
  iconBg: string
}

interface IRecentTransaction {
  id: number
  title: string
  subtitle: string
  amount: string
  status: string
  statusColor: string
  icon: FunctionalComponent | object
  iconBg: string
}

interface INotification {
  id: number
  text: string
  time: string
  dotColor: string
}

const props = defineProps<{
  role: 'user' | 'admin'
}>()

const statsCards = ref<IStatCard[]>([])
const quickActions = ref<IQuickAction[]>([])
const recentTransactions = ref<IRecentTransaction[]>([])
const notifications = ref<INotification[]>([])

watchEffect(() => {
  if (props.role === 'user') {
    statsCards.value = [
      {
        title: 'Wallet Balance',
        value: '₹12,540',
        icon: WalletIcon,
        iconBg: 'stats-icon-bg-yellow',
      },
      {
        title: 'Commission Earned',
        value: '₹1,230',
        icon: DollarSign,
        iconBg: 'stats-icon-bg-green',
      },
      {
        title: "Today's Transactions",
        value: '25',
        icon: Activity,
        iconBg: 'stats-icon-bg-blue',
      },
      {
        title: 'Pending Amount',
        value: '₹500',
        icon: RefreshIcon,
        iconBg: 'stats-icon-bg-orange',
      },
    ]

    quickActions.value = [
      { title: 'Mobile Recharge', icon: Phone, iconBg: 'quick-action-bg-blue' },
      { title: 'Money Transfer', icon: Send, iconBg: 'quick-action-bg-green' },
      { title: 'UPI Payment', icon: Activity, iconBg: 'quick-action-bg-purple' },
      { title: 'Bill Payment', icon: FileText, iconBg: 'quick-action-bg-orange' },
    ]

    recentTransactions.value = [
      {
        id: 1,
        title: 'Mobile Recharge',
        subtitle: '9876543210',
        amount: '₹299',
        status: 'Success',
        statusColor: 'status-success',
        icon: Phone,
        iconBg: 'recent-tx-bg-green',
      },
      {
        id: 2,
        title: 'Money Transfer',
        subtitle: 'To: John Doe',
        amount: '₹5,000',
        status: 'Success',
        statusColor: 'status-success',
        icon: Send,
        iconBg: 'recent-tx-bg-blue',
      },
      {
        id: 3,
        title: 'Electricity Bill',
        subtitle: 'MSEB - 123456789',
        amount: '₹1,250',
        status: 'Success',
        statusColor: 'status-success',
        icon: FileText,
        iconBg: 'recent-tx-bg-orange',
      },
    ]

    notifications.value = [
      { id: 1, text: 'New service added: AEPS', time: '2 hours ago', dotColor: 'dot-blue' },
      { id: 2, text: 'Commission credited ₹45', time: '5 hours ago', dotColor: 'dot-green' },
      { id: 3, text: 'System maintenance scheduled', time: '1 day ago', dotColor: 'dot-orange' },
    ]
  }
})
</script>

<style scoped lang="scss">
.dashboard-main {
  padding: 1.5rem;
  background-color: #f9fafb;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
}

.dashboard-header-left {
  .dashboard-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }
  .dashboard-subtitle {
    color: #6b7280;
    font-size: 1rem;
  }
}

.dashboard-action-btn {
  background: #2563eb;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #1d4ed8;
  }
}

.stats-cards-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stats-card {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #d1d5db;
  }
}

.stats-card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &.stats-icon-bg-green {
    background: #dcfce7;
  }
  &.stats-icon-bg-blue {
    background: #dbeafe;
  }
  &.stats-icon-bg-purple {
    background: #f3e8ff;
  }
  &.stats-icon-bg-orange {
    background: #ffedd5;
  }
  &.stats-icon-bg-yellow {
    background: #fef9c3;
  }
}

.stats-card-svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #059669;

  .stats-icon-bg-blue & {
    color: #2563eb;
  }
  .stats-icon-bg-purple & {
    color: #7c3aed;
  }
  .stats-icon-bg-orange & {
    color: #ea580c;
  }
}

.stats-card-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stats-card-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.stats-card-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.main-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
}

.main-content-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quick-actions-box {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.quick-actions-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.quick-action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #f9fafb;
  }
}

.quick-action-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  &.quick-action-bg-blue {
    background: #dbeafe;
  }
  &.quick-action-bg-green {
    background: #dcfce7;
  }
  &.quick-action-bg-purple {
    background: #f3e8ff;
  }
  &.quick-action-bg-orange {
    background: #fed7aa;
  }
}

.quick-action-svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #2563eb;

  .quick-action-bg-green & {
    color: #059669;
  }
  .quick-action-bg-purple & {
    color: #7c3aed;
  }
  .quick-action-bg-orange & {
    color: #ea580c;
  }
}

.quick-action-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  text-align: center;
}

.recent-tx-box {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.recent-tx-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.view-all-btn {
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #4f46e5;
  }
}

.recent-tx-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recent-tx-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recent-tx-main {
  display: flex;
  align-items: center;
}

.recent-tx-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;

  &.recent-tx-bg-green {
    background: #dcfce7;
  }
  &.recent-tx-bg-blue {
    background: #dbeafe;
  }
  &.recent-tx-bg-orange {
    background: #fed7aa;
  }
}

.recent-tx-svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #059669;

  .recent-tx-bg-blue & {
    color: #2563eb;
  }
  .recent-tx-bg-orange & {
    color: #ea580c;
  }
}

.recent-tx-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.recent-tx-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.recent-tx-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
}

.recent-tx-amount {
  text-align: right;
}

.recent-tx-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.recent-tx-status {
  font-size: 0.875rem;

  &.status-success {
    color: #059669;
  }
  &.status-failed {
    color: #dc2626;
  }
  &.status-pending {
    color: #d97706;
  }
}

.main-content-right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.account-summary-box {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.account-summary-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.account-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.total {
    font-weight: 500;
  }
}

.account-summary-label {
  font-size: 0.875rem;
  color: #6b7280;

  &.total {
    color: #111827;
  }
}

.account-summary-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;

  &.total {
    font-weight: 700;
  }
}

.account-summary-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0;
}

.add-money-btn {
  width: 100%;
  background: #2563eb;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #1d4ed8;
  }
}

.notifications-box {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.notification-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;

  &.dot-blue {
    background: #2563eb;
  }
  &.dot-green {
    background: #059669;
  }
  &.dot-orange {
    background: #ea580c;
  }
}

.notification-text {
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.notification-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.support-box {
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.support-desc {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.support-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.support-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #f9fafb;
  }
}

.support-svg {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
</style>
