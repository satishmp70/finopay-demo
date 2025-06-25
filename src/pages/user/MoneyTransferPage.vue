<template>
  <div class="money-transfer-section">
    <!-- Header -->
    <div class="transfer-header">
      <h1 class="transfer-title">Send Money</h1>
    </div>

    <div class="transfer-grid">
      <!-- Main Transfer Form -->
      <div class="transfer-form-box">
        <form class="transfer-form" @submit.prevent="onSubmit">
          <!-- Recipient Details -->
          <div class="form-section">
            <h3 class="section-title">Recipient Details</h3>

            <div class="form-grid">
              <div>
                <label for="recipient-name" class="form-label">Full Name</label>
                <input
                  type="text"
                  id="recipient-name"
                  v-model="recipientName"
                  name="recipient-name"
                  placeholder="Enter recipient's full name"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label for="mobile-number" class="form-label">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile-number"
                  v-model="recipientMobile"
                  name="mobile-number"
                  placeholder="Enter 10-digit mobile number"
                  class="form-input"
                  maxlength="10"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Bank Details -->
          <div class="form-section">
            <h3 class="section-title">Bank Details</h3>

            <div class="form-section-list">
              <div>
                <label for="account-number" class="form-label">Account Number</label>
                <input
                  type="text"
                  id="account-number"
                  v-model="accountNumber"
                  name="account-number"
                  placeholder="Enter bank account number"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label for="confirm-account" class="form-label">Confirm Account Number</label>
                <input
                  type="text"
                  id="confirm-account"
                  v-model="confirmAccount"
                  name="confirm-account"
                  placeholder="Re-enter account number"
                  class="form-input"
                  required
                  @blur="validateAccountMatch"
                />
              </div>

              <div>
                <label for="ifsc-code" class="form-label">IFSC Code</label>
                <div class="input-relative">
                  <input
                    type="text"
                    id="ifsc-code"
                    v-model="ifscCode"
                    name="ifsc-code"
                    placeholder="Enter IFSC code"
                    class="form-input"
                    required
                  />
                  <button type="button" @click="openBankSearchModal" class="find-ifsc-btn">
                    Find IFSC
                  </button>
                </div>
              </div>

              <div>
                <label for="bank-name" class="form-label">Bank Name</label>
                <input
                  type="text"
                  id="bank-name"
                  v-model="bankName"
                  name="bank-name"
                  placeholder="Bank name will auto-populate"
                  class="form-input form-input-readonly"
                  readonly
                />
              </div>
            </div>
          </div>

          <!-- Transfer Amount -->
          <div class="form-section">
            <label for="transfer-amount" class="form-label">Transfer Amount</label>
            <div class="input-relative">
              <span class="currency-symbol">₹</span>
              <input
                type="number"
                id="transfer-amount"
                v-model.number="transferAmount"
                name="transfer-amount"
                placeholder="Enter amount to transfer"
                class="form-input amount-input"
                min="100"
                max="200000"
                required
              />
            </div>
            <p class="amount-hint">Minimum: ₹100 | Maximum: ₹2,00,000 per transaction</p>
          </div>

          <!-- Transfer Purpose -->
          <div class="form-section">
            <label for="purpose" class="form-label">Transfer Purpose</label>
            <select id="purpose" v-model="purpose" name="purpose" class="form-input" required>
              <option value="">Select purpose</option>
              <option value="family-support">Family Support</option>
              <option value="education">Education</option>
              <option value="medical">Medical</option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
              <option value="gift">Gift</option>
              <option value="other">Other</option>
            </select>
          </div>

          <!-- Charges Information -->
          <div class="charges-info">
            <div class="charges-info-content">
              <svg class="charges-info-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>
                <h4 class="charges-title">Transfer Charges</h4>
                <p class="charges-desc">IMPS: ₹5 + GST | NEFT: ₹3 + GST | UPI: Free up to ₹1,000</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button type="button" @click="verifyAccount" class="verify-btn">Verify Account</button>
            <button type="submit" class="send-money-btn">Send Money</button>
          </div>
        </form>
      </div>

      <!-- Sidebar as component -->
      <TransferSidebar
        :quickContacts="quickContacts"
        :recentTransfers="recentTransfers"
        @quick-transfer="(contact) => quickTransfer(contact.name, contact.mobile)"
      />
    </div>

    <!-- Bank Search Modal as component -->
    <BankIfscModal
      :show="bankModal"
      :search="bankSearch"
      :banks="banks"
      @close="closeBankSearchModal"
      @select="(bank) => selectBank(bank.ifsc, bank.name)"
      @update:search="(val) => (bankSearch = val)"
    />
  </div>
</template>

<script setup lang="ts">
import TransferSidebar from '@/components/layout/TransferSidebar.vue'
import BankIfscModal from '@/components/layout/BankIfscModal.vue'
import { useMoneyTransfer } from '@/composables/useMoneyTransfer'

const {
  recipientName,
  recipientMobile,
  accountNumber,
  confirmAccount,
  ifscCode,
  bankName,
  transferAmount,
  purpose,
  bankModal,
  bankSearch,
  quickContacts,
  recentTransfers,
  banks,
  openBankSearchModal,
  closeBankSearchModal,
  selectBank,
  quickTransfer,
  verifyAccount,
  validateAccountMatch,
  onSubmit,
} = useMoneyTransfer()
</script>

