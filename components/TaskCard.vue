<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/task'
import { useTasksStore } from '~/stores/taskStore'

const { task } = defineProps<{ task: Task }>()

const tasksStore = useTasksStore()

</script>

<template>
  <div
    class="task-card flex flex-col w-full p-4 space-y-2 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-black/30 hover:ring-2 ring-primary-500/[.55]"
  >
    <p>{{ task.name }}</p>
    <UButtonGroup size="sm" orientation="horizontal" class="flex justify-end shadow-none">
      <UButton
        :ui="{ icon: { 'base': 'bg-green-500' } }"
        :icon="task.isDone ? 'i-heroicons-check-circle-solid' : 'i-heroicons-check-circle'"
        variant="outline"
        @click=" tasksStore.toggleDone(task)"
      />
      <UButton
        :ui="{ icon: { 'base': 'bg-yellow-500' } }"
        :icon="task.isFav ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
        variant="outline"
        @click="tasksStore.toggleFavorite(task)"
      />

      <UButton icon="i-heroicons-trash" variant="outline" @click=" tasksStore.removeTask(task.id)" />
    </UButtonGroup>
  </div>
</template>
