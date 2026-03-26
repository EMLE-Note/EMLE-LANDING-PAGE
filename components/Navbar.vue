<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <EmleLogo class="w-28 sm:w-36" />
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-8 space-x-reverse relative">
          <a href="#problem" class="text-zinc-700 hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-400 font-medium transition-colors">المشكلة</a>
          <a href="#products" class="text-zinc-700 hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-400 font-medium transition-colors">منتجاتنا</a>
          <a href="#ai" class="text-zinc-700 hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-400 font-medium transition-colors">الذكاء الاصطناعي</a>
          <a href="#traction" class="text-zinc-700 hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-400 font-medium transition-colors">النمو</a>
          <a href="#roadmap" class="text-zinc-700 hover:text-brand-500 dark:text-zinc-300 dark:hover:text-brand-400 font-medium transition-colors">خارطة الطريق</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4 space-x-reverse">
          <UButton 
            :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
            color="gray" 
            variant="ghost" 
            aria-label="Theme" 
            @click="isDark = !isDark" 
          />
          <UButton class="hidden sm:inline-flex" color="primary" variant="solid" label="ابدأ رحلتك مجاناً" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
