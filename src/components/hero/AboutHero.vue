<script setup lang="ts">
import { ref } from "vue";
import PersonallInfo from "./about/PersonallInfo.vue";
import Education from "./about/Education.vue";
import Achievements from "./about/Achievements.vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useStateManagement } from "@/stores";

// VARIABLES
const store = useStateManagement();
const about_tabs = ref([
  {
    title: "Personal Information",
  },
  {
    title: "Education History",
  },
  {
    title: "Achievements",
  },
]);
const current_tab = ref("Personal Information");
const title_el = ref(null);
const is_title_visible = ref(false);
const info_el = ref(null);
const is_info_visible = ref(false);

useIntersectionObserver(title_el, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    is_title_visible.value = true;
    store.changeNav("ABOUT");
  } else {
    is_title_visible.value = false;
  }
});
useIntersectionObserver(info_el, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    is_info_visible.value = true;
  } else {
    is_info_visible.value = false;
  }
});
</script>

<template>
  <div id="about" class="pt-15 sm:pt-34 pb-5 sm:pb-10 sm:px-10">
    <div
      class="text-5xl sm:text-7xl font-bold text-center text-primary mb-10"
      :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
    >
      <i class="fa-solid fa-lemon"></i>
    </div>
    <div class="flex items-center justify-center">
      <div
        ref="title_el"
        :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
        class="sm:w-8/12 text-center text-xl sm:text-4xl font-semibold"
      >
        Hai, I'm
        <span class="text-primary text-[22px] sm:text-[40px] font-black">
          Hanhan Septian </span
        >, a Software Developer currently based in Cimahi, West Java. I'm ready
        to take on any
        <i class="text-primary">Software Development</i> challenge
      </div>
    </div>
    <div class="mt-5 sm:mt-20">
      <div
        class="flex gap-2 sm:gap-5 justify-center items-center"
        :class="is_title_visible ? 'animate-zoom-in' : 'opacity-0'"
      >
        <button
          v-for="item in about_tabs"
          class="rounded-xl text-xs sm:text-2xl px-2 sm:px-5 py-2 bg-neutral-900 hover:cursor-pointer hover:scale-110 duration-200"
          :class="{
            'bg-primary text-black': current_tab === item.title,
          }"
          @click="current_tab = item.title"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
    <div
      ref="info_el"
      class="mt-5 sm:mt-20"
      :class="is_info_visible ? 'animate-zoom-in' : 'opacity-0'"
    >
      <PersonallInfo
        v-if="current_tab === 'Personal Information'"
        class="animate-fade-in"
      />
      <Education
        v-else-if="current_tab === 'Education History'"
        class="animate-fade-in"
      />
      <Achievements
        v-else-if="current_tab === 'Achievements'"
        class="animate-fade-in"
      />
    </div>
  </div>
</template>
