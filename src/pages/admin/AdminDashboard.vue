<template>
  <div class="admin-dashboard">
    <!-- Stats Cards -->
    <div class="stats-cards-grid">
      <div v-for="(card, index) in adminStatsCards" :key="index" class="stats-card">
        <div class="stats-card__info">
          <p class="stats-card__title">{{ card.title }}</p>
          <p class="stats-card__value">{{ card.value }}</p>
          <p class="stats-card__change" :class="card.changeClass">{{ card.change }}</p>
        </div>
        <div class="stats-card__icon-wrapper" :class="card.iconBgClass">
          <div v-html="card.icon" class="stats-card__icon" :class="card.iconClass"></div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts-grid">
      <div class="chart-card">
        <div class="chart-card__header">
          <h3 class="chart-card__title">Revenue Overview</h3>
          <select class="chart-card__select">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div class="chart-card__container">
          <canvas ref="revenueChartEl"></canvas>
        </div>
      </div>
      <div class="chart-card">
        <div class="chart-card__header">
          <h3 class="chart-card__title">Transaction Types</h3>
          <div class="chart-card__legend">
            <div class="legend-item">
              <div class="legend-dot legend-dot--indigo"></div>
              <span class="legend-item__label">AEPS</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot legend-dot--purple"></div>
              <span class="legend-item__label">DMT</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot legend-dot--pink"></div>
              <span class="legend-item__label">Recharge</span>
            </div>
          </div>
        </div>
        <div class="chart-card__container">
          <canvas ref="transactionChartEl"></canvas>
        </div>
      </div>
    </div>

    <!-- Recent Transactions & Quick Actions -->
    <div class="bottom-grid">
      <div class="recent-tx">
        <div class="recent-tx__header">
          <h3 class="recent-tx__title">Recent Transactions</h3>
          <a href="#" class="recent-tx__view-all">View All</a>
        </div>
        <div class="recent-tx__table-wrapper">
          <table class="recent-tx__table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tx in recentTransactions" :key="tx.id">
                <td>{{ tx.id }}</td>
                <td>{{ tx.type }}</td>
                <td>{{ tx.amount }}</td>
                <td>
                  <span class="status-badge" :class="tx.statusClass">{{ tx.status }}</span>
                </td>
                <td>{{ tx.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="quick-actions">
        <h3 class="quick-actions__title">Quick Actions</h3>
        <div class="quick-actions__list">
          <button v-for="action in quickActions" :key="action.title" class="quick-action-btn">
            <div class="quick-action-btn__content">
              <div class="quick-action-btn__icon-wrapper" :class="action.iconBgClass">
                <div v-html="action.icon" class="quick-action-btn__icon"></div>
              </div>
              <span class="quick-action-btn__title">{{ action.title }}</span>
            </div>
            <div v-html="chevronRightIcon" class="quick-action-btn__arrow"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const revenueChartEl = ref<HTMLCanvasElement | null>(null)
const transactionChartEl = ref<HTMLCanvasElement | null>(null)

const adminStatsCards = ref([
  {
    title: 'Total Balance',
    value: '₹2,45,680',
    change: '+12.5% from last month',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>`,
    iconClass: 'text-green-600',
    changeClass: 'text-green-600',
    iconBgClass: 'bg-green-100',
  },
  {
    title: "Today's Transactions",
    value: '1,247',
    change: '+8.2% from yesterday',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
    iconClass: 'text-blue-600',
    changeClass: 'text-blue-600',
    iconBgClass: 'bg-blue-100',
  },
  {
    title: 'Success Rate',
    value: '98.5%',
    change: '+0.3% improvement',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    iconClass: 'text-purple-600',
    changeClass: 'text-green-600',
    iconBgClass: 'bg-purple-100',
  },
  {
    title: 'Active Users',
    value: '3,456',
    change: '+15.3% this week',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>`,
    iconClass: 'text-orange-600',
    changeClass: 'text-orange-600',
    iconBgClass: 'bg-orange-100',
  },
])

const recentTransactions = ref([
  {
    id: '#TXN001234',
    type: 'AEPS',
    amount: '₹2,500',
    status: 'Success',
    statusClass: 'status-badge--success',
    time: '2 min ago',
  },
  {
    id: '#TXN001235',
    type: 'DMT',
    amount: '₹5,000',
    status: 'Pending',
    statusClass: 'status-badge--pending',
    time: '5 min ago',
  },
  {
    id: '#TXN001236',
    type: 'Recharge',
    amount: '₹299',
    status: 'Success',
    statusClass: 'status-badge--success',
    time: '8 min ago',
  },
  {
    id: '#TXN001237',
    type: 'AEPS',
    amount: '₹1,200',
    status: 'Failed',
    statusClass: 'status-badge--failed',
    time: '12 min ago',
  },
  {
    id: '#TXN001238',
    type: 'DMT',
    amount: '₹3,750',
    status: 'Success',
    statusClass: 'status-badge--success',
    time: '15 min ago',
  },
])

const chevronRightIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`

const quickActions = ref([
  {
    title: 'Add Funds',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`,
    iconBgClass: 'bg-indigo-600',
  },
  {
    title: 'View Reports',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
    iconBgClass: 'bg-purple-600',
  },
  {
    title: 'Support',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>`,
    iconBgClass: 'bg-green-600',
  },
  {
    title: 'Settings',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    iconBgClass: 'bg-orange-600',
  },
])

const initCharts = () => {
  // Revenue Chart
  if (revenueChartEl.value) {
    const revenueCtx = revenueChartEl.value.getContext('2d')
    if (revenueCtx) {
      new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Revenue',
              data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } },
            x: { grid: { display: false } },
          },
        },
      })
    }
  }

  // Transaction Types Chart
  if (transactionChartEl.value) {
    const transactionCtx = transactionChartEl.value.getContext('2d')
    if (transactionCtx) {
      new Chart(transactionCtx, {
        type: 'doughnut',
        data: {
          labels: ['AEPS', 'DMT', 'Recharge', 'Others'],
          datasets: [
            {
              data: [45, 30, 20, 5],
              backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        },
      })
    }
  }
}

onMounted(() => {
  initCharts()
})
</script>

<style lang="scss" scoped>
.admin-dashboard {
  .stats-cards-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stats-card {
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid rgba(229, 231, 235, 0.3);
    padding: 1.5rem;
    transition: border-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      border-color: rgba(229, 231, 235, 0.4);
    }

    &__info {
      flex-grow: 1;
    }

    &__title {
      font-size: 0.875rem;
      font-weight: 500;
      color: #4b5563;
    }

    &__value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #111827;
    }

    &__change {
      font-size: 0.875rem;
      &.text-green-600 {
        color: #059669;
      }
      &.text-blue-600 {
        color: #2563eb;
      }
      &.text-orange-600 {
        color: #ea580c;
      }
    }

    &__icon-wrapper {
      width: 3rem;
      height: 3rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &.bg-green-100 {
        background-color: #d1fae5;
      }
      &.bg-blue-100 {
        background-color: #dbeafe;
      }
      &.bg-purple-100 {
        background-color: #e9d5ff;
      }
      &.bg-orange-100 {
        background-color: #ffedd5;
      }
    }

    &__icon {
      :deep(svg) {
        width: 1.5rem;
        height: 1.5rem;
      }

      &.text-green-600 {
        color: #059669;
      }
      &.text-blue-600 {
        color: #2563eb;
      }
      &.text-purple-600 {
        color: #9333ea;
      }
      &.text-orange-600 {
        color: #ea580c;
      }
    }
  }

  .charts-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .chart-card {
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid rgba(229, 231, 235, 0.3);
    padding: 1.5rem;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    &__title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
    }

    &__select {
      font-size: 0.875rem;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
      padding: 0.25rem 0.75rem;
      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        --tw-ring-color: #4f46e5;
        border-color: #4f46e5;
      }
    }

    &__legend {
      display: flex;
      gap: 0.5rem;
      .legend-item {
        display: flex;
        align-items: center;
        .legend-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 9999px;
          margin-right: 0.5rem;
          &--indigo {
            background-color: #6366f1;
          }
          &--purple {
            background-color: #8b5cf6;
          }
          &--pink {
            background-color: #ec4899;
          }
        }
        &__label {
          font-size: 0.875rem;
          color: #4b5563;
        }
      }
    }

    &__container {
      height: 16rem; // h-64
    }
  }

  .bottom-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .recent-tx {
    grid-column: span 1 / span 1;
    @media (min-width: 1024px) {
      grid-column: span 2 / span 2;
    }
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid rgba(229, 231, 235, 0.3);
    padding: 1.5rem;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    &__title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
    }

    &__view-all {
      color: #4f46e5;
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration: none;
      &:hover {
        color: #4338ca;
      }
    }

    &__table-wrapper {
      overflow-x: auto;
    }

    &__table {
      width: 100%;
      th,
      td {
        padding: 0.75rem 1rem;
        text-align: left;
      }
      th {
        font-weight: 500;
        color: #4b5563;
        border-bottom: 1px solid rgba(229, 231, 235, 0.2);
      }
      tbody tr {
        border-bottom: 1px solid rgba(229, 231, 235, 0.1);
        &:last-child {
          border-bottom: none;
        }
      }
      td {
        font-size: 0.875rem;
        color: #111827;
      }
    }
  }

  .status-badge {
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;

    &--success {
      background-color: #d1fae5;
      color: #065f46;
    }
    &--pending {
      background-color: #fef9c3;
      color: #854d0e;
    }
    &--failed {
      background-color: #fee2e2;
      color: #991b1b;
    }
  }

  .quick-actions {
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid rgba(229, 231, 235, 0.3);
    padding: 1.5rem;

    &__title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1.5rem;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .quick-action-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
    background-color: #f9fafb;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #f3f4f6;
    }

    &__content {
      display: flex;
      align-items: center;
    }

    &__icon-wrapper {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.75rem;
      &.bg-indigo-600 {
        background-color: #4f46e5;
      }
      &.bg-purple-600 {
        background-color: #7c3aed;
      }
      &.bg-green-600 {
        background-color: #059669;
      }
      &.bg-orange-600 {
        background-color: #ea580c;
      }
    }

    &__icon {
      :deep(svg) {
        width: 1.25rem;
        height: 1.25rem;
        color: white;
      }
    }

    &__title {
      font-weight: 500;
      color: #111827;
    }

    &__arrow {
      :deep(svg) {
        width: 1.25rem;
        height: 1.25rem;
        color: #9ca3af;
      }
    }
  }
}
</style>
