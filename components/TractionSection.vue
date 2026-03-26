<template>
  <section id="traction" class="py-24 relative overflow-hidden">
    <!-- Brand color background for light, dark bg for dark mode -->
    <div class="absolute inset-0 dark:bg-zinc-950" style="background: #00adee;"></div>
    <div class="absolute inset-0 hidden dark:block bg-zinc-950"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-white/80 dark:text-brand-400 font-bold tracking-wide uppercase text-sm mb-4">إثبات السوق</h2>
      <h3 class="text-3xl font-extrabold text-white mb-16 sm:text-5xl leading-tight">
        شراكات استراتيجية واعتماد مؤسسي
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(partner, idx) in partners" 
          :key="idx" 
          class="bg-white/10 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-zinc-800 hover:bg-white/20 dark:hover:bg-zinc-800/60 transition-colors group flex flex-col items-center justify-center text-center h-48"
        >
          <UIcon :name="partner.icon" class="w-12 h-12 text-white mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          <h4 class="text-xl font-bold text-white">{{ partner.name }}</h4>
        </div>
      </div>
      
      <div class="mt-20 flex justify-center">
        <div class="inline-flex items-center space-x-2 space-x-reverse bg-white/20 dark:bg-zinc-900/40 text-white px-6 py-2 rounded-full border border-white/30 dark:border-zinc-700">
          <span class="relative flex h-3 w-3 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span class="font-medium">نمو عضوي قوي يعكس حجم الاحتياج الحقيقي</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  { name: 'نقابة أطباء الشرقية', icon: 'i-heroicons-building-library' },
  { name: 'أكاديمية السادات للعلوم الإدارية', icon: 'i-heroicons-academic-cap' },
  { name: 'كلية الطب – جامعة الزقازيق', icon: 'i-heroicons-building-office-2' }
]
</script>
