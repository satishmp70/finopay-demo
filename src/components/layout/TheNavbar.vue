<template>
  <nav :class="['the-navbar', { 'navbar--collapsed': collapsed }]">
    <header class="navbar">
      <div class="navbar__left">
        <button class="navbar__menu-btn" @click="$emit('toggle')">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H12"
              stroke="#6B7280"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="navbar__center">
        <span class="navbar__welcome-text">
          🚀 Welcome to Finopay - where seamless transactions meet enhanced security.
        </span>
      </div>

      <div class="navbar__right">
        <div class="navbar__balance-group">
          <div class="navbar__balance-item">
            <WalletIcon class="navbar__balance-icon" />
            <div class="navbar__balance-details">
              <span class="navbar__balance-label">AEPS</span>
              <span class="navbar__balance-amount">₹0.00</span>
            </div>
          </div>
          <div class="navbar__balance-item">
            <WalletIcon class="navbar__balance-icon" />
            <div class="navbar__balance-details">
              <span class="navbar__balance-label">Main</span>
              <span class="navbar__balance-amount">₹76.73</span>
            </div>
          </div>
          <div class="navbar__balance-item">
            <WalletIcon class="navbar__balance-icon" />
            <div class="navbar__balance-details">
              <span class="navbar__balance-label">Unsettled</span>
              <span class="navbar__balance-amount">₹0.00</span>
            </div>
          </div>
        </div>

        <button class="navbar__icon-btn">
          <RefreshIcon />
        </button>

        <div class="navbar__profile">
          <button class="navbar__icon-btn" @click="showMenu = !showMenu">
            <img
              src="https://ui-avatars.com/api/?name=User&background=4F46E5&color=fff&rounded=true"
              alt="User"
              class="navbar__user-avatar"
            />
          </button>
          <div v-if="showMenu" class="navbar__dropdown">
            <a @click="gotoProfile">Profile</a>
            <a @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </header>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import RefreshIcon from '@/components/icons/RefreshIcon.vue'

const user = useUserStore()
const router = useRouter()
const showMenu = ref(false)
const props = defineProps({
  collapsed: Boolean,
})

const logout = () => {
  user.logout()
  router.push('/login')
}

const gotoProfile = () => {
  router.push(user.role === 'admin' ? '/admin/profile' : '/user/profile')
  showMenu.value = false
}
</script>

<style scoped lang="scss">
.the-navbar {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: none;
  display: block;
  transition: none;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
  min-height: 44px;
  max-height: 52px;
  background: #fff;
  border-bottom: none;
  box-shadow: none;
  gap: 0.5rem;

  &__left,
  &__center,
  &__right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__left {
    flex-shrink: 0;
    gap: 0.5rem;
  }

  &__logo {
    height: 36px;
    width: auto;
    display: block;
    margin-right: 0.5rem;
  }

  &__center {
    flex-grow: 1;
    justify-content: center;
    min-width: 0;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__welcome-text {
    font-size: 0.95rem;
    color: #374151;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 600px;
    display: block;
  }

  &__right {
    flex-shrink: 0;
    gap: 0.6rem;
  }

  &__balance-group {
    display: flex;
    gap: 0.7rem;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__balance-item {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  &__balance-icon {
    width: 20px;
    height: 20px;
    color: #2563eb;
  }

  &__balance-details {
    display: flex;
    flex-direction: column;
  }

  &__balance-label {
    font-size: 0.68rem;
    color: #6b7280;
    line-height: 1.1;
  }

  &__balance-amount {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.1;
  }

  &__icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    min-height: 28px;
    max-width: 28px;
    max-height: 28px;
    &:hover {
      background-color: #f3f4f6;
    }
  }

  &__profile {
    position: relative;
  }

  &__user-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 0.5rem;
    z-index: 100;
    min-width: 140px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    a {
      display: block;
      padding: 0.5rem 0.75rem;
      font-size: 0.9rem;
      color: #374151;
      cursor: pointer;
      border-radius: 0.25rem;
      text-decoration: none;

      &:hover {
        background: #f3f4f6;
      }
    }
  }

  &__menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: unset;
    min-height: unset;
    max-width: unset;
    max-height: unset;
    box-shadow: none;
    transition: none;
    margin-top: 0.75rem;
    margin-left: 1.25rem;
    &:hover,
    &:focus {
      background: none;
      outline: none;
    }
    svg {
      display: block;
      width: 28px;
      height: 28px;
      stroke: #9b4062;
    }
  }
}
</style>
