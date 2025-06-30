<template>
  <section class="signup-section">
    <div class="signup-section__container">
      <!-- Left: Illustration and Text -->
      <div class="signup-section__info-card">
        <div class="signup-section__icon-container animated-pulse">
          <div class="signup-section__icon">💳</div>
        </div>
        <h3 class="signup-section__info-title">One Place for all Solution</h3>
        <div class="signup-section__info-accent"></div>
        <p class="signup-section__info-desc">
          Your trusted digital payment companion for all financial needs
        </p>
      </div>
      <!-- Right: Form Card -->
      <div class="signup-section__form-outer">
        <div class="signup-section__logo">
          <h1 class="signup-section__logo-text">Finopay</h1>
        </div>
        <div class="signup-section__form-card">
          <h2 class="signup-section__form-title">WELCOME BACK</h2>
          <p class="signup-section__form-desc">Please login to your account</p>

          <div class="signup-form__scroll-container">
            <!-- Step 1 -->
            <div v-if="step === 1" class="signup-form__step">
              <div class="signup-form__group">
                <label class="signup-form__label">User Type</label>
                <select v-model="form.userType" class="signup-form__select">
                  <option value="">Select User Type</option>
                  <option>Back Office</option>
                  <option>White Label</option>
                  <option>Master Distributor</option>
                  <option>Area Distributor</option>
                  <option>Retailer</option>
                </select>
              </div>
              <div class="signup-form__group">
                <label class="signup-form__label">Entity Type</label>
                <select v-model="form.entityType" class="signup-form__select">
                  <option value="">Select Entity Type</option>
                  <option>Individual</option>
                  <option>Employee</option>
                </select>
              </div>
              <button @click="goToStep2" class="signup-form__button signup-form__button--primary">
                CONTINUE
              </button>
              <div class="signup-form__footer">
                Already have an Account? <router-link to="/login">Login</router-link>
              </div>
            </div>

            <!-- Step 2 -->
            <div v-if="step === 2" class="signup-form__step">
              <div class="signup-form__summary">
                <p><strong>User Type:</strong> {{ form.userType }}</p>
                <p><strong>Entity Type:</strong> {{ form.entityType }}</p>
              </div>
              <div class="signup-form__group">
                <label class="signup-form__label">Full Name *</label>
                <input
                  type="text"
                  v-model="form.fullName"
                  class="signup-form__input"
                  placeholder="Enter full name"
                />
              </div>
              <div class="signup-form__group">
                <label class="signup-form__label">Mobile Number *</label>
                <input
                  type="tel"
                  v-model="form.mobileNumber"
                  class="signup-form__input"
                  placeholder="Enter mobile number"
                />
              </div>
              <div class="signup-form__group">
                <label class="signup-form__label">Email ID *</label>
                <input
                  type="email"
                  v-model="form.emailId"
                  class="signup-form__input"
                  placeholder="Enter email address"
                />
              </div>
              <div class="signup-form__group">
                <label class="signup-form__label">Pincode (Optional)</label>
                <input
                  type="text"
                  v-model="form.pincode"
                  class="signup-form__input"
                  placeholder="Enter pincode"
                />
              </div>
              <div class="signup-form__group">
                <label class="signup-form__label">State *</label>
                <select v-model="form.state" class="signup-form__select">
                  <option value="">Select state</option>
                  <option>Gujarat</option>
                  <option>Maharashtra</option>
                  <option>Bihar</option>
                  <option>Rajasthan</option>
                  <option>Uttar Pradesh</option>
                </select>
              </div>
              <div class="signup-form__actions">
                <button
                  @click="step = 1"
                  class="signup-form__button signup-form__button--secondary"
                >
                  BACK
                </button>
                <button
                  @click="submitForm"
                  class="signup-form__button signup-form__button--primary"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const step = ref(1)
const form = reactive({
  userType: '',
  entityType: '',
  fullName: '',
  mobileNumber: '',
  emailId: '',
  pincode: '',
  state: '',
})

function goToStep2() {
  if (!form.userType || !form.entityType) {
    alert('Please select both User Type and Entity Type.')
    return
  }
  step.value = 2
}

function submitForm() {
  if (!form.fullName || !form.mobileNumber || !form.emailId || !form.state) {
    alert('Please fill all required fields.')
    return
  }
  // Here you would send the form data to your backend
  // For now, just show a success message
  alert('Registration submitted successfully!')
  // Optionally reset form or redirect
}
</script>

