<template>
  <transition name="sidebar-slide">
    <aside v-if="!collapsed" class="sidebar" :class="[{ collapsed }, $attrs.class]">
      <div class="sidebar-inner">
        <div class="logo-section">
          <div class="logo-icon">FP</div>
          <span class="logo-title" v-if="!collapsed">finopay</span>
        </div>
        <nav class="nav-links">
          <RouterLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ active: $route.path === link.path }"
            :title="link.label"
          >
            <component :is="(icons as any)[link.icon]" size="18" />
            <span v-if="!collapsed">{{ link.label }}</span>
          </RouterLink>
        </nav>
        <div class="sidebar-footer" v-if="!collapsed">
          <div class="user-profile" ref="userProfileRef" @click="toggleMenu">
            <img
              class="avatar"
              :src="
                role === 'admin'
                  ? 'https://randomuser.me/api/portraits/men/1.jpg'
                  : 'https://randomuser.me/api/portraits/men/32.jpg'
              "
              alt="User avatar"
            />
            <div class="user-info">
              <div class="user-name">{{ role === 'admin' ? 'Admin' : 'John' }}</div>
              <div class="user-email">
                {{ role === 'admin' ? 'admin@finopay.com' : 'john@finopay.com' }}
              </div>
            </div>
            <div class="dropdown" v-if="showMenu" :class="dropdownPosition">
              <a v-if="role === 'user'" @click.stop="gotoProfile">Profile</a>
              <a @click.stop="logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { navLinks } from '@/constants/navLinks'
import * as icons from 'lucide-vue-next'

const props = defineProps<{ collapsed: boolean; role: 'admin' | 'user' }>()
const links = computed(() => (props.role === 'admin' ? navLinks.admin : navLinks.user))
const visible = ref(true)
const showMenu = ref(false)
const router = useRouter()
const user = useUserStore()
const dropdownPosition = ref('bottom')
const userProfileRef = ref<HTMLElement | null>(null)

const handleResize = () => {
  visible.value = window.innerWidth > 768
}

function toggleMenu(e: MouseEvent) {
  e.stopPropagation()
  showMenu.value = !showMenu.value
  if (showMenu.value) {
    nextTick(() => adjustDropdownPosition())
  }
}

function closeMenu() {
  showMenu.value = false
}

const logout = () => {
  closeMenu()
  user.logout()
  router.push('/login')
}

const gotoProfile = () => {
  closeMenu()
  router.push('/user/profile')
}

function handleClickOutside(event: MouseEvent) {
  const dropdown = userProfileRef.value
  if (dropdown && !dropdown.contains(event.target as Node)) {
    showMenu.value = false
  }
}

function adjustDropdownPosition() {
  const el = userProfileRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const dropdownHeight = 90 // estimated dropdown height in px
  const spaceBelow = window.innerHeight - rect.bottom
  const spaceAbove = rect.top
  dropdownPosition.value =
    spaceBelow < dropdownHeight && spaceAbove > dropdownHeight ? 'top' : 'bottom'
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.sidebar {
  width: 240px;
  background: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f3f4f6;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  border-radius: 0 1.5rem 0 0;
  .sidebar-inner {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  .logo-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding: 0.75rem 1rem 0 1rem;
    border-radius: 0 1.5rem 0 0;
    background: none;
  }
  .logo-icon {
    background: #2563eb;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 1.2rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #111827;
  }
  .nav-links {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 1rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    text-decoration: none;
    color: #23272f;
    border-radius: 0.5rem;
    white-space: nowrap;
    transition:
      background 0.3s,
      color 0.3s;
    font-size: 1.05rem;
    font-weight: 500;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    &:hover {
      background: #f3f4f6;
      color: #2563eb;
      text-decoration: none;
    }
    &.active {
      background: #e0edff;
      color: #2563eb;
      font-weight: 600;
      box-shadow: 0 0 0 1.5px #2563eb;
      text-decoration: none;
    }
  }
  .sidebar-footer {
    margin-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
    padding: 1.5rem 1rem 1.5rem 1rem;
    background: #fff;
  }
  .user-profile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
    cursor: pointer;
    .avatar {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e5e7eb;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      .user-name {
        font-weight: 600;
        font-size: 1rem;
        color: #23272f;
      }
      .user-email {
        font-size: 0.95rem;
        color: #6b7280;
      }
    }
    .dropdown {
      position: absolute;
      left: 0;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 0.5rem;
      margin-top: 0.25rem;
      z-index: 100;
      min-width: 120px;
      box-shadow: 0 2px 8px 0 rgba(60, 72, 88, 0.08);
      a {
        display: block;
        padding: 0.5rem;
        font-size: 0.95rem;
        color: #374151;
        cursor: pointer;
        border-radius: 0.3rem;
        &:hover {
          background: #f3f4f6;
        }
      }
      &.top {
        bottom: 110%;
        top: auto;
        margin-top: 0;
        margin-bottom: 0.25rem;
      }
      &.bottom {
        top: 110%;
        bottom: auto;
        margin-top: 0.25rem;
        margin-bottom: 0;
      }
    }
  }
  .sidebar-logout-btn {
    width: 100%;
    background: linear-gradient(90deg, #a445b2 0%, #6c63ff 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 0;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
  }
  .sidebar-logout-btn:hover {
    background: linear-gradient(90deg, #6c63ff 0%, #a445b2 100%);
  }
}

@media (max-width: 1024px) {
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    max-width: 320px;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &.open {
      transform: translateX(0);
    }
    z-index: 100;
  }
}
@media (max-width: 768px) {
  .sidebar {
    .logo-section {
      padding: 1.25rem 1rem 0.75rem 1rem;
      .logo-title {
        font-size: 1.1rem;
      }
    }
    .nav-links {
      padding: 0 1rem;
      gap: 0.25rem;
    }
    .nav-link {
      font-size: 0.98rem;
      padding: 0.6rem 0.75rem;
    }
    .sidebar-footer {
      padding: 1rem;
      font-size: 0.98rem;
    }
  }
}
@media (max-width: 480px) {
  .sidebar {
    width: 100vw;
    max-width: 100vw;
    .logo-section {
      padding: 1rem 0.5rem 0.5rem 0.5rem;
      .logo-title {
        font-size: 1rem;
      }
    }
    .nav-links {
      padding: 0 0.5rem;
    }
    .nav-link {
      font-size: 0.95rem;
      padding: 0.5rem 0.5rem;
    }
    .sidebar-footer {
      padding: 0.5rem;
      font-size: 0.95rem;
    }
  }
}
</style>
