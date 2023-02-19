<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
       
      </span>
      <span v-else>Vue Sidebar</span>
    </h1>

    <div style="position: relative; right: 20px;">
      <SidebarLink to="/" icon="fas fa-home stye\\" class="p-4"><p>Home</p></SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns" class="p-4">Dashboard</SidebarLink>
    <SidebarLink to="/analytics" icon="fas fa-chart-bar" class="p-4">Analytics</SidebarLink>
    <SidebarLink to="/friends" icon="fas fa-users" class="p-4">Friends</SidebarLink>
    <SidebarLink to="/image" icon="fas fa-image" class="p-4">Images</SidebarLink>
    </div>

    <span
      class="collapse-icon"
      
    >
    <SidebarLink to="/image" icon="fas fa-sign-out" class="p-4">logout</SidebarLink>
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
     
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  background: red !important;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: relative;
  bottom: 0;
  right: 20px;
  top: 90px;
  color: white;

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
