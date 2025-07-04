<template>
  <section class="analytics-section">
    <!-- Analytics Header -->
    <div class="analytics-header">
      <div>
        <h1 class="analytics-title">Analytics</h1>
        <p class="analytics-desc">Comprehensive insights into your financial performance</p>
      </div>
      <div class="analytics-header-actions">
        <select class="analytics-select">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 3 months</option>
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>
        <button class="analytics-export-btn">Export Report</button>
      </div>
    </div>

    <!-- Key Metrics Cards -->
    <div class="analytics-metrics-grid">
      <div class="analytics-metric-card">
        <div class="metric-card-content">
          <div>
            <p class="metric-label">Total Revenue</p>
            <p class="metric-value">₹2,45,680</p>
            <div class="metric-trend up">
              <svg viewBox="0 0 24 24"><path d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
              <span>+15.3%</span>
              <span class="metric-vs">vs last month</span>
            </div>
          </div>
          <div class="metric-icon blue">
            <svg viewBox="0 0 24 24">
              <path
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="analytics-metric-card">
        <div class="metric-card-content">
          <div>
            <p class="metric-label">Transaction Volume</p>
            <p class="metric-value">1,247</p>
            <div class="metric-trend up">
              <svg viewBox="0 0 24 24"><path d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
              <span>+8.7%</span>
              <span class="metric-vs">vs last month</span>
            </div>
          </div>
          <div class="metric-icon green">
            <svg viewBox="0 0 24 24">
              <path
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="analytics-metric-card">
        <div class="metric-card-content">
          <div>
            <p class="metric-label">Average Transaction</p>
            <p class="metric-value">₹1,970</p>
            <div class="metric-trend down">
              <svg viewBox="0 0 24 24"><path d="M17 13l-5 5m0 0l-5-5m5 5V6" /></svg>
              <span>-2.1%</span>
              <span class="metric-vs">vs last month</span>
            </div>
          </div>
          <div class="metric-icon purple">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="analytics-metric-card">
        <div class="metric-card-content">
          <div>
            <p class="metric-label">Success Rate</p>
            <p class="metric-value">98.5%</p>
            <div class="metric-trend up">
              <svg viewBox="0 0 24 24"><path d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
              <span>+0.3%</span>
              <span class="metric-vs">vs last month</span>
            </div>
          </div>
          <div class="metric-icon yellow">
            <svg viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="analytics-charts-grid">
      <div class="analytics-chart-card">
        <div class="chart-card-header">
          <h3>Revenue Trend</h3>
          <div class="chart-header-actions">
            <button class="chart-range-btn active">Daily</button>
            <button class="chart-range-btn">Weekly</button>
            <button class="chart-range-btn">Monthly</button>
          </div>
        </div>
        <div class="chart-canvas-wrap"><canvas id="revenueTrendChart"></canvas></div>
      </div>
      <div class="analytics-chart-card">
        <div class="chart-card-header">
          <h3>Transaction Categories</h3>
          <button class="chart-view-details" @click="openCategoryModal">View Details</button>
        </div>
        <div class="chart-canvas-wrap"><canvas id="categoryPieChart"></canvas></div>
      </div>
    </div>

    <!-- Performance Metrics -->
    <div class="analytics-performance-grid">
      <div class="analytics-perf-card">
        <h3>Transaction Volume</h3>
        <div class="chart-canvas-wrap"><canvas id="volumeChart"></canvas></div>
      </div>
      <div class="analytics-perf-card">
        <h3>Top Payment Methods</h3>
        <div class="payment-methods-list">
          <div class="payment-method-row">
            <div class="pm-icon blue">
              <svg viewBox="0 0 24 24">
                <path
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div class="pm-info">
              <p>Credit Card</p>
              <span>45.2% of transactions</span>
            </div>
            <span class="pm-amount">₹1,12,450</span>
          </div>
          <div class="payment-method-row">
            <div class="pm-icon green">
              <svg viewBox="0 0 24 24">
                <path
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div class="pm-info">
              <p>Digital Wallet</p>
              <span>32.8% of transactions</span>
            </div>
            <span class="pm-amount">₹81,230</span>
          </div>
          <div class="payment-method-row">
            <div class="pm-icon purple">
              <svg viewBox="0 0 24 24">
                <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10 3L8 21l4-7h4l-4 7-2-18z" />
              </svg>
            </div>
            <div class="pm-info">
              <p>Bank Transfer</p>
              <span>22.0% of transactions</span>
            </div>
            <span class="pm-amount">₹52,000</span>
          </div>
        </div>
      </div>
      <div class="analytics-perf-card">
        <h3>Recent Activity</h3>
        <div class="recent-activity-list">
          <div class="activity-row green">
            <div class="activity-dot"></div>
            <div class="activity-info">
              <p>Large transaction processed</p>
              <span>₹25,000 payment received</span>
              <span class="activity-time">2 minutes ago</span>
            </div>
          </div>
          <div class="activity-row blue">
            <div class="activity-dot"></div>
            <div class="activity-info">
              <p>New user registered</p>
              <span>Account verification pending</span>
              <span class="activity-time">15 minutes ago</span>
            </div>
          </div>
          <div class="activity-row yellow">
            <div class="activity-dot"></div>
            <div class="activity-info">
              <p>System maintenance</p>
              <span>Scheduled for tonight</span>
              <span class="activity-time">1 hour ago</span>
            </div>
          </div>
          <div class="activity-row red">
            <div class="activity-dot"></div>
            <div class="activity-info">
              <p>Failed transaction</p>
              <span>Insufficient funds</span>
              <span class="activity-time">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Breakdown Table -->
    <div class="analytics-table-card">
      <div class="table-header">
        <h3>Performance Breakdown</h3>
        <button class="table-download-btn">Download CSV</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Current Period</th>
              <th>Previous Period</th>
              <th>Change</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Revenue</td>
              <td>₹2,45,680</td>
              <td>₹2,13,200</td>
              <td class="up">+15.3%</td>
              <td><span class="trend-icon up"></span>Increasing</td>
            </tr>
            <tr>
              <td>Transaction Count</td>
              <td>1,247</td>
              <td>1,147</td>
              <td class="up">+8.7%</td>
              <td><span class="trend-icon up"></span>Increasing</td>
            </tr>
            <tr>
              <td>Average Transaction Value</td>
              <td>₹1,970</td>
              <td>₹2,012</td>
              <td class="down">-2.1%</td>
              <td><span class="trend-icon down"></span>Decreasing</td>
            </tr>
            <tr>
              <td>Success Rate</td>
              <td>98.5%</td>
              <td>98.2%</td>
              <td class="up">+0.3%</td>
              <td><span class="trend-icon up"></span>Stable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Category Details Modal -->
    <div v-if="showCategoryModal" class="analytics-modal-overlay" @click.self="closeCategoryModal">
      <div class="analytics-modal">
        <div class="modal-header">
          <h3>Transaction Categories Breakdown</h3>
          <button class="modal-close-btn" @click="closeCategoryModal">
            <svg viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-grid">
            <div>
              <h4>Category Distribution</h4>
              <div class="modal-category-list">
                <div class="modal-category-row">
                  <span class="dot blue"></span>Food & Dining <span class="percent">32.5%</span>
                </div>
                <div class="modal-category-row">
                  <span class="dot green"></span>Shopping <span class="percent">28.3%</span>
                </div>
                <div class="modal-category-row">
                  <span class="dot yellow"></span>Transportation <span class="percent">18.7%</span>
                </div>
                <div class="modal-category-row">
                  <span class="dot red"></span>Bills & Utilities <span class="percent">12.8%</span>
                </div>
                <div class="modal-category-row">
                  <span class="dot purple"></span>Entertainment <span class="percent">7.7%</span>
                </div>
              </div>
            </div>
            <div>
              <h4>Monthly Trends</h4>
              <div class="modal-trend-list">
                <div class="modal-trend-row">
                  Food & Dining <span>₹79,850 <span class="up">+5.2%</span></span>
                </div>
                <div class="modal-trend-row">
                  Shopping <span>₹69,520 <span class="up">+12.8%</span></span>
                </div>
                <div class="modal-trend-row">
                  Transportation <span>₹45,940 <span class="down">-2.3%</span></span>
                </div>
                <div class="modal-trend-row">
                  Bills & Utilities <span>₹31,450 <span class="up">+1.5%</span></span>
                </div>
                <div class="modal-trend-row">
                  Entertainment <span>₹18,920 <span class="up">+8.9%</span></span>
                </div>
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
const showCategoryModal = ref(false)
function openCategoryModal() {
  showCategoryModal.value = true
}
function closeCategoryModal() {
  showCategoryModal.value = false
}

