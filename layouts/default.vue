<template>
  <div class="min-h-screen flex flex-col items-center overflow-x-hidden pt-16 font-sans">
    <Navbar />
    <main class="w-full flex-grow">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
