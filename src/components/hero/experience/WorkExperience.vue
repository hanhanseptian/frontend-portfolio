<script setup lang="ts">
import { work_experiences } from "@/modules/data";
import { ref } from "vue";

const work_experience = ref(work_experiences);
</script>
<template>
  <div
    class="rounded-3xl p-5 sm:p-15 grid grid-cols-12 gap-5 bg-neutral-900 rounded-tr-[130px] sm:rounded-tr-[320px] rounded-br-3xl sm:rounded-br-[320px]"
  >
    <div class="order-2 sm:order-1 col-span-12 sm:col-span-7">
      <div class="text-xl sm:text-5xl font-semibold">Work Experience</div>
      <div class="mt-2 sm:mt-5 sm:text-2xl">
        I’ve worked on various real-world software projects, both independently
        and in teams, which helped sharpen my skills and broaden my experience.
      </div>
      <div class="border-l-2 border-gray-300 pl-4 mt-10">
        <div v-for="item in work_experience" class="mt-5 sm:mt-10 relative">
          <div
            class="absolute w-4 h-4 rounded-full bg-primary -left-2.5 top-2"
          ></div>
          <div class="ml-5 bg-neutral-800 rounded-2xl p-5">
            <div class="grid grid-cols-12 gap-5">
              <div
                class="col-span-12 sm:col-span-2 bg-white rounded-xl p-2 text-center flex items-center justify-center"
              >
                <img :src="item.image" alt="logo" class="w-[50px] sm:w-auto" />
              </div>
              <div class="col-span-12 sm:col-span-10">
                <div class="sm:text-2xl font-semibold">
                  {{ item.company }} ({{ item.position }})
                </div>
                <div class="text-sm sm:text-lg mt-3 sm:mt-0">
                  {{ item.periode }}
                </div>
                <button
                  class="text-xs sm:text-lg text-primary bg-neutral-700 rounded-lg px-3 mt-5 pt-1 pb-0.5 hover:scale-110 duration-500 w-full sm:w-auto"
                  @click="item.show_description = !item.show_description"
                >
                  Show Description
                </button>
              </div>
            </div>
            <p
              v-if="item.show_description"
              class="mt-3 text-xs sm:text-lg fade-in"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="order-1 sm:order-2 col-span-12 sm:col-span-5 flex items-center justify-center"
    >
      <img
        src="@/assets/images/animation-personal-005.png"
        alt=""
        class="w-[200px] sm:w-auto"
      />
    </div>
  </div>
</template>