<style scoped lang="scss">
.money-transfer-section {
  background-color: #f9fafb;
  padding: 1rem;
}

.transfer-header {
  margin-bottom: 2rem;
}

.transfer-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
}

.transfer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
}

.transfer-form-box {
  background-color: #fff;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px 0 rgba(16, 30, 54, 0.07);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  margin-bottom: 0;
  overflow-x: hidden;
  @media (max-width: 600px) {
    padding: 1.25rem 0.75rem;
  }
}

.transfer-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-section {
  padding: 0;
  background-color: transparent;
  margin-bottom: 1.1rem;
}

.section-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.1rem;
  letter-spacing: 0.01em;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.form-section-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-label {
  display: block;
  font-size: 0.93rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.35rem;
}

.form-input,
.amount-input,
select.form-input {
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  font-size: 1.05rem;
  color: #374151;
  background-color: #f9fafb;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    background-color: white;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
}

.form-input.error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

select.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.form-input-readonly {
  background-color: #f3f4f6;
  color: #6b7280;
}

.input-relative {
  position: relative;
  display: flex;
  align-items: center;
}
.currency-symbol {
  position: absolute;
  left: 1.1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  font-size: 1.1rem;
  pointer-events: none;
}
.amount-input {
  padding-left: 2.1rem; // enough for ₹ icon
}

.amount-hint {
  margin-top: 0.35rem;
  font-size: 0.89rem;
  color: #6b7280;
}

.find-ifsc-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #3b82f6;
  font-size: 0.95rem;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    color: #2563eb;
  }
}

.charges-info {
  background-color: #eff6ff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.charges-info-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.charges-info-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #3b82f6;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.charges-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 0.25rem;
}

.charges-desc {
  font-size: 0.875rem;
  color: #1d4ed8;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
}

.verify-btn,
.send-money-btn {
  flex: 1;
  padding: 0.875rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s;
  box-shadow: 0 1px 2px 0 rgba(16, 30, 54, 0.04);
}

.verify-btn {
  background-color: #4b5563;
  color: white;
  &:hover,
  &:focus {
    background-color: #374151;
  }
}

.send-money-btn {
  background-color: #3b82f6;
  color: white;
  &:hover,
  &:focus {
    background-color: #2563eb;
  }
}

// Sidebar card polish
.transfer-sidebar .sidebar-box {
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px 0 rgba(16, 30, 54, 0.06);
  padding: 1.25rem 1.25rem 1.1rem 1.25rem;
  margin-bottom: 1.25rem;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.transfer-sidebar .sidebar-box:hover {
  box-shadow: 0 4px 16px 0 rgba(16, 30, 54, 0.1);
  border-color: #c7d2fe;
}

// Sidebar alignment
.transfer-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sidebar-box {
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.sidebar-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

// Quick Transfer
.quick-transfer-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-transfer-btn {
  border: 1px solid #e5e7eb;
  background-color: white;

  &:hover {
    background-color: #f9fafb;
  }
}

.quick-transfer-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
}

.quick-avatar-blue {
  background-color: #dbeafe;
}

.quick-text-blue {
  color: #2563eb;
}

.quick-avatar-green {
  background-color: #dcfce7;
}

.quick-text-green {
  color: #16a34a;
}

.quick-avatar-purple {
  background-color: #f3e8ff;
}

.quick-text-purple {
  color: #9333ea;
}

.quick-transfer-info {
  text-align: left;
}

.quick-transfer-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.quick-transfer-mobile {
  font-size: 0.75rem;
  color: #6b7280;
}

// Recent Transfers
.recent-transfers-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.recent-transfer-item {
  background-color: #f9fafb;
}

.recent-transfer-left {
  display: flex;
  align-items: center;
}

.recent-transfer-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

.icon-bg-green {
  background-color: #dcfce7;
}

.icon-color-green {
  color: #16a34a;
}

.icon-bg-blue {
  background-color: #dbeafe;
}

.icon-color-blue {
  color: #2563eb;
}

.icon-bg-orange {
  background-color: #fed7aa;
}

.icon-color-orange {
  color: #ea580c;
}

.recent-transfer-svg {
  width: 1rem;
  height: 1rem;
}

.recent-transfer-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.recent-transfer-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.recent-transfer-right {
  text-align: right;
}

.recent-transfer-amount {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.recent-transfer-status {
  font-size: 0.75rem;
}

.status-success {
  color: #16a34a;
}

.status-pending {
  color: #ca8a04;
}

// Transfer Limits
.transfer-limits-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.transfer-limit-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.transfer-limit-label {
  font-size: 0.875rem;
  color: #6b7280;
}

.transfer-limit-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.transfer-limit-remaining {
  color: #16a34a;
}

.transfer-limit-bar {
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.5rem;
  margin-top: 0.5rem;
}

.transfer-limit-progress {
  background-color: #3b82f6;
  height: 0.5rem;
  border-radius: 9999px;
}

// Support
.support-desc {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.support-buttons {
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
  background: none;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
}

.support-btn-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

// Responsive: make all form fields/buttons full width on mobile
@media (max-width: 600px) {
  .form-input,
  .amount-input,
  .verify-btn,
  .send-money-btn {
    width: 100%;
    min-width: 0;
  }
  .form-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
