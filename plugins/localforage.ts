import localforage from 'localforage'

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: 'todo-app',
  version: 1.0
})

export default localforage
