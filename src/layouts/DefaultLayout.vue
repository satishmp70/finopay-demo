<template>
  <div class="layout" :class="{ 'sidebar-collapsed': !sidebarOpen }">
    <TheSidebar :collapsed="!sidebarOpen" :role="sidebarRole" />

    <!-- Backdrop for mobile -->
    <div v-if="showBackdrop" class="backdrop" @click="closeSidebar"></div>

    <div class="main">
      <TheNavbar @toggle="toggleSidebar" :collapsed="!sidebarOpen" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useUiStore } from '@/stores/ui'
import TheSidebar from '@/components/layout/TheSidebar.vue'
import TheNavbar from '@/components/layout/TheNavbar.vue'

const userStore = useUserStore()
const uiStore = useUiStore()

const sidebarOpen = computed(() => uiStore.sidebarOpen)
const toggleSidebar = uiStore.toggleSidebar
const closeSidebar = uiStore.closeSidebar

const showBackdrop = computed(() => sidebarOpen.value && window.innerWidth <= 768)

const sidebarRole = computed(() => (userStore.role === 'admin' ? 'admin' : 'user'))

onMounted(() => {
  uiStore.setSidebarByScreen()
  window.addEventListener('resize', uiStore.setSidebarByScreen)
})
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  position: relative;
  height: 100vh;
  overflow: hidden;

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 240px; /* Width of the sidebar */
    transition: margin-left 0.3s ease;
    overflow-y: auto;
  }

  &.sidebar-collapsed .main {
    margin-left: 70px; /* Width of the collapsed sidebar */
  }

  .content {
    padding: 1.5rem;
    background: #f9fafb;
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow: hidden;
    z-index: 50;
    transition: width 0.3s ease;
  }

  .backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 40;
  }

  @media (max-width: 768px) {
    .main {
      margin-left: 0 !important;
    }
    .sidebar {
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }
    &.sidebar-open .sidebar {
      transform: translateX(0);
    }
  }
}
</style>
