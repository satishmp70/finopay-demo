<template>
  <div class="user-profile">
    <div class="profile-card">
      <div class="profile-avatar">
        <span>JD</span>
      </div>
      <div class="profile-info">
        <h2 class="profile-name">John Doe</h2>
        <p class="profile-email">john@finopay.com</p>
        <div class="profile-meta">
          <span class="profile-role">User</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// In a real app, this would come from user store or API
</script>

<style scoped lang="scss">
.user-profile {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f9fb;
  padding: 2.5rem 1.5rem 2rem 1.5rem;

  .profile-card {
    background: #fff;
    border-radius: 1.1rem;
    box-shadow: 0 2px 16px 0 rgba(60, 72, 88, 0.1);
    padding: 2.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 320px;
    max-width: 400px;
    width: 100%;
    .profile-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(90deg, #2563eb 0%, #43e97b 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      color: #fff;
      font-weight: 800;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px 0 rgba(60, 72, 88, 0.1);
    }
    .profile-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .profile-name {
        font-size: 2rem;
        font-weight: 800;
        color: #1a237e;
        margin-bottom: 0.5rem;
      }
      .profile-email {
        color: #5c6bc0;
        font-size: 1.1rem;
        margin-bottom: 1.2rem;
      }
      .profile-meta {
        display: flex;
        gap: 1rem;
        .profile-role {
          background: #f6f8fa;
          color: #2563eb;
          font-weight: 700;
          padding: 0.4rem 1.2rem;
          border-radius: 0.7rem;
          font-size: 1.05rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .profile-card {
      padding: 1.2rem 0.7rem 1rem 0.7rem;
      min-width: 0;
      max-width: 100vw;
    }
  }
  @media (max-width: 768px) {
    .profile-container {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 0.5rem;
      .profile-avatar {
        margin-bottom: 1.5rem;
      }
      .profile-form {
        width: 100%;
        max-width: 100%;
        padding: 1.5rem 1rem;
      }
    }
  }
  @media (max-width: 480px) {
    .profile-container {
      padding: 1rem 0.25rem;
      .profile-form {
        padding: 1rem 0.5rem;
        font-size: 0.98rem;
        input,
        button {
          font-size: 0.98rem;
          padding: 0.5rem 0.75rem;
        }
      }
      .profile-avatar {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
