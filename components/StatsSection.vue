<template>
  <section ref="sectionRef" class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
    <!-- Glassmorphic Card Container -->
    <div class="relative w-full rounded-3xl bg-white/40 dark:bg-zinc-950/40 backdrop-blur-2xl border border-white/50 dark:border-zinc-800/50 shadow-2xl overflow-hidden py-10 md:py-14" style="box-shadow: 0 30px 60px -15px rgba(0,173,238,0.15);">
      
      <!-- Internal Subtle Glow -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent"></div>
        <div class="absolute bottom-0 right-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00adee] opacity-[0.03] dark:opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>
      </div>

      <div class="relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div v-for="(stat, idx) in stats" :key="idx" class="flex flex-col items-center justify-center p-2 rounded-2xl transition-transform duration-300 hover:-translate-y-2 group">
            <div class="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight flex items-baseline drop-shadow-sm group-hover:text-[#00adee] transition-colors duration-300">
              <span v-if="stat.prefix" class="text-3xl text-[#00adee] ml-1">{{ stat.prefix }}</span>
              <span class="tabular-nums font-bold" style="font-feature-settings: 'tnum';">{{ displayedStats[idx].toLocaleString('en-US') }}</span>
              <span v-if="stat.suffix" class="text-3xl text-[#00adee] mr-1">{{ stat.suffix }}</span>
            </div>
            <span class="text-sm md:text-base font-bold text-zinc-500 dark:text-zinc-400 tracking-wide text-center uppercase group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">{{ $t(stat.key) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stats = [
  { value: 30000, prefix: '+', suffix: '', key: 'stats.doctors' },
  { value: 1000000, prefix: '+', suffix: '', key: 'stats.hours' },
  { value: 6, prefix: '', suffix: '', key: 'stats.products' },
  { value: 70, prefix: '', suffix: '%', key: 'stats.cost_reduction' }
];

const displayedStats = ref(stats.map(() => 0));
const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateValues();
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

function animateValues() {
  const duration = 2500; // 2.5 seconds
  let startTimestamp = null;
  
  function update(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const elapsed = timestamp - startTimestamp;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out quart (smooth deceleration)
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    
    displayedStats.value = stats.map(stat => 
      Math.floor(stat.value * easeProgress)
    );
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Ensure exact final values
      displayedStats.value = stats.map(stat => stat.value);
    }
  }
  
  requestAnimationFrame(update);
}
</script>
