<script setup lang="ts">

const { locale, availableLocales, getLocaleMessage } = useI18n()

const appStore = useAppStore()

const selectedLanguage = computed({
  get: () => locale.value,
  set: value => appStore.setLanguage(value)
})

const availableLanguages = computed(() => availableLocales.map(locale => ({ code: locale, name: getLocaleMessage(locale).languageName })))

watchEffect(() => {
  locale.value = appStore.language
})

</script>

<template>
  <div class="absolute top-0 right-0 py-4 px-2 xs:p-4">
    <USelectMenu
      v-model="selectedLanguage"
      selected-icon=""
      :options="availableLanguages"
      option-attribute="name"
      value-attribute="code"
    >
      <UButton color="gray" class="flex-1 justify-between">
        {{ getLocaleMessage(selectedLanguage).languageName }}
      </UButton>
      <!-- <template #option="{ option }">
        <span class="text-xs">{{ option.name }}</span>
      </template> -->
    </USelectMenu>
  </div>
</template>
