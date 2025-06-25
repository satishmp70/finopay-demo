<template>
  <section id="recharge" class="recharge-section">
    <!-- Main Header -->
    <div class="recharge-header">
      <h1 class="recharge-title">Mobile Recharge</h1>
    </div>
    <div class="recharge-grid">
      <!-- Main Recharge Form -->
      <div class="recharge-form-box">
        <h2 class="form-title">Mobile Recharge</h2>

        <form class="recharge-form" @submit.prevent="onSubmit">
          <!-- Mobile Number -->
          <div class="form-group">
            <label for="mobile" class="form-label"> Mobile Number </label>
            <div class="input-wrapper">
              <input
                id="mobile"
                v-model="mobile"
                type="tel"
                name="mobile"
                placeholder="Enter 10-digit mobile number"
                class="form-input"
                maxlength="10"
              />
              <div class="input-icon">
                <svg class="input-svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Operator Selection -->
          <div class="form-group">
            <label class="form-label"> Select Operator </label>
            <div class="operator-grid">
              <button
                v-for="op in operators"
                :key="op.value"
                type="button"
                :class="['operator-btn', { 'operator-selected': selectedOperator === op.value }]"
                @click="selectOperator(op.value)"
              >
                <div class="operator-icon" :class="op.bgClass">
                  <span class="operator-text" :class="op.textClass">{{ op.short }}</span>
                </div>
                <span class="operator-name">{{ op.name }}</span>
              </button>
            </div>
          </div>

          <!-- Circle Selection -->
          <div class="form-group">
            <label for="circle" class="form-label"> Select Circle </label>
            <div class="input-wrapper">
              <select id="circle" v-model="circle" name="circle" class="form-input">
                <option value="">Choose your circle</option>
                <option v-for="c in circles" :key="c.value" :value="c.value">{{ c.label }}</option>
              </select>
              <div class="input-icon">
                <svg
                  class="input-svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Amount Input -->
          <div class="form-group">
            <label for="amount" class="form-label"> Recharge Amount </label>
            <div class="input-wrapper">
              <span class="currency-symbol">₹</span>
              <input
                id="amount"
                v-model.number="amount"
                type="number"
                name="amount"
                placeholder="Enter amount"
                class="form-input amount-input"
                min="10"
                max="10000"
              />
            </div>
          </div>

          <!-- Browse Plans Button -->
          <button type="button" @click="plansModal = true" class="browse-plans-btn">
            Browse Plans
          </button>

          <!-- Proceed Button -->
          <button type="submit" class="proceed-btn">Proceed to Recharge</button>
        </form>
      </div>

      <!-- Sidebar -->
      <div class="recharge-sidebar">
        <!-- Quick Amounts -->
        <div class="sidebar-box">
          <h3 class="sidebar-title">Quick Amounts</h3>
          <div class="quick-amounts-grid">
            <button
              v-for="amt in quickAmounts"
              :key="amt"
              type="button"
              class="quick-amount-btn"
              @click="amount = amt"
            >
              ₹{{ amt }}
            </button>
          </div>
        </div>

        <!-- Recent Recharges -->
        <div class="sidebar-box">
          <h3 class="sidebar-title">Recent Recharges</h3>
          <div class="recent-recharges">
            <div v-for="rec in recentRecharges" :key="rec.mobile" class="recent-recharge-item">
              <div class="recent-recharge-info">
                <p class="recent-recharge-mobile">{{ rec.mobile }}</p>
                <p class="recent-recharge-meta">{{ rec.operator }} • {{ rec.time }}</p>
              </div>
              <div class="recent-recharge-actions">
                <p class="recent-recharge-amount">₹{{ rec.amount }}</p>
                <button class="repeat-btn" @click="repeatRecharge(rec.mobile, rec.amount)">
                  Repeat
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Offers -->
        <div class="sidebar-box">
          <h3 class="sidebar-title">Special Offers</h3>
          <div class="offers-list">
            <div class="offer-item offer-cashback">
              <p class="offer-title">Cashback Offer</p>
              <p class="offer-desc">Get 2% cashback on recharges above ₹200</p>
            </div>

            <div class="offer-item offer-weekend">
              <p class="offer-title">Weekend Special</p>
              <p class="offer-desc">Extra 5% off on all weekend recharges</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Plans Modal -->
    <div v-if="plansModal" class="plans-modal-backdrop" @click.self="plansModal = false">
      <div class="plans-modal" @click.stop>
        <!-- Modal Header -->
        <div class="plans-modal-header">
          <h3 class="plans-modal-title">Available Plans</h3>
          <button class="close-modal-btn" @click="plansModal = false">
            <svg class="close-modal-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="plans-modal-content">
          <div class="plans-grid">
            <div v-for="plan in plans" :key="plan.amount" class="plan-card">
              <div class="plan-card-header">
                <div>
                  <h4 class="plan-amount">₹{{ plan.amount }}</h4>
                  <p class="plan-validity">{{ plan.validity }}</p>
                </div>
                <span v-if="plan.tag" :class="['plan-tag', plan.tagClass]">{{ plan.tag }}</span>
              </div>
              <ul class="plan-features">
                <li v-for="feature in plan.features" :key="feature">• {{ feature }}</li>
              </ul>
              <button class="select-plan-btn" @click="selectPlan(plan.amount)">Select Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobile = ref('')
