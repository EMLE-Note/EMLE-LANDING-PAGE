<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center rtl:ml-8 ltr:mr-8">
          <NuxtLink to="/" class="text-2xl font-black tracking-tight flex items-center gap-2 group">
            <img src="~/assets/logo emli light.png" alt="Emily Notes" class="h-10 w-auto block dark:hidden group-hover:scale-105 transition-transform duration-300" />
            <img src="~/assets/logo emli DARK.png" alt="Emily Notes" class="h-10 w-auto hidden dark:block group-hover:scale-105 transition-transform duration-300" />
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex gap-8 relative items-center">
          <a href="#problem" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.problem') }}</a>
          <a href="#products" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.products') }}</a>
          <a href="#ai" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.ai') }}</a>
          <a href="#roadmap" class="text-zinc-700 hover:text-[#00adee] dark:text-zinc-300 transition-colors">{{ $t('navbar.roadmap') }}</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Language Switcher -->
          <button 
            class="px-3 py-1.5 rounded-md text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            @click="toggleLang"
          >
            {{ langLabel }}
          </button>

          <!-- Theme Switcher -->
          <button 
            class="p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            :aria-label="$t('navbar.switch_theme')" 
            @click="toggleTheme"
          >
            <svg v-if="currentTheme === 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </button>

          <UButton class="hidden sm:inline-flex" color="primary" variant="solid" :label="$t('navbar.get_started')" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const { locale, setLocale } = useI18n()
const colorMode = useColorMode()

// --- Theme ---
// Determine current theme reactively
const currentTheme = computed(() => {
  return colorMode.value === 'dark' ? 'dark' : 'light'
})

function toggleTheme() {
  // Update preference correctly; useColorMode is already initialized globally
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// --- Language ---
const langLabel = computed(() => {
  return locale.value === 'ar' ? 'EN' : 'AR'
})

function toggleLang() {
  // Use setLocale for smooth client-side routing instead of hard reload
  const nextLang = locale.value === 'ar' ? 'en' : 'ar'
  setLocale(nextLang)
}
</script>
