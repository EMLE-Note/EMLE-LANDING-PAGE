<template>
  <section id="problem" class="py-24 bg-zinc-50 dark:bg-zinc-900/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-bold tracking-wide uppercase text-sm mb-3" style="color: #00adee;">{{ $t('problem.subtitle') }}</h2>
        <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">{{ $t('problem.title') }}</h3>
        <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {{ $t('problem.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="(point, idx) in painPoints" 
          :key="idx"
          class="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-zinc-900"
          :ui="{ body: { padding: 'p-8' } }"
          style="border-color: transparent;" 
          @mouseenter="$event.currentTarget.style.borderColor = 'rgba(0,173,238,0.3)'" 
          @mouseleave="$event.currentTarget.style.borderColor = 'transparent'"
        >
          <div class="flex flex-col h-full">
            <div class="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-sm" style="background: rgba(0,173,238,0.08); color: #00adee;">
              <UIcon :name="point.icon" class="w-7 h-7" />
            </div>
            <h4 class="text-xl font-bold text-zinc-900 dark:text-white mb-3">{{ $t(point.titleKey) }}</h4>
            <p class="text-zinc-600 dark:text-zinc-400 flex-grow leading-relaxed">{{ $t(point.descKey) }}</p>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const painPoints = [
  { titleKey: 'problem.p1_title', descKey: 'problem.p1_desc', icon: 'i-heroicons-document-text' },
  { titleKey: 'problem.p2_title', descKey: 'problem.p2_desc', icon: 'i-heroicons-arrows-right-left' },
  { titleKey: 'problem.p3_title', descKey: 'problem.p3_desc', icon: 'i-heroicons-chart-bar-square' },
  { titleKey: 'problem.p4_title', descKey: 'problem.p4_desc', icon: 'i-heroicons-banknotes' },
  { titleKey: 'problem.p5_title', descKey: 'problem.p5_desc', icon: 'i-heroicons-academic-cap' },
]
</script>
