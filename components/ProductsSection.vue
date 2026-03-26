<template>
  <section id="products" class="py-24 bg-white dark:bg-zinc-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="font-bold tracking-wide uppercase text-sm mb-3" style="color: #00adee;">{{ $t('products.subtitle') }}</h2>
        <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">{{ $t('products.title') }}</h3>
        <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {{ $t('products.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl blur-[120px] rounded-full pointer-events-none z-0" style="background: rgba(0,173,238,0.05);"></div>
        
        <UCard 
          v-for="(product, idx) in products" 
          :key="idx"
          class="relative z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <template #header>
            <div class="flex justify-between items-start">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center shadow-inner" style="background: rgba(0,173,238,0.08);">
                <UIcon :name="product.icon" class="w-7 h-7" style="color: #00adee;" />
              </div>
              <UBadge :color="product.isActive ? 'emerald' : 'amber'" variant="subtle" size="sm">
                {{ product.isActive ? $t('products.status_active') : $t('products.status_dev') }}
              </UBadge>
            </div>
            <h4 class="text-xl font-bold text-zinc-900 dark:text-white mt-5">{{ $t(product.nameKey) }}</h4>
          </template>
          
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ $t(product.descKey) }}</p>
          
          <template #footer>
            <UButton variant="link" color="primary" :padded="false" class="font-medium group flex items-center gap-1">
              {{ $t('products.explore_more') }}
              <UIcon name="i-heroicons-arrow-left" class="rtl:rotate-0 ltr:-rotate-180 group-hover:rtl:-translate-x-1 group-hover:ltr:translate-x-1 transition-transform" />
            </UButton>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { nameKey: 'products.p1_title', isActive: true, descKey: 'products.p1_desc', icon: 'i-heroicons-device-phone-mobile' },
  { nameKey: 'products.p2_title', isActive: true, descKey: 'products.p2_desc', icon: 'i-heroicons-film' },
  { nameKey: 'products.p3_title', isActive: true, descKey: 'products.p3_desc', icon: 'i-heroicons-book-open' },
  { nameKey: 'products.p4_title', isActive: true, descKey: 'products.p4_desc', icon: 'i-heroicons-question-mark-circle' },
  { nameKey: 'products.p5_title', isActive: true, descKey: 'products.p5_desc', icon: 'i-heroicons-user-group' },
  { nameKey: 'products.p6_title', isActive: false, descKey: 'products.p6_desc', icon: 'i-heroicons-face-smile' },
]
</script>
