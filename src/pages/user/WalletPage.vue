<template>
  <section class="wallet-section">
    <!-- Header -->
    <div class="wallet-header">
      <div>
        <h1 class="wallet-title">Wallet</h1>
        <p class="wallet-desc">Manage your digital wallet and view transaction history</p>
      </div>
      <div class="wallet-header-actions">
        <button class="wallet-btn primary" @click="openAddMoneyModal">Add Money</button>
        <button class="wallet-btn outline" @click="openWithdrawModal">Withdraw</button>
      </div>
    </div>

    <!-- Balance Card -->
    <div class="wallet-balance-card">
      <div class="balance-info">
        <p class="balance-label">Total Balance</p>
        <h2 class="balance-amount">₹1,24,580.50</h2>
        <p class="balance-sub">Available for spending</p>
      </div>
      <div class="balance-icon-box">
        <svg class="balance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="wallet-actions-grid">
      <button class="wallet-action" @click="openAddMoneyModal">
        <div class="action-icon green">
          <svg class="action-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <h3 class="action-title">Add Money</h3>
        <p class="action-desc">Top up wallet</p>
      </button>
      <button class="wallet-action" @click="openWithdrawModal">
        <div class="action-icon red">
          <svg class="action-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </div>
        <h3 class="action-title">Withdraw</h3>
        <p class="action-desc">To bank account</p>
      </button>
      <button class="wallet-action" @click="openTransferModal">
        <div class="action-icon blue">
          <svg class="action-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
        <h3 class="action-title">Transfer</h3>
        <p class="action-desc">Send to others</p>
      </button>
      <button class="wallet-action" @click="openHistoryModal">
        <div class="action-icon purple">
          <svg class="action-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3 class="action-title">History</h3>
        <p class="action-desc">View all transactions</p>
      </button>
    </div>

    <!-- Main Grid: Recent Transactions & Spending Analysis -->
    <div class="wallet-main-grid">
      <!-- Recent Transactions -->
      <div class="wallet-card">
        <div class="wallet-card-header">
          <h3>Recent Transactions</h3>
          <button class="wallet-link" @click="openHistoryModal">View All</button>
        </div>
        <div class="wallet-list">
          <div class="wallet-list-item">
            <div class="wallet-list-left">
              <div class="wallet-list-icon green">
                <svg class="list-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <p class="wallet-list-title">Money Added</p>
                <p class="wallet-list-desc">From HDFC Bank</p>
              </div>
            </div>
            <div class="wallet-list-right">
              <p class="wallet-list-amount green">+₹10,000</p>
              <p class="wallet-list-meta">2 hours ago</p>
            </div>
          </div>
          <div class="wallet-list-item">
            <div class="wallet-list-left">
              <div class="wallet-list-icon red">
                <svg class="list-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </div>
              <div>
                <p class="wallet-list-title">Payment Sent</p>
                <p class="wallet-list-desc">To Sarah Johnson</p>
              </div>
            </div>
            <div class="wallet-list-right">
              <p class="wallet-list-amount red">-₹1,250</p>
              <p class="wallet-list-meta">5 hours ago</p>
            </div>
          </div>
          <div class="wallet-list-item">
            <div class="wallet-list-left">
              <div class="wallet-list-icon blue">
                <svg class="list-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a2 2 0 00-3 3v8a2 2 0 003 3z"
                  />
                </svg>
              </div>
              <div>
                <p class="wallet-list-title">Online Purchase</p>
                <p class="wallet-list-desc">Amazon.in</p>
              </div>
            </div>
            <div class="wallet-list-right">
              <p class="wallet-list-amount red">-₹2,450</p>
              <p class="wallet-list-meta">Yesterday</p>
            </div>
          </div>
          <div class="wallet-list-item">
            <div class="wallet-list-left">
              <div class="wallet-list-icon green">
                <svg class="list-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <div>
                <p class="wallet-list-title">Payment Received</p>
                <p class="wallet-list-desc">From Mike Chen</p>
              </div>
            </div>
            <div class="wallet-list-right">
              <p class="wallet-list-amount green">+₹5,200</p>
              <p class="wallet-list-meta">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Spending Analysis -->
      <div class="wallet-card">
        <div class="wallet-card-header">
          <h3>Spending Analysis</h3>
          <select class="wallet-select">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>
        <div class="wallet-spending-list">
          <div class="spending-row">
            <div class="spending-label">
              <span class="spending-dot blue"></span>
              <span>Food & Dining</span>
            </div>
            <div class="spending-bar-group">
              <div class="spending-bar-bg">
                <div class="spending-bar blue" style="width: 45%"></div>
              </div>
              <span class="spending-amount">₹8,500</span>
            </div>
          </div>
          <div class="spending-row">
            <div class="spending-label">
              <span class="spending-dot green"></span>
              <span>Shopping</span>
            </div>
            <div class="spending-bar-group">
              <div class="spending-bar-bg">
                <div class="spending-bar green" style="width: 35%"></div>
              </div>
              <span class="spending-amount">₹6,200</span>
            </div>
          </div>
          <div class="spending-row">
            <div class="spending-label">
              <span class="spending-dot yellow"></span>
              <span>Transportation</span>
            </div>
            <div class="spending-bar-group">
              <div class="spending-bar-bg">
                <div class="spending-bar yellow" style="width: 25%"></div>
              </div>
              <span class="spending-amount">₹3,800</span>
            </div>
          </div>
          <div class="spending-row">
            <div class="spending-label">
              <span class="spending-dot red"></span>
              <span>Bills & Utilities</span>
            </div>
            <div class="spending-bar-group">
              <div class="spending-bar-bg">
                <div class="spending-bar red" style="width: 30%"></div>
              </div>
              <span class="spending-amount">₹4,500</span>
            </div>
          </div>
          <div class="spending-row">
            <div class="spending-label">
              <span class="spending-dot purple"></span>
              <span>Entertainment</span>
            </div>
            <div class="spending-bar-group">
              <div class="spending-bar-bg">
                <div class="spending-bar purple" style="width: 15%"></div>
              </div>
              <span class="spending-amount">₹2,100</span>
            </div>
          </div>
          <div class="spending-summary">
            <div class="spending-summary-row">
              <span>Total Spent</span>
              <span class="spending-total">₹25,100</span>
            </div>
            <div class="spending-summary-row">
              <span class="spending-budget">Budget: ₹30,000</span>
              <span class="spending-remaining">₹4,900 remaining</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Linked Accounts -->
    <div class="wallet-card">
      <div class="wallet-card-header">
        <h3>Linked Accounts</h3>
        <button class="wallet-link" @click="openLinkAccountModal">Link New Account</button>
      </div>
      <div class="wallet-accounts-grid">
        <div class="wallet-account">
          <div class="account-header">
            <div class="account-info">
              <div class="account-icon blue">
                <svg class="account-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p class="account-name">HDFC Bank</p>
                <p class="account-meta">••••2847</p>
              </div>
            </div>
            <span class="account-badge primary">Primary</span>
          </div>
          <div class="account-footer">
            <span class="account-balance">Available: ₹45,230</span>
            <button class="wallet-link" @click="openManageAccountModal('HDFC Bank')">Manage</button>
          </div>
        </div>
        <div class="wallet-account">
          <div class="account-header">
            <div class="account-info">
              <div class="account-icon green">
                <svg class="account-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a2 2 0 00-3 3v8a2 2 0 003 3z"
                  />
                </svg>
              </div>
              <div>
                <p class="account-name">ICICI Credit</p>
                <p class="account-meta">••••4532</p>
              </div>
            </div>
          </div>
          <div class="account-footer">
            <span class="account-balance">Limit: ₹2,00,000</span>
            <button class="wallet-link" @click="openManageAccountModal('ICICI Credit')">
              Manage
            </button>
          </div>
        </div>
        <div class="wallet-account add-account" @click="openLinkAccountModal">
          <div class="add-account-box">
            <div class="account-icon gray">
              <svg class="account-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <p class="add-account-text">Link Account</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Money Modal -->
    <div v-if="showAddMoneyModal" class="wallet-modal-backdrop" @click.self="closeAddMoneyModal">
      <div class="wallet-modal" ref="modalContent">
        <div class="wallet-modal-header">
          <h3 class="wallet-modal-title">Add Money to Wallet</h3>
          <button class="wallet-modal-close" @click="closeAddMoneyModal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="wallet-modal-body">
          <form class="wallet-modal-form">
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Amount</label>
              <div class="wallet-modal-input-wrap">
                <span class="wallet-modal-currency">₹</span>
                <input type="number" min="1" placeholder="0.00" class="wallet-modal-input" />
              </div>
              <div class="wallet-modal-quick-amounts">
                <button type="button" class="wallet-modal-quick-btn">₹500</button>
                <button type="button" class="wallet-modal-quick-btn">₹1,000</button>
                <button type="button" class="wallet-modal-quick-btn">₹5,000</button>
                <button type="button" class="wallet-modal-quick-btn">₹10,000</button>
              </div>
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Payment Method</label>
              <select class="wallet-modal-input">
                <option>HDFC Bank ••••2847 (Primary)</option>
                <option>ICICI Credit ••••4532</option>
                <option>Add New Payment Method</option>
              </select>
            </div>
          </form>
        </div>
        <div class="wallet-modal-footer">
          <button class="wallet-modal-cancel" @click="closeAddMoneyModal">Cancel</button>
          <button class="wallet-modal-submit">Add Money</button>
        </div>
      </div>
    </div>

    <!-- Withdraw Modal -->
    <div v-if="showWithdrawModal" class="wallet-modal-backdrop" @click.self="closeWithdrawModal">
      <div class="wallet-modal" ref="withdrawModalContent">
        <div class="wallet-modal-header">
          <h3 class="wallet-modal-title">Withdraw Money</h3>
          <button class="wallet-modal-close" @click="closeWithdrawModal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="wallet-modal-body">
          <form class="wallet-modal-form">
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Amount</label>
              <div class="wallet-modal-input-wrap">
                <span class="wallet-modal-currency">₹</span>
                <input type="number" min="1" placeholder="0.00" class="wallet-modal-input" />
              </div>
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Withdraw To</label>
              <select class="wallet-modal-input">
                <option>HDFC Bank ••••2847 (Primary)</option>
                <option>Add New Bank Account</option>
              </select>
            </div>
          </form>
        </div>
        <div class="wallet-modal-footer">
          <button class="wallet-modal-cancel" @click="closeWithdrawModal">Cancel</button>
          <button class="wallet-modal-submit">Withdraw</button>
        </div>
      </div>
    </div>

    <!-- Transfer Modal -->
    <div v-if="showTransferModal" class="wallet-modal-backdrop" @click.self="closeTransferModal">
      <div class="wallet-modal" ref="transferModalContent">
        <div class="wallet-modal-header">
          <h3 class="wallet-modal-title">Transfer Money</h3>
          <button class="wallet-modal-close" @click="closeTransferModal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="wallet-modal-body">
          <form class="wallet-modal-form">
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Recipient</label>
              <input
                type="text"
                placeholder="Enter name or mobile number"
                class="wallet-modal-input"
              />
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Amount</label>
              <div class="wallet-modal-input-wrap">
                <span class="wallet-modal-currency">₹</span>
                <input type="number" min="1" placeholder="0.00" class="wallet-modal-input" />
              </div>
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Note (optional)</label>
              <input type="text" placeholder="Add a note" class="wallet-modal-input" />
            </div>
          </form>
        </div>
        <div class="wallet-modal-footer">
          <button class="wallet-modal-cancel" @click="closeTransferModal">Cancel</button>
          <button class="wallet-modal-submit">Send</button>
        </div>
      </div>
    </div>

    <!-- History Modal -->
    <div v-if="showHistoryModal" class="wallet-modal-backdrop" @click.self="closeHistoryModal">
      <div class="wallet-modal" ref="historyModalContent" style="max-width: 600px; width: 100%">
        <div class="wallet-modal-header">
          <h3 class="wallet-modal-title">Transaction History</h3>
          <button class="wallet-modal-close" @click="closeHistoryModal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="wallet-modal-body" style="max-height: 400px; overflow: auto">
          <!-- Placeholder: List of transactions -->
          <div class="wallet-list">
            <div class="wallet-list-item" v-for="n in 10" :key="n">
              <div class="wallet-list-left">
                <div class="wallet-list-icon blue">
                  <svg class="list-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a2 2 0 00-3 3v8a2 2 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="wallet-list-title">Transaction #{{ n }}</p>
                  <p class="wallet-list-desc">Details for transaction #{{ n }}</p>
                </div>
              </div>
              <div class="wallet-list-right">
                <p class="wallet-list-amount">₹{{ 1000 * n }}</p>
                <p class="wallet-list-meta">Just now</p>
              </div>
            </div>
          </div>
        </div>
        <div class="wallet-modal-footer">
          <button class="wallet-modal-cancel" @click="closeHistoryModal">Close</button>
        </div>
      </div>
    </div>

    <!-- Link Account Modal -->
    <div
      v-if="showLinkAccountModal"
      class="wallet-modal-backdrop"
      @click.self="closeLinkAccountModal"
    >
      <div class="wallet-modal" ref="linkAccountModalContent">
        <div class="wallet-modal-header">
          <h3 class="wallet-modal-title">Link New Account</h3>
          <button class="wallet-modal-close" @click="closeLinkAccountModal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="wallet-modal-body">
          <form class="wallet-modal-form">
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Account Type</label>
              <select class="wallet-modal-input">
                <option>Bank Account</option>
                <option>Credit Card</option>
                <option>UPI ID</option>
              </select>
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Account Number / UPI ID</label>
              <input
                type="text"
                placeholder="Enter account number or UPI ID"
                class="wallet-modal-input"
              />
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Account Holder Name</label>
              <input
                type="text"
                placeholder="Enter account holder name"
                class="wallet-modal-input"
              />
            </div>
          </form>
        </div>
        <div class="wallet-modal-footer">
          <button class="wallet-modal-cancel" @click="closeLinkAccountModal">Cancel</button>
          <button class="wallet-modal-submit">Link Account</button>
        </div>
      </div>
    </div>

    <!-- Manage Account Modal -->
    <div
      v-if="showManageAccountModal"
      class="wallet-modal-backdrop"
      @click.self="closeManageAccountModal"
    >
      <div class="wallet-modal" ref="manageAccountModalContent">
        <div class="wallet-modal-header">
          <h3 class="wallet-modal-title">Manage Account</h3>
          <button class="wallet-modal-close" @click="closeManageAccountModal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="wallet-modal-body">
          <div style="margin-bottom: 1rem"><strong>Account:</strong> {{ manageAccountName }}</div>
          <form class="wallet-modal-form">
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Set as Primary</label>
              <input type="checkbox" />
            </div>
            <div class="wallet-modal-group">
              <label class="wallet-modal-label">Remove Account</label>
              <button class="wallet-modal-cancel" style="color: #dc2626">Remove</button>
            </div>
          </form>
        </div>
        <div class="wallet-modal-footer">
          <button class="wallet-modal-cancel" @click="closeManageAccountModal">Close</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showAddMoneyModal = ref(false)
