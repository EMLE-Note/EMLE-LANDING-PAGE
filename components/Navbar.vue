<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center rtl:ml-8 ltr:mr-8">
          <NuxtLink :to="localePath('/')" class="text-2xl font-black tracking-tight flex items-center gap-2 group">
            <img src="~/assets/logo emli light.png" alt="Emily Notes" class="h-10 w-auto block dark:hidden group-hover:scale-105 transition-transform duration-300" />
            <img src="~/assets/logo emli DARK.png" alt="Emily Notes" class="h-10 w-auto hidden dark:block group-hover:scale-105 transition-transform duration-300" />
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex gap-8 relative items-center">
          <a :href="localePath('/') + '#problem'" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.problem') }}</a>
          <a :href="localePath('/') + '#products'" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.products') }}</a>
          <a :href="localePath('/') + '#ai'" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.ai') }}</a>
          <a :href="localePath('/') + '#roadmap'" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.roadmap') }}</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- ClientOnly wrap prevents hydration mismatch because locale and colorMode depend on client storage/system -->
          <ClientOnly>
            <!-- Language Switcher -->
            <UButton 
              variant="ghost" 
              color="gray"
              class="font-bold text-sm"
              @click="toggleLang"
            >
              {{ locale === 'ar' ? 'EN' : 'AR' }}
            </UButton>

            <!-- Theme Switcher -->
            <UButton 
              :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
              color="gray" 
              variant="ghost" 
              :aria-label="$t('navbar.switch_theme')" 
              @click="isDark = !isDark" 
            />
            
            <template #fallback>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin text-zinc-400" />
              </div>
            </template>
          </ClientOnly>
          <UButton class="hidden sm:inline-flex" color="primary" variant="solid" :label="$t('navbar.get_started')" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const toggleLang = () => {
  setLocale(locale.value === 'ar' ? 'en' : 'ar')
}
</script>
