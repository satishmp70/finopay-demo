<!-- src/pages/login/LoginPage.vue -->
<template>
  <div class="login-bg">
    <div class="login-header">
      <div class="login-logo-icon">F</div>
      <span class="login-logo-title">finopay</span>
    </div>
    <h1 class="login-title">Welcome Back</h1>
    <p class="login-subtitle">Please login to your account</p>
    <div class="login-form-card">
      <form class="login-form" @submit.prevent="onLogin">
        <div class="form-group">
          <label for="username"><span class="icon-user"></span> Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password"><span class="icon-lock"></span> Password</label>
          <div class="input-password-row">
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <span class="icon-eye"></span>
          </div>
        </div>
        <div class="form-row">
          <label class="checkbox-label"> <input type="checkbox" /> Remember me </label>
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>
        <div class="security-notice">
          <span class="icon-info"></span>
          Do not share login OTP &amp; Password with anyone. We will never ask you these details.
        </div>
        <button type="submit" class="login-btn" :disabled="loading">
          <span class="icon-login"></span>
          <span v-if="loading">Logging in...</span>
          <span v-else>LOGIN</span>
        </button>
        <div class="signup-row">
          Don't have an Account? <a href="#" class="signup-link">Sign Up</a>
        </div>
      </form>
    </div>
    <div class="login-footer">Contact Us</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useToast } from 'vue-toastification'

const router = useRouter()
const userStore = useUserStore()
const toast = useToast()
const username = ref('')
const password = ref('')
const loading = ref(false)

function onLogin() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    if (username.value.includes('admin')) {
      userStore.login('admin')
      router.push('/admin')
    } else if (username.value.includes('user')) {
      userStore.login('user')
      router.push('/user')
    } else {
      toast.error('Invalid username for demo. Use admin or user in username.')
    }
  }, 800)
}
</script>

<style scoped lang="scss">
html,
body {
  height: 100%;
  width: 100vw;
  overflow: hidden !important;
  margin: 0;
  padding: 0;
}
.login-bg {
  min-height: 100vh;
  width: 100vw;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
}
.login-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  margin-top: 24px;
}
.login-logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #6c63ff 0%, #a445b2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 2px 12px 0 rgba(108, 99, 255, 0.1);
}
.login-logo-title {
  font-size: 2rem;
  font-weight: 800;
  color: #22223b;
  letter-spacing: 0.01em;
}
.login-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #22223b;
  margin-bottom: 6px;
  text-align: center;
}
.login-subtitle {
  color: #8a8a8a;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 24px;
}
.login-form-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  padding: 40px 36px 32px 36px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
}
.form-group label {
  font-size: 1rem;
  color: #22223b;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}
.form-group input {
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  color: #22223b;
  background: #f5f7fa;
  width: 100%;
  box-sizing: border-box;
}
.form-group input::placeholder {
  color: #a0a4b8;
  opacity: 1;
}
.input-password-row {
  position: relative;
  display: flex;
  align-items: center;
}
.input-password-row .icon-eye {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #bdbdbd;
}
.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #22223b;
  font-size: 0.98rem;
}
.checkbox-label input[type='checkbox'] {
  width: 16px;
  height: 16px;
  accent-color: #a445b2;
}
.forgot-link {
  color: #a445b2;
  text-decoration: none;
  font-size: 0.98rem;
  font-weight: 500;
  transition: color 0.2s;
}
.forgot-link:hover {
  color: #6c63ff;
}
.security-notice {
  color: #3f51b5;
  background: #f3f7fd;
  font-size: 0.93rem;
  border-radius: 8px;
  padding: 10px 12px;
  margin: 10px 0 0 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
}
.login-btn {
  width: 100%;
  padding: 13px 0;
  background: linear-gradient(90deg, #a445b2 0%, #6c63ff 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 18px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s;
}
.login-btn:hover {
  background: linear-gradient(90deg, #6c63ff 0%, #a445b2 100%);
}
.signup-row {
  margin-top: 18px;
  text-align: center;
  color: #8a8a8a;
  font-size: 0.98rem;
}
.signup-link {
  color: #a445b2;
  font-weight: 600;
  text-decoration: none;
}
.signup-link:hover {
  color: #6c63ff;
}
.login-footer {
  margin-top: 32px;
  color: #8a8a8a;
  font-size: 1rem;
  text-align: center;
}
// Icon styles (replace with SVGs or font icons as needed)
.icon-user::before {
  content: '\f007';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 6px;
}
.icon-lock::before {
  content: '\f023';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 6px;
}
.icon-eye::before {
  content: '\f06e';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}
.icon-info::before {
  content: '\f05a';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}
.icon-login::before {
  content: '\f2f6';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}
@media (max-width: 600px) {
  .login-form-card {
    max-width: 98vw;
    padding: 24px 8vw 18px 8vw;
  }
  .login-header {
    margin-top: 8vw;
  }
}
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    padding: 1.5rem 0.5rem;
    .login-illustration {
      width: 100%;
      margin-bottom: 1.5rem;
    }
    .login-form {
      width: 100%;
      max-width: 100%;
      padding: 1.5rem 1rem;
    }
  }
}
@media (max-width: 480px) {
  .login-container {
    padding: 1rem 0.25rem;
    .login-form {
      padding: 1rem 0.5rem;
      font-size: 0.98rem;
      input,
      button {
        font-size: 0.98rem;
        padding: 0.5rem 0.75rem;
      }
    }
    .login-illustration {
      display: none;
    }
  }
}
</style>
