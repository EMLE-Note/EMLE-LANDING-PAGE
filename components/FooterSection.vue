<template>
  <footer class="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <NuxtLink to="/" class="flex items-center mb-4">
            <img src="~/assets/logo emli .png" alt="EMLE Notes" class="h-10 w-auto" />
          </NuxtLink>
          <p class="text-zinc-600 dark:text-zinc-400 max-w-sm mt-4 leading-relaxed">
            المنصة الرائدة في التعليم الطبي في العالم العربي. نحن نعيد تشكيل مستقبل التعليم الطبي للأطباء عبر مختلف المراحل.
          </p>
        </div>
        
        <!-- Links -->
        <div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">روابط سريعة</h3>
          <ul class="space-y-3">
            <li><a href="#products" class="text-zinc-600 dark:text-zinc-400 hover:underline" style="--hover-color: #00adee;" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''">المنتجات</a></li>
            <li><a href="#ai" class="text-zinc-600 dark:text-zinc-400 hover:underline" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''">الذكاء الاصطناعي</a></li>
            <li><a href="#roadmap" class="text-zinc-600 dark:text-zinc-400 hover:underline" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''">خارطة الطريق</a></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">قانوني</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-zinc-600 dark:text-zinc-400 hover:underline" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''">الشروط والأحكام</a></li>
            <li><a href="#" class="text-zinc-600 dark:text-zinc-400 hover:underline" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''">سياسة الخصوصية</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-zinc-500 dark:text-zinc-500 text-sm">
          &copy; {{ new Date().getFullYear() }} إيملي نوتس. جميع الحقوق محفوظة.
        </p>
        <div class="flex space-x-4 space-x-reverse mt-4 md:mt-0 text-zinc-400 dark:text-zinc-500">
          <UIcon name="i-heroicons-paper-airplane" class="w-6 h-6 cursor-pointer transition-colors" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''" />
          <UIcon name="i-heroicons-globe-alt" class="w-6 h-6 cursor-pointer transition-colors" @mouseenter="$event.target.style.color='#00adee'" @mouseleave="$event.target.style.color=''" />
        </div>
      </div>
    </div>
  </footer>
</template>
