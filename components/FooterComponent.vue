<template>
  <span class="flex justify-center">
    <footer
      class="backdrop-blur-xl bg-white/70 dark:bg-black/50 rounded-xl sm:max-w-sm items-center flex-grow flex flex-wrap justify-around p-4"
    >
      <ULink to="https://jesusfj710.github.io" class="hover:overline flex items-center gap-1">
        <UIcon name="i-heroicons-globe-alt" />
        <p> {{ $t('blog') }} </p>
      </ULink>
      <ULink to="https://github.com/jesusfj710/todo-app" class="hover:overline flex items-center gap-1">
        <UIcon name="i-heroicons-document-magnifying-glass" />
        <p>{{ $t('repository') }}</p>
      </ULink>

    </footer>
  </span>
</template>
