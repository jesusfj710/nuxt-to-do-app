<script setup lang="ts">
import type { Task } from '~/types/task'

const { tasks, label, icon } = defineProps<{ tasks: Array<Task>, label: string, icon: string }>()
</script>

<template>
  <UAccordion
    :items="[{ label, icon, defaultOpen: true, slot: 'tasks' }]"
    :ui="{
      item:
        {
          size: '',
          color: '',
          padding: '',
          base: 'space-y-2'
        },
      wrapper: ''
    }"
  >
    <template #tasks>
      <TaskCard v-for="task in tasks" :key="task.name" :task="task" />
    </template>
  </UAccordion>
</template>
