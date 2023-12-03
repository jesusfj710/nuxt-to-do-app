<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div class="absolute top-0 left-0 py-4 px-2 xs:p-4">
    <UButton
      variant="outline"
      icon="i-heroicons-bars-3"
      class="rounded-xl backdrop-blur-xl bg-white/80 dark:bg-black/70 hover:ring-2 ring-primary-500/[.55]"
      @click="isOpen = true"
    />

    <USlideover
      v-model="isOpen"
      :overlay="false"
      side="left"
      :ui="{
        'base': 'backdrop-blur-3xl',
        'background': 'bg-white/50 dark:bg-black/30',
        'width': 'w-screen max-w-xs',
      }"
    >
      <UCard
        class="flex flex-col flex-1 rounded-none"
        :ui="{
          background: 'bg-white/50 dark:bg-black/30',
          body: {
            base: 'flex-1 overflow-auto ',
            padding: 'p-3 sm:p-4' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          footer: {
            padding: 'p-3 sm:p-4'
          },
          header: {
            base: 'text-lg',
            padding: 'p-3 sm:p-4'
          }}"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold">
              {{ $t('options') }}
            </h3>
            <UButton
              variant="soft"
              icon="i-heroicons-x-mark-20-solid"
              class="rounded-xl backdrop-blur-xl bg-white/70 dark:bg-black/50"
              @click="isOpen = false"
            />
          </div>
        </template>

        <SideMenuOptions />

        <template #footer>
          <FooterComponent />
        </template>
      </UCard>
    </USlideover>
  </div>
</template>