const showWithdrawModal = ref(false)
const showTransferModal = ref(false)
const showHistoryModal = ref(false)
const showLinkAccountModal = ref(false)
const showManageAccountModal = ref(false)
const manageAccountName = ref('')
const modalContent = ref<HTMLElement | null>(null)
const withdrawModalContent = ref<HTMLElement | null>(null)
const transferModalContent = ref<HTMLElement | null>(null)
const historyModalContent = ref<HTMLElement | null>(null)
const linkAccountModalContent = ref<HTMLElement | null>(null)
const manageAccountModalContent = ref<HTMLElement | null>(null)

function openAddMoneyModal() {
  showAddMoneyModal.value = true
  setTimeout(() => {
    if (modalContent.value) modalContent.value.focus()
  }, 10)
}
function closeAddMoneyModal() {
  showAddMoneyModal.value = false
}
function openWithdrawModal() {
  showWithdrawModal.value = true
  setTimeout(() => {
    if (withdrawModalContent.value) withdrawModalContent.value.focus()
  }, 10)
}
function closeWithdrawModal() {
  showWithdrawModal.value = false
}
function openTransferModal() {
  showTransferModal.value = true
  setTimeout(() => {
    if (transferModalContent.value) transferModalContent.value.focus()
  }, 10)
}
function closeTransferModal() {
  showTransferModal.value = false
}
function openHistoryModal() {
  showHistoryModal.value = true
  setTimeout(() => {
    if (historyModalContent.value) historyModalContent.value.focus()
  }, 10)
}
function closeHistoryModal() {
  showHistoryModal.value = false
}
function openLinkAccountModal() {
  showLinkAccountModal.value = true
  setTimeout(() => {
    if (linkAccountModalContent.value) linkAccountModalContent.value.focus()
  }, 10)
}
function closeLinkAccountModal() {
  showLinkAccountModal.value = false
}
function openManageAccountModal(name: string) {
  manageAccountName.value = name
  showManageAccountModal.value = true
  setTimeout(() => {
    if (manageAccountModalContent.value) manageAccountModalContent.value.focus()
  }, 10)
}
function closeManageAccountModal() {
  showManageAccountModal.value = false
  manageAccountName.value = ''
}
function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (showAddMoneyModal.value) closeAddMoneyModal()
    if (showWithdrawModal.value) closeWithdrawModal()
    if (showTransferModal.value) closeTransferModal()
    if (showHistoryModal.value) closeHistoryModal()
    if (showLinkAccountModal.value) closeLinkAccountModal()
    if (showManageAccountModal.value) closeManageAccountModal()
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped lang="scss">
.wallet-section {
  padding: 1.5rem;
  background: #f9fafb;
  min-height: 100vh;
}

