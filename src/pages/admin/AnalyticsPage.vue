<template>
  <div class="analytics-container">
    <!-- Header -->
    <div class="analytics-header">
      <div>
        <h1 class="title">Analytics</h1>
        <p class="subtitle">Comprehensive insights into your financial performance</p>
      </div>
      <div class="header-actions">
        <select class="date-range">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>This month</option>
        </select>
        <button class="export-btn">Export Report</button>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="summary-card">
        <div class="card-header">
          <span class="card-title">Total Revenue</span>
          <span class="card-icon icon-revenue"></span>
        </div>
        <div class="card-value">₹2,45,680</div>
        <div class="card-change positive">+15.3% <span>vs last month</span></div>
      </div>
      <div class="summary-card">
        <div class="card-header">
          <span class="card-title">Transaction Volume</span>
          <span class="card-icon icon-volume"></span>
        </div>
        <div class="card-value">1,247</div>
        <div class="card-change positive">+8.7% <span>vs last month</span></div>
      </div>
      <div class="summary-card">
        <div class="card-header">
          <span class="card-title">Average Transaction</span>
          <span class="card-icon icon-avg"></span>
        </div>
        <div class="card-value">₹1,970</div>
        <div class="card-change negative">-2.1% <span>vs last month</span></div>
      </div>
      <div class="summary-card">
        <div class="card-header">
          <span class="card-title">Success Rate</span>
          <span class="card-icon icon-success"></span>
        </div>
        <div class="card-value">98.5%</div>
        <div class="card-change positive">+0.3% <span>vs last month</span></div>
      </div>
    </div>

    <!-- Main Analytics Section -->
    <div class="main-analytics-grid">
      <div class="main-left">
        <div class="panel">
          <div class="panel-header">
            <span>Revenue Trend</span>
            <div class="tabs">
              <button class="tab active">Daily</button>
              <button class="tab">Weekly</button>
              <button class="tab">Monthly</button>
            </div>
          </div>
          <div class="chart-placeholder">[Line Chart Placeholder]</div>
        </div>
        <div class="panel">
          <span class="panel-title">Transaction Volume</span>
          <div class="chart-placeholder">[Bar Chart Placeholder]</div>
        </div>
        <div class="panel breakdown-table">
          <div class="panel-header">
            <span>Performance Breakdown</span>
            <a class="download-link" href="#">Download CSV</a>
          </div>
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
                <td class="positive">+15.3%</td>
                <td class="trend-up">↑ Increasing</td>
              </tr>
              <tr>
                <td>Transaction Count</td>
                <td>1,247</td>
                <td>1,147</td>
                <td class="positive">+8.7%</td>
                <td class="trend-up">↑ Increasing</td>
              </tr>
              <tr>
                <td>Average Transaction Value</td>
                <td>₹1,970</td>
                <td>₹2,012</td>
                <td class="negative">-2.1%</td>
                <td class="trend-down">↓ Decreasing</td>
              </tr>
              <tr>
                <td>Success Rate</td>
                <td>98.5%</td>
                <td>98.2%</td>
                <td class="positive">+0.3%</td>
                <td class="trend-stable">• Stable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="main-right">
        <div class="panel donut-panel">
          <div class="panel-header">
            <span>Transaction Categories</span>
            <a class="view-details" href="#">View Details</a>
          </div>
          <div class="donut-placeholder">[Donut Chart Placeholder]</div>
          <div class="donut-legend">
            <span class="legend-item food">Food & Dining</span>
            <span class="legend-item shopping">Shopping</span>
            <span class="legend-item transport">Transportation</span>
            <span class="legend-item utilities">Bills & Utilities</span>
            <span class="legend-item entertainment">Entertainment</span>
          </div>
        </div>
        <div class="panel payment-methods-panel">
          <span class="panel-title">Top Payment Methods</span>
          <ul class="payment-methods-list">
            <li>
              <span class="method-icon credit"></span>Credit Card <span class="percent">45.2%</span>
            </li>
            <li>
              <span class="method-icon wallet"></span>Digital Wallet
              <span class="percent">32.8%</span>
            </li>
            <li>
              <span class="method-icon bank"></span>Bank Transfer <span class="percent">22.0%</span>
            </li>
          </ul>
        </div>
        <div class="panel recent-activity-panel">
          <span class="panel-title">Recent Activity</span>
          <ul class="activity-list">
            <li>
              <span class="activity-title">Large transaction processed</span
              ><span class="activity-desc positive"
                >+ ₹25,000 payment received<br />2 minutes ago</span
              >
            </li>
            <li>
              <span class="activity-title">New user registered</span
              ><span class="activity-desc">Account verification pending<br />15 minutes ago</span>
            </li>
            <li>
              <span class="activity-title">System maintenance</span
              ><span class="activity-desc">Scheduled for tonight<br />1 hour ago</span>
            </li>
            <li>
              <span class="activity-title failed">Failed transaction</span
              ><span class="activity-desc negative">Insufficient funds<br />2 hours ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Analytics logic will be implemented here
