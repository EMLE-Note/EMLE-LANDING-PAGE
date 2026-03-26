<template>
  <section id="roadmap" class="py-24 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-bold tracking-wide uppercase text-sm mb-3" style="color: #00adee;">الرؤية المستقبلية</h2>
        <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl leading-tight">
          الطريق نحو جامعة طبية رقمية
        </h3>
      </div>

      <div class="relative max-w-5xl mx-auto mt-10">
        <!-- Vertical Line (Mobile physical right, Desktop center) -->
        <div class="absolute right-6 md:right-1/2 top-4 bottom-4 w-1 bg-zinc-200 dark:bg-zinc-800 translate-x-1/2 md:translate-x-1/2 rounded-full overflow-hidden">
          <div class="w-full h-1/3 bg-gradient-to-b from-brand-500/80 to-transparent"></div>
        </div>
        
        <div class="space-y-12 md:space-y-24">
          <div v-for="(phase, idx) in phases" :key="idx" class="relative group flex w-full">
            
            <!-- Central Node (Dot on the vertical line) -->
            <div class="absolute right-6 md:right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center z-10">
              <div class="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white dark:bg-zinc-950 shadow-md transition-all duration-300 group-hover:scale-125 group-hover:shadow-brand-500/30" style="border: 4px solid #00adee;">
                <div class="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full transition-colors duration-300 group-hover:bg-brand-500" style="background: #00adee;"></div>
              </div>
            </div>

            <!-- Card 0, 2, 4 (Desktop Right Half / Mobile Full) -->
            <div v-if="idx % 2 === 0" class="w-full md:w-1/2 pr-20 md:pr-0 md:pl-20 relative flex items-center group">
              <!-- Horizontal connecting line (Desktop only) -->
              <div class="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-16 h-1 bg-zinc-200 dark:bg-zinc-800 group-hover:bg-brand-500 transition-colors duration-300"></div>
              
              <div class="w-full bg-white dark:bg-zinc-950 p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02] relative z-20 text-right">
                <span class="font-bold text-sm mb-3 block" style="color: #00adee;">المرحلة {{ getArabicNumber(idx + 1) }}</span>
                <h4 class="text-2xl font-extrabold text-zinc-900 dark:text-white mb-2">{{ phase.title }}</h4>
                <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ phase.desc }}</p>
              </div>
            </div>

            <div v-if="idx % 2 === 0" class="hidden md:block md:w-1/2"></div>
            
            <div v-if="idx % 2 !== 0" class="hidden md:block md:w-1/2"></div>

            <!-- Card 1, 3 (Desktop Left Half / Mobile Full) -->
            <div v-if="idx % 2 !== 0" class="w-full md:w-1/2 pr-20 md:pr-20 md:pl-0 relative flex items-center group">
              <!-- Horizontal connecting line (Desktop only) -->
               <div class="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 w-16 h-1 bg-zinc-200 dark:bg-zinc-800 group-hover:bg-brand-500 transition-colors duration-300"></div>
               
              <div class="w-full bg-white dark:bg-zinc-950 p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02] relative z-20 text-right md:text-left">
                <span class="font-bold text-sm mb-3 block" style="color: #00adee;">المرحلة {{ getArabicNumber(idx + 1) }}</span>
                <h4 class="text-2xl font-extrabold text-zinc-900 dark:text-white mb-2">{{ phase.title }}</h4>
                <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ phase.desc }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const phases = [
  { title: 'التوسع الجغرافي', desc: 'الانطلاق نحو السوق السعودي ودول مجلس التعاون الخليجي بخطى واثقة وميزات مخصصة للمنطقة.' },
  { title: 'التوسع الأكاديمي', desc: 'إضافة تخصصات صحية جديدة وبرامج زمالة متقدمة تغطي تخصصات إضافية.' },
  { title: 'نموذج الجامعة الافتراضية', desc: 'الإطلاق الرسمي للجامعة الطبية الافتراضية بالكامل وإعادة صياغة التعلم المنهجي.' },
  { title: 'الاعتماد الدولي', desc: 'الحصول على اعتمادات دولية وتقديم شهادات موثوقة ومعترف بها عالميًا.' },
  { title: 'التقنيات الغامرة', desc: 'دمج تقنيات الواقع الافتراضي (VR) والمحاكاة المتقدمة للتدريب الجراحي والسريري.' },
]

function getArabicNumber(num) {
  const arabicNumbers = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'];
  return arabicNumbers[num - 1] || num;
}
</script>
