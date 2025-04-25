<script setup lang="ts">
import { ref } from "vue";

// INTERFACE
interface Props {
  image_src: string;
}

// VARIABLES
const props = defineProps<Props>();
const is_open = ref(false);
const openModal = () => {
  is_open.value = true;
};
const closeModal = () => {
  is_open.value = false;
};
</script>
<template>
  <div>
    <img
      :src="props.image_src"
      alt="Preview"
      class="object-cover cursor-pointer rounded-lg border"
      style="width: 100%"
      @click="openModal"
    />
    <div
      v-if="is_open"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      @click="is_open = false"
    >
      <div class="relative">
        <button
          @click="closeModal"
          class="absolute -top-2 -right-2 bg-white rounded-lg p-1 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          :src="props.image_src"
          alt="Full Preview"
          class="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  </div>
</template>
