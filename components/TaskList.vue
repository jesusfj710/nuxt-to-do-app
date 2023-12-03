<script setup lang="ts">
import { useTasksStore } from '~/stores/taskStore'

const taskStatuses = ['all', 'favs', 'done'] as const

type TASK_STATUS = typeof taskStatuses[number];

interface tabs {
  label: TASK_STATUS,
  icon: string
}
const taskStatus = ref<TASK_STATUS>('all')

const items: Array<tabs> = [{
  label: 'all',
  icon: 'i-heroicons-rectangle-stack'
}, {
  label: 'favs',
  icon: 'i-heroicons-star'
}, {
  label: 'done',
  icon: 'i-heroicons-check-circle'
}
]

const tasksStore = useTasksStore()

function onChange (index: number) {
  taskStatus.value = items[index].label
}

const filteredTasks = computed(() => {
  switch (taskStatus.value) {
    case 'all':
      return tasksStore.tasks
    case 'favs':
      return tasksStore.favoriteTasks
    case 'done':
      return tasksStore.doneTasks
  }
})

const orderedTasks = computed(() => {
  return filteredTasks.value.sort((a, b) => b.id - a.id)
})

</script>

<template>
  <UTabs
    :items="items"
    class="w-full sm:hidden p-2 backdrop-blur-xl bg-white/50 dark:bg-black/50 rounded-xl"
    @change="onChange"
  >
    <template #default="{ item }">
      <div class="flex items-center gap-2 relative truncate">
        <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
        <span>
          {{ $t(item.label) }}
        </span>
      </div>
    </template>
    <template #item="">
      <div class="flex flex-col gap-2">
        <TaskCard v-for="task in orderedTasks" :key="task.name" :task="task" />
      </div>
    </template>
  </UTabs>
  <div class="hidden sm:grid grid-cols-3 xl:grid-cols-5 h-full gap-0.5 justify-self-center">
    <TaskAccordion
      class="xl:col-start-2 backdrop-blur-xl bg-white/50 dark:bg-black/50 p-2 rounded-l-xl"
      :tasks="tasksStore.tasks"
      :label="$t('all')"
      icon="i-heroicons-rectangle-stack"
    />
    <TaskAccordion
      class="backdrop-blur-xl bg-white/50 dark:bg-black/50 p-2"
      :tasks="tasksStore.favoriteTasks"
      :label="$t('favs')"
      icon="i-heroicons-star"
    />
    <TaskAccordion
      class="backdrop-blur-xl bg-white/50 dark:bg-black/50 p-2 rounded-r-xl"
      :tasks="tasksStore.doneTasks"
      :label="$t('done')"
      icon="i-heroicons-check-circle"
    />
  </div>
</template>
