<template>
  <div class="payment-success-page">
    <div class="success-box">
      <div class="success-header">
        <div class="success-icon">
          <svg class="success-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 class="success-title">Payment Successful!</h2>
        <p class="success-desc">Your payment has been processed successfully with finopay</p>
      </div>
      <div class="success-details">
        <div class="success-detail-row">
          <span class="detail-label">Transaction ID</span>
          <span class="detail-value">#TXN123456789</span>
        </div>
        <div class="success-detail-row">
          <span class="detail-label">Amount</span>
          <span class="detail-value">₹1,299.00</span>
        </div>
        <div class="success-detail-row">
          <span class="detail-label">Date &amp; Time</span>
          <span class="detail-value">Dec 15, 2023 at 2:30 PM</span>
        </div>
      </div>
      <div class="success-actions">
        <button class="download-btn">Download Receipt</button>
        <button class="continue-btn">Continue Shopping</button>
      </div>
    </div>
    <div class="success-illustration">
      <img
        src="https://dms.mydukaan.io/original/webp/media/59c12611-486e-4eaa-b2a9-f1ebbe6ec5ee.png"
        alt="Design"
        class="illustration-img"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
// You can add props or logic as needed
</script>
<style scoped lang="scss">
.payment-success-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: #f6f8fa;
  gap: 48px;
  padding: 40px 0;
}
.success-box {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(60, 72, 88, 0.1);
  padding: 40px 36px 32px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
}
.success-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}
.success-icon {
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.success-icon-svg {
  width: 36px;
  height: 36px;
  color: #fff;
  stroke-width: 3px;
}
.success-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 6px;
}
.success-desc {
  color: #5c6bc0;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.success-details {
  width: 100%;
  margin-bottom: 24px;
}
.success-detail-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e3eafc;
  font-size: 1.05rem;
  &:last-child {
    border-bottom: none;
  }
}
.detail-label {
  color: #7986cb;
  font-weight: 500;
}
.detail-value {
  color: #283593;
  font-weight: 600;
}
.success-actions {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}
.download-btn {
  background: #e8eaf6;
  color: #3f51b5;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c5cae9;
  }
}
.continue-btn {
  background: linear-gradient(90deg, #3949ab 0%, #1e88e5 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #1e88e5 0%, #3949ab 100%);
  }
}
.success-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
}
.illustration-img {
  max-width: 320px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(60, 72, 88, 0.1);
}
@media (max-width: 900px) {
  .payment-success-page {
    flex-direction: column;
    gap: 24px;
    padding: 24px 0;
  }
  .success-illustration {
    margin-top: 16px;
  }
}
@media (max-width: 768px) {
  .payment-success-container {
    padding: 1.5rem 0.5rem;
    text-align: center;
  }
}
@media (max-width: 480px) {
  .payment-success-container {
    padding: 1rem 0.25rem;
    font-size: 0.98rem;
    .success-icon {
      font-size: 2.5rem;
    }
  }
}
</style>
