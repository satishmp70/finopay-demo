<!-- src/pages/login/LoginPage.vue -->
<template>
  <div class="login-page">
    <div class="login-logo-box">F</div>
    <div class="login-brand">
      <span class="login-brand__main">fino</span><span class="login-brand__accent">pay</span>
    </div>
    <h1 class="login-title">Welcome Back</h1>
    <p class="login-subtitle">Please login to your account</p>
    <div class="login-card">
      <div class="login-card__accent"></div>
      <form class="login-form" @submit.prevent="onLogin">
        <div class="login-form__group">
          <label for="username" class="login-form__label">
            <span class="login-form__icon">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#bdbdbd"
                  d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                />
              </svg>
            </span>
            Username
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="login-form__input"
            placeholder="admin@finopay.com"
            required
          />
        </div>
        <div class="login-form__group">
          <label for="password" class="login-form__label">
            <span class="login-form__icon">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#bdbdbd"
                  d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-7V8a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H6V8Zm10 10H6v-6h12v6Z"
                />
              </svg>
            </span>
            Password
          </label>
          <div class="login-form__input-wrapper">
            <input
              id="password"
              v-model="password"
              :type="isPasswordVisible ? 'text' : 'password'"
              class="login-form__input"
              placeholder="Password"
              required
            />
            <span class="password-toggle-icon" @click="togglePasswordVisibility">
              <i v-if="isPasswordVisible" class="fa-regular fa-eye"></i>
              <i v-else class="fa-regular fa-eye-slash"></i>
            </span>
          </div>
        </div>
        <div class="login-form__row">
          <label class="login-form__checkbox"> <input type="checkbox" /> Remember me </label>
          <router-link to="/forgot-password" class="login-form__forgot"
            >Forgot Password?</router-link
          >
        </div>
        <div class="login-form__info">
          <span class="login-form__info-icon">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                fill="#3f51b5"
                d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z"
              />
            </svg>
          </span>
          Do not share login OTP &amp; Password with anyone. We will never ask you these details.
        </div>
        <button type="submit" class="login-form__button">
          <span class="login-form__button-icon">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-7V8a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H6V8Zm10 10H6v-6h12v6Z"
              />
            </svg>
          </span>
          LOGIN
        </button>
      </form>
      <div class="login-form__signup-row">
        Don't have an Account?
        <router-link to="/signup" class="login-form__signup-link">Sign Up</router-link>
      </div>
    </div>
    <!-- <div class="login-contact">Contact Us</div> -->
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
const isPasswordVisible = ref(false)

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

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
:global(html),
:global(body) {
  overflow: hidden !important;
  height: 100vh;
}
.login-page {
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #fcfaff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0 1.5rem 0;
}
.login-logo-box {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #9333ea 0%, #6d28d9 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 12px 0 rgba(108, 99, 255, 0.1);
}
.login-brand {
  font-size: 2rem;
  font-weight: 800;
  color: #22223b;
  letter-spacing: 0.01em;
  margin-bottom: 0.5rem;
  &__main {
    color: #22223b;
  }
  &__accent {
    color: #9333ea;
  }
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
.login-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  padding: 40px 36px 32px 36px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
}
.login-card__accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #9333ea 0%, #6d28d9 100%);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.login-form__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
}
.login-form__label {
  font-size: 1rem;
  color: #22223b;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}
.login-form__icon {
  display: flex;
  align-items: center;
  margin-right: 6px;
}
.login-form__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.login-form__input {
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  color: #22223b;
  background: #f5f7fa;
  width: 100%;
  box-sizing: border-box;
  transition: box-shadow 0.2s;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.15);
  }
}
.password-toggle-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
}
.login-form__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.login-form__checkbox {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #22223b;
  font-weight: 500;
  gap: 6px;
}
.login-form__forgot {
  color: #9333ea;
  font-weight: 600;
  text-decoration: underline;
  font-size: 1rem;
  cursor: pointer;
}
.login-form__info {
  background: #eaf1ff;
  color: #3f51b5;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 0.5rem;
}
.login-form__info-icon {
  margin-top: 2px;
}
.login-form__button {
  width: 100%;
  padding: 0.9rem 0;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: linear-gradient(90deg, #9333ea 0%, #6d28d9 100%);
  color: #fff;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(80, 0, 80, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition:
    background 0.2s,
    opacity 0.2s;
  &:hover {
    opacity: 0.93;
  }
}
.login-form__button-icon {
  display: flex;
  align-items: center;
}
.login-form__signup-row {
  text-align: center;
  font-size: 1.05rem;
  color: #22223b;
  margin-top: 1.5rem;
}
.login-form__signup-link {
  color: #9333ea;
  font-weight: 600;
  text-decoration: underline;
  margin-left: 0.2em;
}
.login-contact {
  text-align: center;
  color: #8a8a8a;
  font-size: 1.1rem;
  margin-top: 1.5rem;
}
</style>
