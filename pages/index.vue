<script setup lang="ts">
import { useTasksStore } from '~/stores/taskStore'

const tasksStore = useTasksStore()

// Compute a boolean indicating whether there are tasks
const hasTasks = ref(false)

// Watch for changes in the tasks and update the computed property
watchEffect(() => {
  hasTasks.value = tasksStore.tasks.length > 0
})

definePageMeta({
  layout: 'app'
})
</script>

<template>
  <div id="app" class="flex-grow">
    <div class="flex justify-center px-2 pb-2">
      <TaskForm />
    </div>
    <div v-if="hasTasks" class="px-2">
      <TaskList />
    </div>
  </div>
</template>