onMounted(() => {
  // Revenue Trend Chart
  const revenueTrendCtx = document.getElementById('revenueTrendChart') as HTMLCanvasElement | null
  if (revenueTrendCtx) {
    new Chart(revenueTrendCtx, {
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
  // Category Pie Chart
  const categoryPieCtx = document.getElementById('categoryPieChart') as HTMLCanvasElement | null
  if (categoryPieCtx) {
    new Chart(categoryPieCtx, {
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
  // Volume Chart
  const volumeCtx = document.getElementById('volumeChart') as HTMLCanvasElement | null
  if (volumeCtx) {
    new Chart(volumeCtx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Transactions',
            data: [285, 320, 298, 344],
            backgroundColor: '#10B981',
            borderRadius: 4,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.1)' } },
          x: { grid: { display: false } },
        },
      },
    })
  }
})
</script>

<style scoped lang="scss">
.analytics-section {
  padding: 1.5rem;
  background: #f9fafb;
  min-height: 100vh;
}
.analytics-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.analytics-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
}
.analytics-desc {
  color: #6b7280;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.analytics-header-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 640px) {
    margin-top: 0;
  }
}
.analytics-select {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: 1.5px solid #2563eb;
  color: #2563eb;
  background: #fff;
  &:focus {
    outline: none;
    border-color: #1d4ed8;
  }
}
.analytics-export-btn {
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  transition: background 0.2s;
  &:hover {
    background: #1d4ed8;
  }
}
.analytics-metrics-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.analytics-metric-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.08);
  }
}
.metric-card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.metric-label {
  color: #6b7280;
  font-size: 0.98rem;
  font-weight: 500;
}
.metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-top: 0.25rem;
}
.metric-trend {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
  &.up {
    color: #16a34a;
    svg {
      stroke: #16a34a;
    }
  }
  &.down {
    color: #dc2626;
    svg {
      stroke: #dc2626;
    }
  }
}
.metric-vs {
  color: #6b7280;
  font-size: 0.95rem;
  margin-left: 0.5rem;
}
.metric-icon {
  background: #f3f4f6;
  border-radius: 0.75rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 2;
    stroke: currentColor;
  }
  &.blue {
    color: #2563eb;
    background: #dbeafe;
  }
  &.green {
    color: #16a34a;
    background: #dcfce7;
  }
  &.purple {
    color: #9333ea;
    background: #ede9fe;
  }
  &.yellow {
    color: #f59e0b;
    background: #fef9c3;
  }
}

