import localforage from 'localforage'

// Initialize localForage
localforage.config({
  driver: localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
  name: 'todo-app',
  version: 1.0
})

export default localforage
