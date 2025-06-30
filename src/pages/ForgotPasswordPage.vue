<template>
  <section class="forgot-page-grid">
    <!-- Left Section (Illustration) -->
    <div class="forgot-page-grid__info-card">
      <div class="forgot-page-grid__icon-container">
        <div class="forgot-page-grid__icon">💳</div>
      </div>
      <h3 class="forgot-page-grid__info-title">One Place for all Solution</h3>
      <div class="forgot-page-grid__info-accent"></div>
      <p class="forgot-page-grid__info-desc">
        Your trusted digital payment companion for all financial needs
      </p>
    </div>

    <!-- Right Section (Form) -->
    <div class="forgot-page-grid__form-outer">
      <div class="forgot-page-grid__logo">
        <h1 class="forgot-page-grid__logo-text">Finopay</h1>
      </div>
      <div class="forgot-page-grid__form-card">
        <h2 class="forgot-page-grid__title">Forgot Password</h2>
        <p class="forgot-page-grid__subtitle">
          Remembered the password?
          <router-link to="/login" class="forgot-page-grid__link">Sign In</router-link>
        </p>
        <form class="forgot-page-grid__form" @submit.prevent="onSend">
          <div class="forgot-page-grid__group">
            <label class="forgot-page-grid__label">User Name</label>
            <div class="forgot-page-grid__input-wrapper">
              <input
                type="text"
                v-model="username"
                class="forgot-page-grid__input"
                placeholder="Enter Your User Name"
                required
              />
              <span class="forgot-page-grid__icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="#9333ea"
                    d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.217l-7.51 5.006a1 1 0 0 1-1.08 0L4 9.217V17.5a.5.5 0 0 0 .5.5h15Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button type="submit" class="forgot-page-grid__button">SEND</button>
        </form>
        <div class="forgot-page-grid__terms">
          By signing up, you agree to Finopay
          <a href="#" class="forgot-page-grid__link">Terms of Conditions</a> and
          <a href="#" class="forgot-page-grid__link">Privacy Policy</a>.
        </div>
        <div class="forgot-page-grid__contact">care@finopay.in</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')

function onSend() {
  // Implement your forgot password logic here
  alert('Password reset link sent to your email (demo)')
}
</script>

<style scoped lang="scss">
.forgot-page-grid {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 1024px) {
    grid-template-columns: 3fr 2fr;
  }
}

.forgot-page-grid__info-card {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(120deg, #6d28d9 0%, #9333ea 50%, #ec4899 100%);
  color: #fff;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;

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

.forgot-page-grid__icon-container {
  width: 130px;
  height: 130px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 32px rgba(80, 0, 80, 0.1);
}

.forgot-page-grid__icon {
  font-size: 4rem;
}

.forgot-page-grid__info-title {
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-shadow: 0 2px 8px rgba(80, 0, 80, 0.12);
}

.forgot-page-grid__info-accent {
  width: 80px;
  height: 5px;
  margin: 0 auto 1.2rem auto;
  border-radius: 4px;
  background: linear-gradient(90deg, #fff 0%, #ec4899 100%);
  opacity: 0.7;
}

.forgot-page-grid__info-desc {
  font-size: 1.18rem;
  max-width: 420px;
  line-height: 1.6;
  opacity: 0.93;
}

.forgot-page-grid__form-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fff;
  padding: 2rem;
  box-sizing: border-box;
}
.forgot-page-grid__logo {
  text-align: center;
  margin-bottom: 1.5rem;
}
.forgot-page-grid__logo-text {
  font-size: 2.2rem;
  font-weight: 700;
  color: #6d28d9;
}
.forgot-page-grid__form-card {
  background: #fff7fa;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px rgba(80, 0, 80, 0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.forgot-page-grid__title {
  color: #22223b;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
}
.forgot-page-grid__subtitle {
  text-align: center;
  font-size: 1.05rem;
  color: #6b7280;
  margin-bottom: 2rem;
}
.forgot-page-grid__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.forgot-page-grid__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.forgot-page-grid__label {
  color: #6d28d9;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.forgot-page-grid__input-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c7b7e6;
  position: relative;
  background: #fff;
  border-radius: 0;
}
.forgot-page-grid__input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.8rem 0.8rem 0.8rem 0.2rem;
  font-size: 1rem;
  color: #22223b;
  outline: none;
}
.forgot-page-grid__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.7rem;
}
.forgot-page-grid__button {
  width: 140px;
  margin: 0 auto;
  background: #3f347e;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem 0;
  box-shadow: 0 4px 12px rgba(80, 0, 80, 0.1);
  cursor: pointer;
  transition:
    background 0.2s,
    opacity 0.2s;
  letter-spacing: 0.03em;
  &:hover {
    background: #4f46e5;
    opacity: 0.93;
  }
}
.forgot-page-grid__terms {
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
}
.forgot-page-grid__link {
  color: #3f347e;
  font-weight: 600;
  text-decoration: underline;
  margin-left: 0.2em;
}
.forgot-page-grid__contact {
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-top: 1.2rem;
}
</style>
