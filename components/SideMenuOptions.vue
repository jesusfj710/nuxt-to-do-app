<script setup lang="ts">

const { availableLocales, getLocaleMessage, locale } = useI18n()

const options = [{
  icon: 'i-heroicons-language',
  defaultOpen: true,
  slot: 'language',
  label: 'language'
}]

const appStore = useAppStore()

const availableLanguages = computed(
  () => availableLocales.map(
    locale => (
      { code: locale, name: getLocaleMessage(locale).languageName }
    )))

watchEffect(() => {
  locale.value = appStore.language
})

</script>

<template>
  <UAccordion
    :items="options"
    variant="link"
    :ui="{
      item: {
        padding: 'p-2 sm:p-4 ml-9 mr-4',
        base: 'backdrop-blur-xl bg-white/50 dark:bg-black/30 rounded-xl space-y-2 mb-3'
      },
      default: {
        class: 'mb-5 w-full bg-pink-500'
      }
    }"
  >
    <template #default="{item, open}">
      <UButton variant="link" :icon="item.icon" class="p-2 sm:p-4">
        {{ getLocaleMessage(locale)[item.label] ?? item.label }}
        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open ? 'rotate-90' : 'rotate-180']"
          />
        </template>
      </UButton>
    </template>
    <template #language>
      <div class="flex flex-col gap-2 sm:gap-4">
        <UButton
          v-for="language in availableLanguages"
          :key="language.code"
          :variant="locale === language.code ? 'soft' : 'ghost'"
          class="px-3"
          @click="appStore.setLanguage(language.code)"
        >
          {{ language.name }}
        </UButton>
      </div>
    </template>
  </UAccordion>
</template>
