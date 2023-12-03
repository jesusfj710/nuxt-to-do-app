<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '~/types/task'
import { useTasksStore } from '~/stores/taskStore'

const tasksStore = useTasksStore()
const hasTasks = ref(false)

const newTask = ref<Pick<Task, 'id' | 'name'>>({
  name: '',
  id: 0
})

watchEffect(() => {
  hasTasks.value = tasksStore.tasks.length > 0
})

function onSubmit () {
  if (newTask.value.name) {
    tasksStore.addTask({
      id: Date.now(),
      name: newTask.value.name,
      isDone: false,
      isFav: false
    })
    // Clear the form after submission if needed
    newTask.value.name = ''
    newTask.value.id = 0
  }
}

function loadSampleData () {
  const sampleData: Array<Task> = [
    { id: 1, name: 'Slay the Hydra', isFav: true, isDone: false },
    { id: 2, name: 'Capture the Griffin', isFav: false, isDone: false },
    { id: 3, name: 'Tame the Phoenix', isFav: false, isDone: false },
    { id: 4, name: 'Seek the Minotaur\'s Labyrinth', isFav: false, isDone: false },
    { id: 5, name: 'Befriend the Hippogriff', isFav: false, isDone: false },
    { id: 6, name: 'Retrieve the Golden Fleece', isFav: false, isDone: false },
    { id: 7, name: 'Confront the Chimera', isFav: false, isDone: false },
    { id: 8, name: 'Commune with the Centaur', isFav: false, isDone: true },
    { id: 9, name: 'Discover the hidden treasures of El Dorado', isFav: false, isDone: false },
    { id: 10, name: 'Conquer the Norse Midgard Serpent', isFav: true, isDone: false },
    { id: 11, name: 'Unlock the secrets of Egyptian pyramids', isFav: true, isDone: false }
  ]
  tasksStore.addTasks(sampleData)
}

</script>

<template>
  <UForm
    class="p-2 rounded-xl sm:max-w-sm flex-grow backdrop-blur-xl bg-white/50 dark:bg-black/30"
    :state="newTask"
    @submit="onSubmit"
  >
    <UButtonGroup label="Name" name="name" class="flex">
      <UInput v-model="newTask.name" class="grow" />
      <UButton id="add-task-button" type="submit" :label="$t('addTask')" icon="i-heroicons-plus" />
      <UButton
        v-if="!hasTasks"
        id="sample-data-button"
        class="bg-white/50 dark:bg-black/30"
        variant="outline"
        :label="$t('sampleData')"
        @click="loadSampleData"
      />
    </UButtonGroup>
  </UForm>
</template>