.wallet-header {
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
.wallet-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
}
.wallet-desc {
  color: #6b7280;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.wallet-header-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 640px) {
    margin-top: 0;
  }
}
.wallet-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background 0.18s;
  &.primary {
    background: #2563eb;
    color: #fff;
    &:hover {
      background: #1d4ed8;
    }
  }
  &.outline {
    background: #fff;
    color: #2563eb;
    border: 1.5px solid #2563eb;
    &:hover {
      background: #f3f4f6;
    }
  }
}

.wallet-balance-card {
  background: linear-gradient(90deg, #2563eb 0%, #8b5cf6 100%);
  border-radius: 1.25rem;
  color: #fff;
  padding: 2rem 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.25rem 1rem;
  }
}
.balance-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.balance-label {
  color: #dbeafe;
  font-size: 1rem;
  font-weight: 500;
}
.balance-amount {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0.25rem 0;
}
.balance-sub {
  color: #dbeafe;
  font-size: 1rem;
}
.balance-icon-box {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 0.75rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.balance-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
}

.wallet-actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.wallet-action {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition:
    box-shadow 0.18s,
    border-color 0.18s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(16, 30, 54, 0.1);
    border-color: #c7d2fe;
  }
}
.action-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  &.green {
    background: #dcfce7;
  }
  &.red {
    background: #fee2e2;
  }
  &.blue {
    background: #dbeafe;
  }
  &.purple {
    background: #f3e8ff;
  }
  &.gray {
    background: #f3f4f6;
  }
}
.action-svg {
  width: 1.5rem;
  height: 1.5rem;
  &.green {
    color: #16a34a;
  }
  &.red {
    color: #dc2626;
  }
  &.blue {
    color: #2563eb;
  }
  &.purple {
    color: #9333ea;
  }
  &.gray {
    color: #6b7280;
  }
}
.action-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.1rem;
}
.action-desc {
  font-size: 0.95rem;
  color: #6b7280;
}

