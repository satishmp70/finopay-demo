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
          <p class="action-desc">Create payment request</p>
        </div>
      </div>
      <div class="action-card report">
        <div class="action-icon purple">
          <svg viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <div>
          <h4 class="action-title">View Reports</h4>
          <p class="action-desc">Detailed analytics</p>
        </div>
      </div>
    </div>

    <!-- New Transaction Modal -->
    <div
      v-if="showTransactionModal"
      class="transactions-modal-overlay"
      @click.self="closeTransactionModal"
    >
      <div class="transactions-modal">
        <div class="modal-header">
          <h3>New Transaction</h3>
          <button class="modal-close-btn" @click="closeTransactionModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="modal-form">
            <div>
              <label class="modal-label">Transaction Type</label>
              <select class="modal-input">
                <option>Send Money</option>
                <option>Request Payment</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <div>
              <label class="modal-label">Recipient</label>
              <input type="email" placeholder="Enter email or phone number" class="modal-input" />
            </div>
            <div>
              <label class="modal-label">Amount</label>
              <div class="modal-input-wrap">
                <span class="modal-currency">₹</span>
                <input type="number" placeholder="0.00" class="modal-input" />
              </div>
            </div>
            <div>
              <label class="modal-label">Description (Optional)</label>
              <textarea placeholder="Add a note..." rows="3" class="modal-input"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="modal-btn outline" @click="closeTransactionModal">Cancel</button>
          <button class="modal-btn primary">Send Transaction</button>
        </div>
      </div>
    </div>

    <!-- Transaction Detail Modal -->
    <div v-if="showDetailModal" class="transactions-modal-overlay" @click.self="closeDetailModal">
      <div class="transactions-modal">
        <div class="modal-header">
          <h3>Transaction Details</h3>
          <button class="modal-close-btn" @click="closeDetailModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="selectedTransaction">
            <div class="detail-list">
              <div class="detail-row">
                <span>ID:</span> <span class="tx-id">#{{ selectedTransaction.id }}</span>
              </div>
              <div class="detail-row">
                <span>Type:</span> <span>{{ selectedTransaction.title }}</span>
              </div>
              <div class="detail-row">
                <span>Description:</span> <span>{{ selectedTransaction.description }}</span>
              </div>
              <div class="detail-row">
                <span>Date & Time:</span>
                <span>{{ selectedTransaction.date }} {{ selectedTransaction.time }}</span>
              </div>
              <div class="detail-row">
                <span>Amount:</span>
                <span :class="['amount', selectedTransaction.amount > 0 ? 'credit' : 'debit']"
                  >{{ selectedTransaction.amount > 0 ? '+' : '' }}₹{{
                    Math.abs(selectedTransaction.amount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })
                  }}</span
                >
              </div>
              <div class="detail-row">
                <span>Status:</span>
                <span :class="['status-badge', selectedTransaction.status.toLowerCase()]">{{
                  selectedTransaction.status
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

interface Transaction {
  id: string
  icon: string
  iconClass: string
  title: string
  description: string
  date: string
  time: string
  amount: number
  status: string
}

const search = ref('')
const status = ref('All Status')
const type = ref('All Types')
const dateRange = ref('Last 30 days')
const showTransactionModal = ref(false)
const showDetailModal = ref(false)
const selectedTransaction = ref<Transaction | null>(null)

function openTransactionModal() {
  showTransactionModal.value = true
}
function closeTransactionModal() {
  showTransactionModal.value = false
}
function viewTransaction(tx: Transaction) {
  selectedTransaction.value = tx
  showDetailModal.value = true
}
function closeDetailModal() {
  showDetailModal.value = false
}

const transactions = ref([
  {
    id: 'TXN001234',
    icon: '��',
    iconClass: 'bg-green-100 text-green-600',
    title: 'Payment Received',
    description: 'From John Doe',
    date: 'Dec 15, 2023',
    time: '2:30 PM',
    amount: 5200,
    status: 'Completed',
  },
  {
    id: 'TXN001235',
    icon: '��',
    iconClass: 'bg-red-100 text-red-600',
    title: 'Subscription Payment',
    description: 'Netflix Premium',
    date: 'Dec 14, 2023',
    time: '11:45 AM',
    amount: -799,
    status: 'Completed',
  },
  {
    id: 'TXN001236',
    icon: '��',
    iconClass: 'bg-yellow-100 text-yellow-600',
    title: 'Bank Transfer',
    description: 'To HDFC Bank ****2847',
    date: 'Dec 13, 2023',
    time: '4:15 PM',
    amount: -15000,
    status: 'Pending',
  },
  {
    id: 'TXN001237',
    icon: '��',
    iconClass: 'bg-blue-100 text-blue-600',
    title: 'Online Purchase',
    description: 'Amazon.in',
    date: 'Dec 12, 2023',
    time: '9:20 AM',
    amount: -2450,
    status: 'Completed',
  },
  {
    id: 'TXN001238',
    icon: '��',
    iconClass: 'bg-red-100 text-red-600',
    title: 'Failed Payment',
    description: 'Utility Bill Payment',
    date: 'Dec 11, 2023',
    time: '6:45 PM',
    amount: -1250,
    status: 'Failed',
  },
])

onMounted(() => {
  // Revenue Overview Chart
  const revenueCtx = document.getElementById('revenueChart') as HTMLCanvasElement | null
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Revenue',
            data: [
              185000, 195000, 210000, 225000, 240000, 235000, 250000, 265000, 245000, 260000,
              275000, 245680,
            ],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#3B82F6',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: {
              callback(this: any, tickValue: string | number) {
                if (typeof tickValue === 'number') {
                  return '₹' + tickValue / 1000 + 'K'
                }
                return tickValue
              },
            },
          },
          x: { grid: { display: false } },
        },
      },
    })
  }
  // Expense Categories Chart
  const categoryCtx = document.getElementById('categoryChart') as HTMLCanvasElement | null
  if (categoryCtx) {
    new Chart(categoryCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Food & Dining',
          'Shopping',
          'Transportation',
          'Bills & Utilities',
          'Entertainment',
        ],
        datasets: [
          {
            data: [32.5, 28.3, 18.7, 12.8, 7.7],
            backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 20, usePointStyle: true, font: { size: 12 } },
          },
        },
        cutout: '60%',
      },
    })
  }
})
</script>