.analytics-charts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
}
.analytics-chart-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 24rem;
}
.chart-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111827;
  }
}
.chart-header-actions {
  display: flex;
  gap: 0.5rem;
}
.chart-range-btn {
  background: #dbeafe;
  color: #2563eb;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  border: none;
  transition: background 0.2s;
  &.active,
  &:hover {
    background: #2563eb;
    color: #fff;
  }
}
.chart-view-details {
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
.chart-canvas-wrap {
  flex: 1;
  min-height: 18rem;
  position: relative;
}

.analytics-performance-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.analytics-perf-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
}
.payment-methods-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.payment-method-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.pm-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 1.25rem;
    height: 1.25rem;
    stroke-width: 2;
    stroke: currentColor;
  }
  &.blue {
    background: #dbeafe;
    color: #2563eb;
  }
  &.green {
    background: #dcfce7;
    color: #16a34a;
  }
  &.purple {
    background: #ede9fe;
    color: #9333ea;
  }
}
.pm-info {
  flex: 1;
  min-width: 0;
  p {
    font-weight: 500;
    color: #111827;
  }
  span {
    color: #6b7280;
    font-size: 0.95rem;
  }
}
.pm-amount {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
}
.recent-activity-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.activity-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  &.green .activity-dot {
    background: #16a34a;
  }
  &.blue .activity-dot {
    background: #2563eb;
  }
  &.yellow .activity-dot {
    background: #f59e0b;
  }
  &.red .activity-dot {
    background: #dc2626;
  }
}
.activity-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-top: 0.5rem;
}
.activity-info {
  flex: 1;
  p {
    font-weight: 500;
    color: #111827;
    margin-bottom: 0.1rem;
  }
  span {
    display: block;
    color: #6b7280;
    font-size: 0.95rem;
  }
  .activity-time {
    color: #9ca3af;
    font-size: 0.85rem;
    margin-top: 0.1rem;
  }
}

