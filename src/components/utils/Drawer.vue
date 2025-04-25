<script lang="ts" setup>
import { ref } from "vue";

// VARIABLES
const is_drawer_open = ref(false);
</script>
<template>
  <div>
    <div @click="is_drawer_open = true">
      <slot name="trigger"> </slot>
    </div>
    <transition name="slide">
      <div
        v-if="is_drawer_open"
        class="fixed inset-0 z-50 flex w-full h-screen"
        @click="is_drawer_open = false"
      >
        <div class="fixed inset-0 bg-opacity-50"></div>
        <div
          class="ml-auto w-8/12 h-screen bg-neutral-950 shadow-xl p-4 overflow-auto rounded-tl-3xl rounded-bl-3xl -mr-5"
        >
          <button
            class="absolute top-4 right-4 text-white hover:text-[#c8f31d]"
            @click="is_drawer_open = false"
          >
            ✕
          </button>
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
