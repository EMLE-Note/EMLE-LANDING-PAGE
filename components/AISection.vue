<template>
  <section id="ai" class="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
    <!-- Background decorations -->
    <div class="absolute top-0 right-0 w-96 h-96 blur-[100px] rounded-full pointer-events-none" style="background: rgba(0,173,238,0.1);"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 blur-[100px] rounded-full pointer-events-none" style="background: rgba(0,173,238,0.08);"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <!-- AI Capabilities -->
        <div class="lg:w-2/3">
          <h2 class="font-bold tracking-wide uppercase text-sm mb-3" style="color: #00adee;">ذكاء اصطناعي حقيقي</h2>
          <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl leading-tight mb-6">
            المحرك التشغيلي الأساسي
          </h3>
          <p class="text-xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl leading-relaxed">
            الذكاء الاصطناعي في إيملي نوتس ليس مجرد إضافة تقنية ثانوية، بل هو المحرك الذي يدفع حدود الممكن في التعليم الطبي.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UCard 
              v-for="(feature, idx) in aiFeatures" 
              :key="idx"
              class="hover:-translate-y-1 hover:shadow-md hover:border-brand-400 dark:hover:border-brand-500 transition-all duration-300"
              :ui="{ body: { padding: 'p-6 sm:p-8' } }"
            >
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ml-5" style="background: rgba(0,173,238,0.08); color: #00adee;">
                  <UIcon :name="feature.icon" class="w-7 h-7" />
                </div>
                <div class="pt-1">
                  <h4 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">{{ feature.title }}</h4>
                  <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ feature.desc }}</p>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Metric Highlight -->
        <div class="lg:w-1/3 w-full">
          <div class="rounded-3xl p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500" style="background: linear-gradient(135deg, #00adee, #006a8f); box-shadow: 0 25px 50px rgba(0,173,238,0.2);">
            <div class="bg-white dark:bg-zinc-950 rounded-[22px] p-8 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full" style="background: rgba(0,173,238,0.1);"></div>
              
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-6" style="background: rgba(0,173,238,0.1); color: #00adee; border: 1px solid rgba(0,173,238,0.3);">
                <UIcon name="i-heroicons-arrow-trending-down" class="w-10 h-10" />
              </div>
              
              <div class="text-6xl font-black mb-4 gradient-text">
                70%
              </div>
              
              <h4 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">خفض في التكاليف</h4>
              <p class="text-zinc-600 dark:text-zinc-400 text-sm">تخفيض تكاليف الإنتاج والتشغيل بفضل الأتمتة المتقدمة للذكاء الاصطناعي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aiFeatures = [
  { title: 'التوليد التلقائي للأسئلة', desc: 'استخراج وتوليد أسئلة اختبارات موثوقة مباشرة من المراجع الطبية المعتمدة.', icon: 'i-heroicons-cpu-chip' },
  { title: 'التحليل والتلخيص التلقائي', desc: 'تلخيص المحاضرات المرئية الطويلة وإنشاء اختبارات قصيرة (Quizzes) فورية.', icon: 'i-heroicons-document-magnifying-glass' },
  { title: 'المساعد الطبي الذكي', desc: 'بوت نقاش طبي متقدم يفهم ويدعم اللهجات المحلية العربية لتسهيل استيعاب المفاهيم المعقدة.', icon: 'i-heroicons-chat-bubble-left-right' },
  { title: 'المريض الافتراضي المدعوم', desc: 'تقييم ردود فعل الطبيب وتشخيصاته بناءً على محادثات ديناميكية تحاكي الأعراض الحقيقية.', icon: 'i-heroicons-user' },
]
</script>
