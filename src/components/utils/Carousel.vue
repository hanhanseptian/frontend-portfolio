<script setup lang="ts">
import { ref, onMounted } from "vue";

// VARIABLES
const current_index = ref(0);
const slide_count = ref(0);
const slide_wrapper = ref<HTMLElement | null>(null);

// FUNCTION
const prevSlide = () => {
  current_index.value =
    current_index.value === 0 ? slide_count.value - 1 : current_index.value - 1;
};
const nextSlide = () => {
  current_index.value =
    current_index.value === slide_count.value - 1 ? 0 : current_index.value + 1;
};
const goToSlide = (index: number) => {
  current_index.value = index;
};

// LIFECYLE HOOKS
onMounted(() => {
  if (slide_wrapper.value) {
    slide_count.value = slide_wrapper.value.children.length;
  }
  const interval_id = setInterval(() => {
    nextSlide();
  }, 10000);
});
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div
      ref="slide_wrapper"
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${current_index * 100}%)` }"
    >
      <slot />
    </div>
    <button
      class="absolute top-1/2 left-2 -translate-y-1/2 bg-primary p-2 rounded-full shadow hover:bg-gray-200"
      @click="prevSlide"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button
      class="absolute top-1/2 right-2 -translate-y-1/2 bg-primary p-2 rounded-full shadow hover:bg-gray-200"
      @click="nextSlide"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      <span
        v-for="(_, i) in slide_count"
        :key="i"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="i === current_index ? 'bg-primary' : 'bg-gray-300'"
        @click="goToSlide(i)"
      ></span>
    </div>
  </div>
</template>