const selectedOperator = ref('')
const circle = ref('')
const amount = ref<number | null>(null)
const plansModal = ref(false)

const operators = [
  {
    value: 'jio',
    name: 'Jio',
    short: 'JIO',
    bgClass: 'operator-bg-jio',
    textClass: 'operator-text-jio',
  },
  {
    value: 'vi',
    name: 'Vi',
    short: 'VI',
    bgClass: 'operator-bg-vi',
    textClass: 'operator-text-vi',
  },
  {
    value: 'airtel',
    name: 'Airtel',
    short: 'AT&T',
    bgClass: 'operator-bg-airtel',
    textClass: 'operator-text-airtel',
  },
  {
    value: 'bsnl',
    name: 'BSNL',
    short: 'BSNL',
    bgClass: 'operator-bg-bsnl',
    textClass: 'operator-text-bsnl',
  },
]

const circles = [
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'kolkata', label: 'Kolkata' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'rajasthan', label: 'Rajasthan' },
]

const quickAmounts = [99, 149, 199, 299, 399, 499]

const recentRecharges = [
  { mobile: '9876543210', operator: 'Jio', time: '2 hours ago', amount: 299 },
  { mobile: '9123456789', operator: 'Airtel', time: '1 day ago', amount: 199 },
  { mobile: '9988776655', operator: 'Vi', time: '3 days ago', amount: 149 },
]

const plans = [
  {
    amount: 149,
    validity: '28 Days',
    features: ['2GB/Day Data', 'Unlimited Calls', '100 SMS/Day', 'Free Roaming'],
    tag: 'Popular',
    tagClass: 'plan-tag-popular',
  },
  {
    amount: 299,
    validity: '56 Days',
    features: ['1.5GB/Day Data', 'Unlimited Calls', '100 SMS/Day', 'Free Roaming'],
  },
  {
    amount: 399,
    validity: '84 Days',
    features: ['2.5GB/Day Data', 'Unlimited Calls', '100 SMS/Day', 'Free Roaming'],
    tag: 'Best Value',
    tagClass: 'plan-tag-best',
  },
  {
    amount: 599,
    validity: '84 Days',
    features: ['3GB/Day Data', 'Unlimited Calls', '100 SMS/Day', 'Disney+ Hotstar'],
  },
  {
    amount: 999,
    validity: '365 Days',
    features: ['2GB/Day Data', 'Unlimited Calls', '100 SMS/Day', 'All OTT Apps'],
    tag: 'Annual',
    tagClass: 'plan-tag-annual',
  },
  {
    amount: 1499,
    validity: '365 Days',
    features: ['3GB/Day Data', 'Unlimited Calls', '100 SMS/Day', 'Premium OTT Bundle'],
    tag: 'Premium',
    tagClass: 'plan-tag-premium',
  },
]

function selectOperator(value: string) {
  selectedOperator.value = value
}

function selectPlan(value: number) {
  amount.value = value
  plansModal.value = false
}

function repeatRecharge(mobileNum: string, amt: number) {
  mobile.value = mobileNum
  amount.value = amt
}

function onSubmit() {
  // Handle form submission
  console.log('Recharge submitted:', {
    mobile: mobile.value,
    operator: selectedOperator.value,
    circle: circle.value,
    amount: amount.value,
  })
}
</script>

<style scoped lang="scss">
.recharge-section {
  padding: 1rem;
}

.recharge-header {
  margin-bottom: 2rem;
}

.recharge-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
}

.recharge-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
}

.recharge-form-box,
.sidebar-box {
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #f1f3f5;
  padding: 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.form-title,
.sidebar-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1.25rem;
}

.recharge-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: #495057;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  font-size: 0.95rem;
  color: #495057;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
}

select.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 2.5rem;
}

.amount-input {
  padding-left: 2.5rem;
}

.currency-symbol,
.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  z-index: 1;
}

.currency-symbol {
  left: 1rem;
  color: #495057;
}

.input-icon {
  right: 1rem;
  color: #adb5bd;
}

.recharge-section {
  padding-bottom: 0 !important; // remove extra bottom space
}

.recharge-form-box {
  margin-bottom: 0 !important; // no extra margin below form
}

.input-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;

  .input-svg {
    width: 1.2rem;
    height: 1.2rem;
  }
}

