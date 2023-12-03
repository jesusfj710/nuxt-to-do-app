export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'en',
  messages: {
    en: {
      code: 'en',
      languageName: 'English',
      welcome: 'Welcome',
      options: 'Options',
      language: 'Language',
      all: 'All',
      favs: 'Favs',
      done: 'Done',
      addTask: 'Add task',
      sampleData: 'Sample Data',
      repository: 'Repository',
      blog: 'Blog'
    },
    es: {
      code: 'es',
      languageName: 'Español',
      options: 'Opciones',
      language: 'Idioma',
      welcome: 'Bienvenido',
      all: 'Todas',
      favs: 'Favoritas',
      done: 'Completadas',
      addTask: 'Añadir tarea',
      sampleData: 'Ejemplos',
      repository: 'Repositorio',
      blog: 'Blog'
    },
    ko: {
      code: 'ko',
      languageName: '한국어',
      options: '옵션',
      language: '언어',
      welcome: '환영합니다',
      all: '전체',
      favs: '즐겨찾기',
      done: '완료',
      addTask: '할 일 추가하기',
      sampleData: '예시',
      repository: '리포지토리',
      blog: '블로그'
    }
  }
}))
