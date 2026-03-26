<template>
  <footer class="relative bg-white dark:bg-zinc-950 pt-20 pb-10 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
    <!-- Optional: Subtle top glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-[#00adee] to-transparent opacity-50"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-24 blur-[100px] opacity-10 dark:opacity-20 pointer-events-none" style="background: #00adee;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Pre-footer CTA -->
      <div class="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between border border-zinc-100 dark:border-zinc-800 relative overflow-hidden group">
        <div class="absolute -right-10 -top-10 w-40 h-40 opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity" style="background: #00adee;"></div>
        <div class="absolute -left-10 -bottom-10 w-40 h-40 opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity" style="background: #008bbe;"></div>
        
        <div class="mb-6 md:mb-0 relative z-10 text-center md:text-right">
          <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">مستعد للارتقاء بتجربتك التعليمية؟</h3>
          <p class="text-zinc-600 dark:text-zinc-400">انضم إلى آلاف الأطباء الذين يثقون في إيملي نوتس يومياً.</p>
        </div>
        <div class="relative z-10">
          <UButton size="xl" color="primary" variant="solid" class="px-8 font-bold shadow-lg shadow-[#00adee]/20 hover:scale-105 transition-transform" style="background-color: #00adee; color: white;">
            ابدأ رحلتك مجاناً
          </UButton>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
        
        <!-- Brand & Description -->
        <div class="md:col-span-12 lg:col-span-4">
          <NuxtLink to="/" class="inline-flex items-center mb-6">
            <img src="~/assets/logo emli .png" alt="EMLE Notes" class="h-10 w-auto" />
          </NuxtLink>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 lg:max-w-sm">
            المنصة الرائدة في التقييم والتعليم الطبي في العالم العربي. نحن نعيد تشكيل مستقبل التطور المهني للأطباء عبر دمج أحدث تقنيات الذكاء الاصطناعي بالمنهجيات الطبية المعتمدة.
          </p>
          <!-- Social Icons -->
          <div class="flex space-x-3 space-x-reverse">
            <a href="#" class="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#00adee] transition-all duration-300">
              <UIcon name="i-heroicons-globe-alt" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#00adee] transition-all duration-300">
              <UIcon name="i-heroicons-video-camera" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#00adee] transition-all duration-300">
              <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#00adee] transition-all duration-300">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Navigation Links -->
        <div class="md:col-span-4 lg:col-span-2 lg:col-start-6">
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-5">المنصة</h3>
          <ul class="space-y-4">
            <li><a href="#products" class="text-zinc-600 dark:text-zinc-400 hover:text-[#00adee] transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ml-2 group-hover:bg-[#00adee] transition-colors"></span>منتجاتنا</a></li>
            <li><a href="#ai" class="text-zinc-600 dark:text-zinc-400 hover:text-[#00adee] transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ml-2 group-hover:bg-[#00adee] transition-colors"></span>الذكاء الاصطناعي</a></li>
            <li><a href="#roadmap" class="text-zinc-600 dark:text-zinc-400 hover:text-[#00adee] transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ml-2 group-hover:bg-[#00adee] transition-colors"></span>الرؤية المستقبلية</a></li>
          </ul>
        </div>
        
        <!-- Legal Links -->
        <div class="md:col-span-4 lg:col-span-2">
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-5">قانوني</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-zinc-600 dark:text-zinc-400 hover:text-[#00adee] transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ml-2 group-hover:bg-[#00adee] transition-colors"></span>الشروط والأحكام</a></li>
            <li><a href="#" class="text-zinc-600 dark:text-zinc-400 hover:text-[#00adee] transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ml-2 group-hover:bg-[#00adee] transition-colors"></span>سياسة الخصوصية</a></li>
            <li><a href="#" class="text-zinc-600 dark:text-zinc-400 hover:text-[#00adee] transition-colors flex items-center group"><span class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ml-2 group-hover:bg-[#00adee] transition-colors"></span>اتصل بنا</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="md:col-span-4 lg:col-span-3">
          <h3 class="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-5">النشرة الطبية</h3>
          <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4">اشترك ليصلك آخر التحديثات والأخبار حول إيملي نوتس والإضافات التعليمية الجديدة.</p>
          <form class="flex" @submit.prevent>
            <div class="relative w-full">
              <input type="email" placeholder="البريد الإلكتروني" class="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-r-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:border-transparent transition-all" style="--tw-ring-color: #00adee;" />
            </div>
            <button type="submit" class="rounded-l-lg px-6 font-semibold text-white transition-opacity hover:opacity-90 flex-shrink-0" style="background-color: #00adee;">
              اشترك
            </button>
          </form>
        </div>

      </div>
      
      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-zinc-500 text-sm">
          &copy; {{ new Date().getFullYear() }} إيملي نوتس (EMLE Notes). جميع الحقوق محفوظة.
        </p>
        <div class="flex items-center space-x-2 space-x-reverse text-sm text-zinc-500">
          <span>صُنع بشغف لتمكين الأطباء</span>
          <UIcon name="i-heroicons-heart-solid" class="w-4 h-4 text-red-500 animate-pulse" />
        </div>
      </div>
      
    </div>
  </footer>
</template>
