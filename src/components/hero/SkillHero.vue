<script setup lang="ts">
import {
  databases,
  frameworks,
  libraries,
  programming_languages,
  tools,
} from "@/modules/data";
import { ref } from "vue";

// VARIABLES
const tech_stack = ref([
  ...programming_languages,
  ...frameworks,
  ...databases,
  ...libraries,
  ...tools,
]);
</script>

<template>
  <div id="skills" class="pt-34 pb-10 sm:px-10">
    <div class="grid grid-cols-12 text-right">
      <div class="col-span-4 flex justify-end">
        <div class="w-10/12">
          <img src="@/assets/images/animation-personal-006.png" alt="" />
        </div>
      </div>
      <div class="col-span-8">
        <div
          class="text-5xl items-end font-bold text-primary mb-24 font-caveat"
        >
          <div class="flex items-center justify-end gap-5">
            <hr class="w-30" />
            Programming Skills
          </div>
        </div>
        <div class="flex flex-col justify-end">
          <div class="text-6xl font-bold">From Logic to launch</div>
          <div class="text-5xl font-bold">
            Always learning, optimizing, and pushing boundaries with code
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 flex justify-end">
      <div class="bg-[#111112] rounded-[100px] py-30 w-12/12">
        <div class="text-center">
          <i class="fa-solid fa-code text-primary text-6xl"></i>
          <div class="text-3xl mt-3">Tech Stack</div>
        </div>
        <div class="mt-10 w-full overflow-hidden">
          <div class="flex w-max marquee paused">
            <div class="flex gap-4">
              <div v-for="item in tech_stack">
                <div class="p-10 bg-neutral-950 rounded-2xl">
                  <div class="text-center items-center justify-center">
                    <img
                      :src="item.logo"
                      class="rounded-lg"
                      :class="{ 'outlined-img': item.name === 'Flask' }"
                      style="width: 100px; height: 100px; object-fit: contain"
                    />
                    <div
                      class="text-white text-center text-2xl font-semibold mt-5"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-4 ml-4">
              <div v-for="item in tech_stack">
                <div class="p-10 bg-neutral-950 rounded-2xl">
                  <div class="text-center items-center justify-center">
                    <img
                      :src="item.logo"
                      class="rounded-lg"
                      :class="{ 'outlined-img': item.name === 'Flask' }"
                      style="width: 100px; height: 100px; object-fit: contain"
                    />
                    <div
                      class="text-white text-center text-2xl font-semibold mt-5"
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