.analytics-table-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.5rem 1.5rem;
  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111827;
  }
}
.table-download-btn {
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
  padding: 0 1.5rem 1.5rem 1.5rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 1rem 1.25rem;
    text-align: left;
    font-size: 1rem;
  }
  th {
    color: #6b7280;
    font-weight: 600;
    background: #f3f4f6;
    border-bottom: 1px solid #e5e7eb;
  }
  td {
    color: #374151;
    border-bottom: 1px solid #f3f4f6;
  }
  tr:last-child td {
    border-bottom: none;
  }
  .up {
    color: #16a34a;
    font-weight: 600;
  }
  .down {
    color: #dc2626;
    font-weight: 600;
  }
  .trend-icon {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
    vertical-align: middle;
    &.up {
      background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%2316a34a" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"/></svg>')
        no-repeat center/contain;
    }
    &.down {
      background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23dc2626" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6"/></svg>')
        no-repeat center/contain;
    }
  }
}

// Modal Styles
.analytics-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}
.analytics-modal {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  max-width: 38rem;
  width: 100%;
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
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111827;
  }
}
.modal-close-btn {
  background: none;
  border: none;
  color: #6b7280;
  border-radius: 0.5rem;
  padding: 0.25rem;
  cursor: pointer;
  transition: color 0.2s;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 2;
    stroke: currentColor;
  }
  &:hover {
    color: #dc2626;
  }
}
.modal-body {
  padding: 1.5rem;
}
.modal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
}
.modal-category-list,
.modal-trend-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-category-row,
.modal-trend-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
}
.modal-category-row .dot,
.modal-trend-row .dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  display: inline-block;
}
.modal-category-row .blue,
.modal-trend-row .blue {
  background: #2563eb;
}
.modal-category-row .green,
.modal-trend-row .green {
  background: #16a34a;
}
.modal-category-row .yellow,
.modal-trend-row .yellow {
  background: #f59e0b;
}
.modal-category-row .red,
.modal-trend-row .red {
  background: #dc2626;
}
.modal-category-row .purple,
.modal-trend-row .purple {
  background: #9333ea;
}
.percent {
  color: #6b7280;
  font-size: 0.98rem;
  margin-left: 0.5rem;
}
.modal-trend-row .up {
  color: #16a34a;
  margin-left: 0.5rem;
}
.modal-trend-row .down {
  color: #dc2626;
  margin-left: 0.5rem;
}
</style>