<style scoped lang="scss">
@mixin lg {
  @media (min-width: 1024px) {
    @content;
  }
}
@mixin sm {
  @media (min-width: 640px) {
    @content;
  }
}
html,
body {
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100vw;
  max-width: 100vw;
}
.signup-section {
  height: 100vh;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
  &__container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    @include lg {
      grid-template-columns: 3fr 2fr;
    }
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    background: #fff;
    box-sizing: border-box;
  }
  &__info-card {
    position: relative;
    background: linear-gradient(120deg, #6d28d9 0%, #9333ea 50%, #ec4899 100%);
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 40%;
      width: 420px;
      height: 420px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%);
      filter: blur(24px);
      transform: translate(-50%, -50%);
      z-index: 0;
      pointer-events: none;
    }
  }
  &__icon-container {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 32px rgba(80, 0, 80, 0.1);
    position: relative;
    z-index: 2;
    animation: pulse 2.5s infinite;
  }
  &__icon {
    font-size: 4rem;
  }
  &__info-title {
    font-size: 2.7rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 2;
  }
  &__info-accent {
    width: 80px;
    height: 5px;
    margin: 0 auto 1.2rem auto;
    border-radius: 4px;
    background: linear-gradient(90deg, #fff 0%, #ec4899 100%);
    opacity: 0.7;
    z-index: 2;
  }
  &__info-desc {
    font-size: 1.18rem;
    max-width: 420px;
    line-height: 1.6;
    opacity: 0.93;
    z-index: 2;
  }
  &__form-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #fff;
    min-width: 0;
    box-sizing: border-box;
  }
  &__logo {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  &__logo-text {
    font-size: 2.2rem;
    font-weight: 700;
    color: #6d28d9;
  }
  &__form-card {
    background: #fff7fa;
    border-radius: 1.25rem;
    box-shadow: 0 8px 32px rgba(80, 0, 80, 0.06);
    padding: 2.5rem 2rem 2rem 2rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 620px;
    max-height: 85vh;
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden;
  }
  &__form-title {
    color: #22223b;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
  }
  &__form-desc {
    text-align: center;
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }
}
.signup-form__scroll-container {
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  margin-right: -1.5rem;
  padding-right: 1.5rem;
  padding-left: 0.5rem;
  min-width: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 6px;
  }
}
.signup-form__step {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  min-width: 0;
}
.signup-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.signup-form__label {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #22223b;
}
.signup-form__input,
.signup-form__select {
  width: 100%;
  border: none;
  border-bottom: 2px solid #c7b7e6;
  border-radius: 0;
  padding: 0.7rem 0.2rem;
  font-size: 1rem;
  background: transparent;
  color: #22223b;
  margin-bottom: 0.5rem;
  transition: border 0.2s;
  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
}
.signup-form__button {
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: #3f347e;
  color: #fff;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(80, 0, 80, 0.08);
  transition:
    background 0.2s,
    opacity 0.2s;
  &--primary {
    background: #3f347e;
    color: #fff;
    &:hover {
      opacity: 0.9;
      background: #4f46e5;
    }
  }
  &--secondary {
    background: #fff;
    color: #6b7280;
    border: 1px solid #d1d5db;
    &:hover {
      background: #f3f4f6;
    }
  }
}
.signup-form__actions {
  display: flex;
  gap: 0.75rem;
}
.signup-form__summary {
  background: #f3f4f6;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  color: #374151;
  margin-bottom: 1rem;
}
.signup-form__footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.98rem;
  color: #6b7280;
  a {
    color: #3f347e;
    font-weight: 600;
    text-decoration: underline;
    margin-left: 0.2em;
  }
}
// Responsive adjustments
@media (max-width: 1023px) {
  .signup-section__container {
    grid-template-columns: 1fr;
    height: auto;
  }
  .signup-section__info-card {
    height: 320px;
    min-height: 220px;
    padding: 1.5rem 0.5rem;
  }
  .signup-section__form-outer {
    height: auto;
    min-height: 0;
    padding-bottom: 2rem;
  }
  .signup-section__form-card {
    height: auto;
    max-height: 90vh;
    min-height: 0;
  }
}
@media (max-width: 600px) {
  .signup-section__info-title {
    font-size: 1.2rem;
  }
  .signup-section__form-card {
    padding: 1.2rem 0.5rem 1rem 0.5rem;
    max-width: 98vw;
  }
}
@keyframes pulse {
  0%,
  100% {
    box-shadow:
      0 8px 32px rgba(80, 0, 80, 0.1),
      0 0 0 0 rgba(147, 51, 234, 0.18);
  }
  50% {
    box-shadow:
      0 8px 32px rgba(80, 0, 80, 0.1),
      0 0 0 18px rgba(147, 51, 234, 0.1);
  }
}
.animated-pulse {
  animation: pulse 2.5s infinite;
}
</style>
