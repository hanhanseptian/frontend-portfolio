<script setup lang="ts">
import {
  databases,
  frameworks,
  libraries,
  programming_languages,
  tools,
} from "@/modules/data";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useStateManagement } from "@/stores";

// VARIABLES
const store = useStateManagement();
const tech_stack = ref([
  ...programming_languages,
  ...frameworks,
  ...databases,
  ...libraries,
  ...tools,
]);
const title_el = ref(null);
const is_title_visible = ref(false);
const tech_el = ref(null);
const is_tech_visible = ref(false);

useIntersectionObserver(title_el, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    is_title_visible.value = true;
    store.changeNav("SKILLS");
  }
});
useIntersectionObserver(tech_el, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    is_tech_visible.value = true;
  }
});
</script>

<template>
  <div id="skills" class="pt-15 sm:pt-34 pb-5 sm:pb-10 sm:px-10">
    <div class="grid grid-cols-12 text-right">
      <div
        class="col-span-12 sm:col-span-4 flex justify-center sm:justify-end"
        :class="is_title_visible ? 'animate-zoom-in' : 'opacity-0'"
      >
        <img
          src="@/assets/images/animation-personal-006.png"
          alt=""
          class="w-[200px] sm:w-auto"
        />
      </div>
      <div ref="title_el" class="col-span-12 sm:col-span-8">
        <div
          class="text-xl sm:text-5xl mt-5 sm:mt-0 items-end font-bold text-primary font-caveat"
        >
          <div
            class="flex items-center justify-end gap-5"
            :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
          >
            <hr class="w-30" />
            Programming Skills
          </div>
        </div>
        <div
          class="flex flex-col justify-end mt-5 sm:mt-24"
          :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
        >
          <div class="text-3xl sm:text-6xl font-bold">From Logic to launch</div>
          <div class="text-xl sm:text-5xl font-bold">
            Always learning, optimizing, and pushing boundaries with code
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-10 flex justify-end">
      <div
        class="bg-[#111112] rounded-[50px] sm:rounded-[100px] py-5 sm:py-30 w-12/12"
      >
        <div
          class="text-center"
          :class="is_tech_visible ? 'animate-fade-in' : 'opacity-0'"
        >
          <i class="fa-solid fa-code text-primary text-3xl sm:text-6xl"></i>
          <div class="text-xl sm:text-3xl mt-3">Tech Stack</div>
        </div>
        <div
          ref="tech_el"
          class="mt-5 sm:mt-10 w-full overflow-hidden"
          :class="is_tech_visible ? 'animate-zoom-in' : 'opacity-0'"
        >
          <div class="flex w-max marquee paused">
            <div class="flex gap-4">
              <div v-for="item in tech_stack" class="animate-pulse">
                <div class="p-5 sm:p-10 bg-neutral-950 rounded-2xl">
                  <div
                    class="text-center flex flex-col items-center justify-center"
                  >
                    <img
                      :src="item.logo"
                      class="rounded-lg w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] object-contain"
                      :class="{ 'outlined-img': item.name === 'Flask' }"
                    />
                    <div
                      class="text-white text-center text-lg sm:text-2xl font-semibold mt-5"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-4 ml-4">
              <div v-for="item in tech_stack" class="animate-pulse">
                <div class="p-5 sm:p-10 bg-neutral-950 rounded-2xl">
                  <div
                    class="text-center flex flex-col items-center justify-center"
                  >
                    <img
                      :src="item.logo"
                      class="rounded-lg w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] object-contain"
                      :class="{ 'outlined-img': item.name === 'Flask' }"
                    />
                    <div
                      class="text-white text-center text-lg sm:text-2xl font-semibold mt-5"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.marquee {
  animation: marquee 40s linear infinite;
}
.paused:hover {
  animation-play-state: paused;
}
</style>
