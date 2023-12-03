import { defineStore } from 'pinia'
import localforage from '~/plugins/localforage'

export const languages = ['en', 'es-es', 'ko'] as const
export type Language = typeof languages[number]

export const useAppStore = defineStore('app', {
  state: () => ({
    language: 'en' satisfies Language as Language
  }),
  actions: {
    async initialize () {
      const storedLanguage = await localforage.getItem<Language>('app')

      if (storedLanguage) {
        this.language = storedLanguage
      }
    },

    async setLanguage (language: Language | string) {
      this.language = language
      await localforage.setItem('app', this.language)
    }
  }
})