.operator-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.operator-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  background-color: white;
  cursor: pointer;
  transition:
    all 0.2s ease,
    transform 0.1s ease;

  &:hover {
    border-color: #0d6efd;
    background-color: #f8f9fa;
  }

  &.operator-selected {
    border-color: #0d6efd;
    background-color: #e7f1ff;
  }

  &:active {
    transform: scale(0.98);
  }
}

.operator-icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4rem;
  font-weight: 700;
  font-size: 0.8rem;
}

.operator-bg-jio {
  background-color: #ffe3e3;
}
.operator-text-jio {
  color: #d90429;
}

.operator-bg-vi {
  background-color: #ffe3e3;
}
.operator-text-vi {
  color: #d90429;
}

.operator-bg-airtel {
  background-color: #ffeedd;
}
.operator-text-airtel {
  color: #f77f00;
}

.operator-bg-bsnl {
  background-color: #e7f1ff;
}
.operator-text-bsnl {
  color: #0d6efd;
}

.operator-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: #495057;
}

.browse-plans-btn {
  width: 100%;
  background-color: #f8f9fa;
  color: #343a40;
  padding: 0.75rem 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e9ecef;
  }
}

.proceed-btn {
  width: 100%;
  background-color: #0d6efd;
  color: white;
  padding: 0.75rem 1rem;
  border: 1px solid #0d6efd;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
}

.recharge-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quick-amounts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.quick-amount-btn {
  padding: 0.4rem 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #495057;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    border-color: #0d6efd;
    color: #0d6efd;
  }
}

.recent-recharges {
  display: flex;
  flex-direction: column;
}

.recent-recharge-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
}

.recent-recharge-info {
  .recent-recharge-mobile {
    font-size: 0.9rem;
    font-weight: 500;
    color: #212529;
  }

  .recent-recharge-meta {
    font-size: 0.75rem;
    color: #6c757d;
  }
}

.recent-recharge-actions {
  text-align: right;

  .recent-recharge-amount {
    font-size: 0.9rem;
    font-weight: 600;
    color: #212529;
  }

  .repeat-btn {
    font-size: 0.75rem;
    font-weight: 600;
    color: #0d6efd;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem 0;

    &:hover {
      text-decoration: underline;
    }
  }
}

.offers-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.offer-item {
  padding: 0.875rem;
  border-radius: 0.375rem;
  border: 1px solid;

  .offer-title {
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .offer-desc {
    font-size: 0.75rem;
  }
}

.offer-cashback {
  background-color: #e6fffa;
  border-color: #b2f5ea;

  .offer-title {
    color: #2c7a7b;
  }

  .offer-desc {
    color: #38b2ac;
  }
}

.offer-weekend {
  background-color: #e7f1ff;
  border-color: #d1e3ff;

  .offer-title {
    color: #004085;
  }

  .offer-desc {
    color: #0d6efd;
  }
}

// Modal styles
.plans-modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.plans-modal {
  background-color: white;
  border-radius: 0.75rem;
  max-width: 64rem;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;

  .plans-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid #e9ecef;

    .plans-modal-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #212529;
    }

    .close-modal-btn {
      color: #adb5bd;
      background: none;
      border: none;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: #495057;
        background-color: #f8f9fa;
      }

      .close-modal-svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  .plans-modal-content {
    padding: 1.5rem;
    overflow-y: auto;
    max-height: calc(90vh - 74px); // Adjust based on header height

    .plans-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}

.plan-card {
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  padding: 1rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #0d6efd;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.07),
      0 2px 4px -2px rgba(0, 0, 0, 0.07);
  }

  .plan-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;

    .plan-amount {
      font-size: 1.125rem;
      font-weight: 600;
      color: #212529;
    }

    .plan-validity {
      font-size: 0.875rem;
      color: #6c757d;
    }
  }

  .plan-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
    border-radius: 9999px;
    font-weight: 600;
  }

  .plan-tag-popular {
    background-color: #e6fffa;
    color: #2c7a7b;
  }

  .plan-tag-best {
    background-color: #e7f1ff;
    color: #004085;
  }

  .plan-tag-annual {
    background-color: #f3e8ff;
    color: #6f42c1;
  }

  .plan-tag-premium {
    background-color: #fff3cd;
    color: #856404;
  }

  .plan-features {
    font-size: 0.875rem;
    color: #6c757d;
    margin: 0 0 1rem 0;
    padding-left: 1.25rem;
    list-style-type: none;

    li {
      margin-bottom: 0.25rem;
      position: relative;
      &::before {
        content: '•';
        position: absolute;
        left: -1.25rem;
        color: #0d6efd;
      }
    }
  }

  .select-plan-btn {
    width: 100%;
    background-color: #0d6efd;
    color: white;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #0b5ed7;
    }
  }
}
</style>
