<template>
  <section id="products" class="py-24 bg-white dark:bg-zinc-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="font-bold tracking-wide uppercase text-sm mb-3" style="color: #00adee;">النظام البيئي</h2>
        <h3 class="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">منظومة منتجات متكاملة</h3>
        <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          تم بناء المنظومة لتعمل بشكل تكاملي؛ حيث تعزز كل ركيزة الركائز الأخرى، مما يرفع من القيمة التراكمية ويزيد من معدل احتفاظ المستخدمين.
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
              <UBadge :color="product.status === 'منتج فعّال' ? 'emerald' : 'amber'" variant="subtle" size="sm">
                {{ product.status }}
              </UBadge>
            </div>
            <h4 class="text-xl font-bold text-zinc-900 dark:text-white mt-5">{{ product.name }}</h4>
          </template>
          
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ product.desc }}</p>
          
          <template #footer>
            <UButton variant="link" color="primary" :padded="false" class="font-medium group">
              اكتشف المزيد
              <UIcon name="i-heroicons-arrow-left" class="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </UButton>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: 'تطبيق إيملي الأساسي', status: 'منتج فعّال', desc: 'تجربة تعلم وتقييم موحدة تجمع كافة الموارد في واجهة مستخدم واحدة مخصصة للتفاعل اليومي.', icon: 'i-heroicons-device-phone-mobile' },
  { name: 'الدورات الطبية المصورة', status: 'منتج فعّال', desc: 'فيديوهات طبية عالية الجودة تحت إشراف نخبة من الأساتذة، مقسمة لوحدات تعليمية دقيقة.', icon: 'i-heroicons-film' },
  { name: 'الكتب الطبية المتكاملة', status: 'منتج فعّال', desc: 'نظام قراءة إلكترونية متقدم مدعوم بالخرائط الذهنية التفاعلية لتسهيل استرجاع المعلومات.', icon: 'i-heroicons-book-open' },
  { name: 'بنك الأسئلة الذكي', status: 'منتج فعّال', desc: 'بنوك أسئلة تغطي البكالوريوس والزمالة، مزودة بنظام تحليل أداء دقيق يعزز الاستخدام المتكرر.', icon: 'i-heroicons-question-mark-circle' },
  { name: 'المجتمع الطبي المهني', status: 'منتج فعّال', desc: 'منصة تعلم اجتماعي تربط الأطباء والمؤسسات، وتسهل تتبع نقاط التطوير المهني (CPD).', icon: 'i-heroicons-user-group' },
  { name: 'المريض الافتراضي', status: 'قيد التطوير', desc: 'محاكاة تفاعلية واقعية باستخدام الذكاء الاصطناعي لتدريب الأطباء في بيئة سريرية آمنة وموجهة.', icon: 'i-heroicons-face-smile' },
]
</script>
