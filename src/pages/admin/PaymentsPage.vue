<template>
  <section class="transactions-section">
    <!-- Dashboard Header -->
    <div class="transactions-header">
      <div>
        <h1 class="transactions-title">Transactions</h1>
        <p class="transactions-desc">Track and manage all your payment transactions</p>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="transactions-stats-grid">
      <div class="stat-card balance">
        <div>
          <p class="stat-label">Total Balance</p>
          <p class="stat-value">₹1,24,580</p>
          <p class="stat-meta positive">+12.5% from last month</p>
        </div>
        <div class="stat-icon blue">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
      <div class="stat-card income">
        <div>
          <p class="stat-label">Monthly Income</p>
          <p class="stat-value">₹45,230</p>
          <p class="stat-meta positive">+8.2% from last month</p>
        </div>
        <div class="stat-icon green">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
        </div>
      </div>
      <div class="stat-card expense">
        <div>
          <p class="stat-label">Monthly Expenses</p>
          <p class="stat-value">₹28,450</p>
          <p class="stat-meta negative">+3.1% from last month</p>
        </div>
        <div class="stat-icon red">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </div>
      </div>
      <div class="stat-card pending">
        <div>
          <p class="stat-label">Pending</p>
          <p class="stat-value">12</p>
          <p class="stat-meta warning">3 require attention</p>
        </div>
        <div class="stat-icon yellow">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="transactions-charts-grid">
      <div class="chart-card">
        <div class="chart-header">
          <h3>Revenue Overview</h3>
          <select class="chart-select">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div class="chart-canvas"><canvas id="revenueChart"></canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-header">
          <h3>Expense Categories</h3>
          <button class="chart-link">View All</button>
        </div>
        <div class="chart-canvas"><canvas id="categoryChart"></canvas></div>
      </div>
    </div>

    <!-- Recent Transactions Table -->
    <div class="transactions-table-card">
      <div class="table-header">
        <h3>Recent Transactions</h3>
        <button class="table-link">View All</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tx in transactions" :key="tx.id">
              <td>
                <div class="desc-flex">
                  <div :class="['desc-icon', tx.iconClass]">
                    <svg v-if="tx.iconClass.includes('green')" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                      />
                    </svg>
                    <svg v-else-if="tx.iconClass.includes('red')" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                    <svg v-else-if="tx.iconClass.includes('yellow')" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg v-else viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a2 2 0 00-3 3v8a2 2 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="desc-title">{{ tx.title }}</p>
                    <p class="desc-meta">{{ tx.description }}</p>
                  </div>
                </div>
              </td>
              <td>{{ tx.date }}</td>
              <td :class="tx.amount > 0 ? 'credit' : 'debit'">
                {{ tx.amount > 0 ? '+' : '' }}₹{{
                  Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })
                }}
              </td>
              <td>
                <span :class="['status-badge', tx.status.toLowerCase()]">{{ tx.status }}</span>
              </td>
              <td>
                <button class="table-action" @click="viewTransaction(tx)">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="transactions-actions-grid">
      <div class="action-card send">
        <div class="action-icon blue">
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
          <h4 class="action-title">Send Money</h4>
          <p class="action-desc">Transfer funds instantly</p>
        </div>
      </div>
      <div class="action-card request">
        <div class="action-icon green">
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
          <h4 class="action-title">Request Payment</h4>
          <p class="action-desc">Request funds from users or partners</p>
        </div>
      </div>
      <div class="action-card bills">
        <div class="action-icon purple">
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
          <h4 class="action-title">Pay Bills</h4>
          <p class="action-desc">Settle company utilities & subscriptions</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const transactions = ref([
  {
    id: 1,
    title: 'Payment Received',
    description: 'From John Doe',
    date: '2024-06-01',
    amount: 5000,
    status: 'Completed',
    iconClass: 'green',
  },
  {
    id: 2,
    title: 'Payment Sent',
    description: 'To Jane Smith',
    date: '2024-06-02',
    amount: -2000,
    status: 'Pending',
    iconClass: 'yellow',
  },
  {
    id: 3,
    title: 'Refund Processed',
    description: 'To John Doe',
    date: '2024-06-03',
    amount: -1500,
    status: 'Failed',
    iconClass: 'red',
  },
])

function viewTransaction(tx: any) {
  // Implement view logic
  alert(`Viewing transaction: ${tx.title}`)
}
</script>

<style scoped lang="scss">
// ... existing code ...
</style>
