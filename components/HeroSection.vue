<template>
  <section class="relative pt-32 pb-20 overflow-hidden sm:pt-40 sm:pb-24">
    <!-- Elevated Dynamic Animated Mesh Background -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Floating Blobs -->
      <div class="absolute -top-[10%] right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" style="background: #4dc7f9;"></div>
      <div class="absolute top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-20" style="background: #00adee;"></div>
      <div class="absolute -bottom-[20%] right-[20%] w-[60%] h-[60%] rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-20" style="background: #008bbe;"></div>
      
      <!-- Seamless fade overlay merging into the next section -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-zinc-50 dark:from-zinc-950/20 dark:via-zinc-950/80 dark:to-zinc-900/50"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-brand-600 dark:text-brand-400 ring-1 ring-zinc-300 dark:ring-zinc-700 hover:ring-brand-400 transition-all bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm cursor-pointer">
          تعرف على قدرات الذكاء الاصطناعي الجديدة <span aria-hidden="true" class="mr-1">&larr;</span>
        </div>
      </div>
      
      <h1 class="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl max-w-4xl mx-auto leading-tight">
        بنية تعليمية طبية رقمية متكاملة بـ <span class="gradient-text">الذكاء الاصطناعي</span>
      </h1>
      
      <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
        منصة مخصصة لتأهيل وتقييم الأطباء، تجمع بين التعلم، التقييم، والذكاء الاصطناعي لتوفير رحلة متكاملة من الدراسة الجامعية إلى التعليم الطبي المستمر.
      </p>
      
      <div class="mt-10 flex items-center justify-center space-x-6 space-x-reverse">
        <UButton size="xl" color="primary" variant="solid" class="text-base px-8 py-3 transform hover:scale-105 transition-transform">
          ابدأ مجاناً
        </UButton>
        <UButton size="xl" color="gray" variant="ghost" class="text-base px-8 py-3 group">
          استكشف المنتجات
          <UIcon name="i-heroicons-arrow-left" class="mr-2 group-hover:-translate-x-1 transition-transform" />
        </UButton>
      </div>
      
      <!-- Stats -->
      <div class="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="flex flex-col items-center">
            <span class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">+30,000</span>
            <span class="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wider">طبيب مسجل</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">+1,000,000</span>
            <span class="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wider">ساعة تعلم سنويًا</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">6</span>
            <span class="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wider">منتجات متكاملة</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">70%</span>
            <span class="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wider">خفض بالتكاليف</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-blob {
  animation: blob 15s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-40px, 40px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
</style>