.wallet-main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
}
.wallet-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.wallet-card-header {
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
.wallet-link {
  color: #2563eb;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
}
.wallet-list {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.wallet-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 0.9rem 1rem;
}
.wallet-list-left {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.wallet-list-icon {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &.green {
    background: #dcfce7;
    color: #16a34a;
  }
  &.red {
    background: #fee2e2;
    color: #dc2626;
  }
  &.blue {
    background: #dbeafe;
    color: #2563eb;
  }
}
.list-svg {
  width: 1.1rem;
  height: 1.1rem;
}
.wallet-list-title {
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
}
.wallet-list-desc {
  font-size: 0.85rem;
  color: #6b7280;
}
.wallet-list-right {
  text-align: right;
}
.wallet-list-amount {
  font-size: 1rem;
  font-weight: 600;
  &.green {
    color: #16a34a;
  }
  &.red {
    color: #dc2626;
  }
}
.wallet-list-meta {
  font-size: 0.8rem;
  color: #6b7280;
}

.wallet-spending-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.spending-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.spending-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;
  color: #374151;
}
.spending-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  display: inline-block;
  &.blue {
    background: #2563eb;
  }
  &.green {
    background: #16a34a;
  }
  &.yellow {
    background: #f59e0b;
  }
  &.red {
    background: #dc2626;
  }
  &.purple {
    background: #9333ea;
  }
}
.spending-bar-group {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.spending-bar-bg {
  width: 6rem;
  height: 0.5rem;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}
.spending-bar {
  height: 100%;
  border-radius: 9999px;
  &.blue {
    background: #2563eb;
  }
  &.green {
    background: #16a34a;
  }
  &.yellow {
    background: #f59e0b;
  }
  &.red {
    background: #dc2626;
  }
  &.purple {
    background: #9333ea;
  }
}
.spending-amount {
  font-size: 0.95rem;
  font-weight: 500;
  color: #111827;
}
.spending-summary {
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
  padding-top: 0.7rem;
}
.spending-summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}
.spending-total {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
}
.spending-budget {
  color: #6b7280;
  font-size: 0.85rem;
}
.spending-remaining {
  color: #16a34a;
  font-size: 0.85rem;
  font-weight: 500;
}

