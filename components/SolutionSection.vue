<template>
  <section class="py-24 overflow-hidden relative border-y border-zinc-200 dark:border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2 space-y-8 relative z-10">
          <div>
            <span class="font-bold tracking-wide uppercase text-sm mb-3 block" style="color: #00adee;">{{ $t('solution.subtitle') }}</span>
            <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              {{ $t('solution.title_part1') }} <span class="gradient-text">{{ $t('solution.title_highlight') }}</span>
            </h3>
            <p class="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {{ $t('solution.desc') }}
            </p>
          </div>
          
          <ul class="space-y-6 mt-8">
            <li v-for="(itemKey, i) in solutions" :key="i" class="flex items-start">
              <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full rtl:ml-4 ltr:mr-4 border" style="background: rgba(0,173,238,0.1); color: #00adee; border-color: rgba(0,173,238,0.3);">
                <UIcon name="i-heroicons-check" class="w-5 h-5" />
              </div>
              <p class="text-zinc-800 dark:text-zinc-200 font-medium text-lg pt-1">{{ $t(itemKey) }}</p>
            </li>
          </ul>
          
          <div class="pt-4">
            <UButton size="lg" color="gray" variant="outline" class="group flex items-center gap-2">
              {{ $t('solution.how_it_works') }}
              <UIcon name="i-heroicons-play-circle" class="w-5 h-5 group-hover:text-brand-500 transition-colors" />
            </UButton>
          </div>
        </div>
        
        <div class="lg:w-1/2 relative">
          <div class="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-2xl overflow-hidden flex items-center justify-center" style="background: linear-gradient(135deg, #f4f4f5 0%, #fafafa 100%);">
            <!-- Dark mode override -->
            <div class="absolute inset-0 hidden dark:block" style="background: linear-gradient(135deg, #18181b 0%, #27272a 100%);"></div>
            
            <div class="relative z-10 flex flex-col items-center p-8 space-y-6 w-3/4">
              <div class="w-full bg-white dark:bg-zinc-950 p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center transform rtl:-rotate-3 ltr:rotate-3 hover:rotate-0 transition-transform">
                <UIcon name="i-heroicons-cpu-chip" class="w-8 h-8 rtl:ml-4 ltr:mr-4" style="color: #00adee;" />
                <div class="flex-1">
                  <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mb-2"></div>
                  <div class="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-1/2"></div>
                </div>
              </div>
              <div class="w-full bg-white dark:bg-zinc-950 p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center transform rtl:rotate-2 ltr:-rotate-2 hover:rotate-0 transition-transform rtl:translate-x-4 ltr:-translate-x-4">
                <UIcon name="i-heroicons-chart-pie" class="w-8 h-8 rtl:ml-4 ltr:mr-4" style="color: #008bbe;" />
                <div class="flex-1">
                  <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full mb-2"></div>
                  <div class="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-2/3"></div>
                </div>
              </div>
              <div class="w-full bg-white dark:bg-zinc-950 p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center transform rtl:-rotate-1 ltr:rotate-1 hover:rotate-0 transition-transform rtl:-translate-x-2 ltr:translate-x-2">
                <UIcon name="i-heroicons-globe-alt" class="w-8 h-8 rtl:ml-4 ltr:mr-4" style="color: #006a8f;" />
                <div class="flex-1">
                  <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6 mb-2"></div>
                  <div class="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-4/6"></div>
                </div>
              </div>
            </div>
            
            <!-- Glow effect -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] rounded-full pointer-events-none" style="background: rgba(0,173,238,0.2);"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  'solution.point1',
  'solution.point2',
  'solution.point3'
]
</script>