<style scoped lang="scss">
.transactions-section {
  padding: 2rem 2.5vw;
  background: #f9fafb;
  min-height: 100vh;
}
.transactions-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
  min-width: 0;
}
.transactions-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
}
.transactions-desc {
  color: #6b7280;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.transactions-header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.transactions-btn {
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
}

// Stats Cards
.transactions-stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.stat-card {
  background: #fff;
  border-radius: 1.1rem;
  border: 1px solid #e5e7eb;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(60, 72, 88, 0.13);
  }
  .stat-label {
    font-size: 1rem;
    color: #6b7280;
    font-weight: 500;
  }
  .stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: #111827;
    margin: 0.25rem 0;
  }
  .stat-meta {
    font-size: 0.98rem;
    margin-top: 0.2rem;
    &.positive {
      color: #059669;
    }
    &.negative {
      color: #dc2626;
    }
    &.warning {
      color: #f59e42;
    }
  }
  .stat-icon {
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
    &.red {
      background: #fee2e2;
      svg {
        color: #dc2626;
      }
    }
    &.yellow {
      background: #fef9c3;
      svg {
        color: #f59e42;
      }
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
    }
  }
}

// Charts Section
.transactions-charts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
}
.chart-card {
  background: #fff;
  border-radius: 1.1rem;
  border: 1px solid #e5e7eb;
  padding: 2rem 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.chart-header {
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
.chart-select {
  font-size: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  background: #fff;
  color: #374151;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px #2563eb33;
  }
}
.chart-link {
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
.chart-canvas {
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

// Table
.transactions-table-card {
  background: #fff;
  border-radius: 1.1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  margin-bottom: 2.5rem;
}
.table-header {
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
.table-link {
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
.table-wrap {
  overflow-x: auto;
  min-width: 0;
}
table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  th {
    text-align: left;
    padding: 1rem 1.25rem;
    font-size: 1.05rem;
    color: #5c6bc0;
    font-weight: 700;
    background: #f3f6fa;
    border-bottom: 1px solid #e5e7eb;
  }
  td {
    padding: 1rem 1.25rem;
    vertical-align: top;
    font-size: 1.05rem;
    background: #fff;
    transition: background 0.18s;
    .desc-flex {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
    .desc-icon {
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      &.bg-green-100 {
        background: #d1fae5;
        color: #059669;
      }
      &.bg-red-100 {
        background: #fee2e2;
        color: #dc2626;
      }
      &.bg-yellow-100 {
        background: #fef9c3;
        color: #f59e42;
      }
      &.bg-blue-100 {
        background: #dbeafe;
        color: #2563eb;
      }
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    .desc-title {
      font-weight: 600;
      color: #1a237e;
      font-size: 1.05rem;
    }
    .desc-meta {
      color: #6b7280;
      font-size: 0.98rem;
    }
    .credit {
      color: #059669;
      font-weight: 700;
    }
    .debit {
      color: #dc2626;
      font-weight: 700;
    }
    .status-badge {
      padding: 0.3rem 0.7rem;
      font-size: 0.95rem;
      border-radius: 0.5rem;
      font-weight: 700;
      &.completed {
        background: #d1fae5;
        color: #059669;
      }
      &.pending {
        background: #fef9c3;
        color: #f59e42;
      }
      &.failed {
        background: #fee2e2;
        color: #dc2626;
      }
    }
    .table-action {
      color: #2563eb;
      font-weight: 600;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: color 0.2s;
      &:hover {
        color: #1d4ed8;
      }
    }
  }
  tr {
    transition: background 0.18s;
    &:hover td {
      background: #f3f4f6;
    }
  }
  tr + tr {
    border-top: 1px solid #e5e7eb;
  }
}

// Quick Actions
.transactions-actions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.action-card {
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
  .action-icon {
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
  .action-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 0.2rem;
  }
  .action-desc {
    color: #6b7280;
    font-size: 0.98rem;
  }
}

// Responsive
@media (max-width: 1100px) {
  .transactions-stats-grid,
  .transactions-charts-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 900px) {
  .transactions-stats-grid,
  .transactions-charts-grid,
  .transactions-actions-grid {
    grid-template-columns: 1fr;
  }
  .transactions-stats-grid,
  .transactions-charts-grid,
  .transactions-table-card,
  .transactions-actions-grid {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
@media (max-width: 700px) {
  .transactions-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .transactions-header-actions {
    width: 100%;
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
  .transactions-stats-grid,
  .transactions-charts-grid,
  .transactions-actions-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .stat-card,
  .chart-card,
  .action-card,
  .transactions-table-card {
    padding: 1rem 0.5rem;
  }
  .table-header,
  .chart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  table {
    min-width: 500px;
  }
}
</style>