.wallet-accounts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.wallet-account {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  &.add-account {
    border: 2px dashed #d1d5db;
    background: #f9fafb;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .add-account-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    .add-account-text {
      color: #6b7280;
      font-size: 0.95rem;
      font-weight: 500;
    }
  }
}
.account-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.account-info {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.account-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &.blue {
    background: #dbeafe;
    color: #2563eb;
  }
  &.green {
    background: #dcfce7;
    color: #16a34a;
  }
  &.gray {
    background: #f3f4f6;
    color: #6b7280;
  }
}
.account-svg {
  width: 1.2rem;
  height: 1.2rem;
}
.account-name {
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
}
.account-meta {
  font-size: 0.85rem;
  color: #6b7280;
}
.account-badge {
  padding: 0.25rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  &.primary {
    background: #d1fae5;
    color: #16a34a;
  }
}
.account-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
}
.account-balance {
  color: #374151;
  font-weight: 500;
}

// Responsive tweaks
@media (max-width: 900px) {
  .wallet-section {
    padding: 1rem;
  }
  .wallet-balance-card {
    padding: 1.25rem 1rem;
  }
}
@media (max-width: 600px) {
  .wallet-section {
    padding: 0.5rem;
  }
  .wallet-balance-card {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0.5rem;
  }
  .wallet-actions-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  .wallet-main-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .wallet-card {
    padding: 1rem 0.5rem;
  }
  .wallet-accounts-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}