</script>

<style lang="scss" scoped>
.analytics-container {
  background: #f7f9fb;
  padding: 2rem;
  min-height: 100vh;

  .analytics-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    .title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .subtitle {
      color: #6b7280;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .header-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-top: 0.5rem;
      .date-range {
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        border: 1px solid #e5e7eb;
        background: #fff;
        font-size: 1rem;
      }
      .export-btn {
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 0.375rem;
        padding: 0.5rem 1.25rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background: #1d4ed8;
        }
      }
    }
  }

  .summary-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .summary-card {
      background: #fff;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 1.5rem 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-title {
          font-weight: 600;
          color: #4b5563;
        }
        .card-icon {
          width: 24px;
          height: 24px;
          // background: url(...) no-repeat center;
          background-size: contain;
        }
      }
      .card-value {
        font-size: 1.75rem;
        font-weight: 700;
      }
      .card-change {
        font-size: 0.875rem;
        span {
          color: #6b7280;
        }
        &.positive {
          color: #16a34a;
        }
        &.negative {
          color: #dc2626;
        }
      }
    }
  }

  .main-analytics-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    @media (min-width: 1200px) {
      grid-template-columns: 2fr 1fr;
    }
  }

  .main-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .main-right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .panel {
    background: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    padding: 1.5rem;
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      font-weight: 600;
      font-size: 1.125rem;
    }
    .panel-title {
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
      display: block;
    }
    .tabs {
      display: flex;
      gap: 0.5rem;
      .tab {
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        border: 1px solid transparent;
        cursor: pointer;
        background: transparent;
        &.active,
        &:hover {
          background: #eef2ff;
          color: #4f46e5;
        }
      }
    }
    .chart-placeholder {
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      border: 1px dashed #e5e7eb;
      border-radius: 0.5rem;
    }
  }

  .breakdown-table {
    table {
      width: 100%;
      border-collapse: collapse;
      th,
      td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid #f3f4f6;
      }
      th {
        font-weight: 600;
        color: #4b5563;
      }
      .positive {
        color: #16a34a;
      }
      .negative {
        color: #dc2626;
      }
      .trend-up {
        color: #16a34a;
      }
      .trend-down {
        color: #dc2626;
      }
      .trend-stable {
        color: #6b7280;
      }
    }
    .download-link {
      font-size: 0.875rem;
      color: #2563eb;
      font-weight: 500;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .donut-panel {
    .view-details {
      font-size: 0.875rem;
      color: #2563eb;
      font-weight: 500;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .donut-placeholder {
      height: 200px;
    }
    .donut-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1.5rem;
      justify-content: center;
      .legend-item {
        display: flex;
        align-items: center;
        &::before {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
        &.food::before {
          background: #34d399;
        }
        &.shopping::before {
          background: #60a5fa;
        }
        &.transport::before {
          background: #f87171;
        }
        &.utilities::before {
          background: #fbbf24;
        }
        &.entertainment::before {
          background: #a78bfa;
        }
      }
    }
  }

  .payment-methods-panel {
    .payment-methods-list {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        .method-icon {
          width: 24px;
          height: 24px;
          margin-right: 0.75rem;
        }
        .percent {
          margin-left: auto;
          font-weight: 600;
        }
      }
    }
  }

  .recent-activity-panel {
    .activity-list {
      list-style: none;
      li {
        padding: 0.75rem 0;
        border-bottom: 1px solid #f3f4f6;
        display: flex;
        justify-content: space-between;
        &:last-child {
          border: none;
        }
        .activity-title {
          font-weight: 500;
          &.failed {
            color: #dc2626;
          }
        }
        .activity-desc {
          font-size: 0.875rem;
          color: #6b7280;
          text-align: right;
          &.positive {
            color: #16a34a;
          }
          &.negative {
            color: #dc2626;
          }
        }
      }
    }
  }
}
</style>
