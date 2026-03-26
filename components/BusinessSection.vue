<template>
  <section class="py-24 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-bold tracking-wide uppercase text-sm mb-3" style="color: #00adee;">{{ $t('business.subtitle') }}</h2>
        <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">{{ $t('business.title') }}</h3>
        <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {{ $t('business.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(model, idx) in models" :key="idx" class="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <span class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg rtl:ml-4 ltr:mr-4 shrink-0" style="background: rgba(0,173,238,0.1); color: #00adee;">0{{ idx + 1 }}</span>
            <h4 class="text-xl font-bold text-zinc-900 dark:text-white">{{ $t(model.titleKey) }}</h4>
          </div>
          <p class="text-zinc-600 dark:text-zinc-400 rtl:pr-16 ltr:pl-16">{{ $t(model.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const models = [
  { titleKey: 'business.m1_title', descKey: 'business.m1_desc' },
  { titleKey: 'business.m2_title', descKey: 'business.m2_desc' },
  { titleKey: 'business.m3_title', descKey: 'business.m3_desc' },
  { titleKey: 'business.m4_title', descKey: 'business.m4_desc' },
  { titleKey: 'business.m5_title', descKey: 'business.m5_desc' },
]
</script>