.wallet-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.wallet-modal {
  background: #fff;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 32px 0 rgba(16, 30, 54, 0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  outline: none;
}
.wallet-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.wallet-modal-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
}
.wallet-modal-close {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.5rem;
  transition: background 0.18s;
  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
}
.wallet-modal-body {
  padding: 1.5rem;
}
.wallet-modal-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.wallet-modal-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.wallet-modal-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #374151;
}
.wallet-modal-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.wallet-modal-currency {
  position: absolute;
  left: 1rem;
  color: #6b7280;
  font-size: 1.1rem;
  pointer-events: none;
}
.wallet-modal-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.2rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #374151;
  background: #f9fafb;
  transition: border 0.18s;
  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    outline: none;
    background: #fff;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.08);
  }
}
.wallet-modal-quick-amounts {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.wallet-modal-quick-btn {
  padding: 0.4rem 0.7rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  color: #2563eb;
  background: #fff;
  cursor: pointer;
  transition:
    background 0.18s,
    border 0.18s;
  &:hover {
    background: #f3f4f6;
    border-color: #2563eb;
  }
}
.wallet-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #fafbfc;
}
.wallet-modal-cancel {
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.18s,
    border 0.18s;
  &:hover {
    background: #f3f4f6;
    border-color: #2563eb;
  }
}
.wallet-modal-submit {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #1d4ed8;
  }
}
</style>
