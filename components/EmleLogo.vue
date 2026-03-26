<template>
  <div class="relative inline-block" :class="props.class">
    <!-- Image Icon uses full width of parent -->
    <img src="~/assets/logo-image.png" alt="EMLE Notes Logo" class="w-full h-auto block" />
    
    <!-- Text Wrapper placed exactly in bottom right using percentage logic -->
    <!-- The font size is derived from viewport or explicit classes if preferred, but SVG or absolute percentage works best -->
    <div class="absolute bottom-[2%] right-[2%] flex flex-col text-left leading-[0.85] w-[45%]" style="transform-origin: bottom right;">
      <!-- Using an SVG guarantees perfect geometric scaling of the text within its allocated 45% width box! -->
      <svg viewBox="0 0 100 50" class="w-full h-auto overflow-visible">
        <text x="0" y="32" font-family="Nunito, sans-serif" font-weight="800" font-size="34" class="fill-zinc-900 dark:fill-white transition-colors duration-300 tracking-[1px]">EMLE</text>
        <text x="0" y="48" font-family="Nunito, sans-serif" font-weight="400" font-size="16" class="fill-zinc-600 dark:fill-zinc-300 transition-colors duration-300">Notes</text>
      </svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: 'w-48'
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');
</style>
