import { defineStore } from 'pinia'
import type { Task } from '../types/task'
import localforage from '~/plugins/localforage'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] satisfies Task[] as Task[]
  }),
  actions: {
    async initialize () {
      const storedTasks = await localforage.getItem<Task[]>('tasks')

      if (storedTasks) {
        this.tasks = storedTasks
      }
    },

    async syncTasks () {
      await localforage.setItem('tasks', this.tasks)
    },

    async addTasks (tasks: Array<Task>) {
      tasks.forEach(task => (this.tasks.push(task)))
      await this.syncTasks()
    },

    async addTask (task: Task) {
      this.tasks.push(task)
      await this.syncTasks()
    },
    async removeTask (id: Task['id']) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      await this.syncTasks()
    },
    async toggleFavorite (task: Task) {
      task.isFav = !task.isFav
      await this.syncTasks()
    },
    async toggleDone (task: Task) {
      task.isDone = !task.isDone
      await this.syncTasks()
    }
  },
  getters: {
    favoriteTasks (): Array<Task> {
      return this.tasks.filter(({ isFav }) => isFav)
    },
    doneTasks (): Array<Task> {
      return this.tasks.filter(({ isDone }) => isDone)
    }
  }
})
