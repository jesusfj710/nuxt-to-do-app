<script setup lang="ts">
import { useTasksStore } from '~/stores/taskStore'

const tasksStore = useTasksStore()
const appStore = useAppStore()

onMounted(() => {
  // Initialize the store to fetch tasks from localForage
  tasksStore.initialize()
  appStore.initialize()
})

</script>

<template>
  <div id="app-layout" class="flex flex-col h-screen">
    <HeaderComponent />
    <slot />
    <FooterComponent />
  </div>
</template>
