<script setup lang="ts">
import { ref } from "vue";
import WorkExperience from "./experience/WorkExperience.vue";
import PersonalProject from "./experience/PersonalProject.vue";

// VARIABLES
const about_tabs = ref([
  {
    title: "Work Experience",
  },
  {
    title: "Personal Project",
  },
]);
const current_tab = ref("Work Experience");
</script>

<template>
  <div
    id="experiences"
    class="pt-15 sm:pt-34 pb-5 sm:pb-10 px-5 sm:px-10 bg-zinc-950 rounded-tr-4xl"
    style="border-radius: 35% 20px 330px 20px"
  >
    <div
      class="text-xl sm:text-5xl font-bold text-center text-primary mb-5 sm:mb-10 font-caveat"
    >
      <div class="flex items-center justify-center gap-5">
        <hr class="w-20" />
        Experiences
        <hr class="w-20" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="sm:w-8/12 text-center text-2xl sm:text-6xl font-bold">
        Hands-on with real projects
      </div>
      <div class="sm:w-9/12 text-center text-xl sm:text-5xl font-bold">
        Learning, building, and evolving through every role
      </div>
    </div>
    <div class="mt-10 sm:mt-20">
      <div class="flex gap-2 sm:gap-5 justify-center items-center">
        <button
          v-for="item in about_tabs"
          class="rounded-xl text-xs sm:text-2xl px-3 sm:px-5 py-2 bg-neutral-900 hover:cursor-pointer hover:scale-110 duration-200"
          :class="{
            'bg-primary text-black': current_tab === item.title,
          }"
          @click="current_tab = item.title"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
    <div class="mt-10 sm:mt-20">
      <WorkExperience
        v-if="current_tab === 'Work Experience'"
        class="fade-in"
      />
      <PersonalProject
        v-else-if="current_tab === 'Personal Project'"
        class="fade-in"
      />
    </div>
  </div>
</template>
