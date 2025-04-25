<script setup lang="ts">
import ImagePreviewModal from "@/components/ImagePreviewModal.vue";
import Carousel from "@/components/utils/Carousel.vue";
import { personal_projects } from "@/modules/data";
</script>
<template>
  <div
    class="rounded-3xl p-5 sm:p-15 grid grid-cols-12 gap-5 bg-neutral-900 rounded-tl-[130px] sm:rounded-tl-[320px] rounded-bl-3xl sm:rounded-bl-[320px]"
  >
    <div class="col-span-12 sm:col-span-5 flex items-center justify-center">
      <img
        src="@/assets/images/animation-personal-008.png"
        alt=""
        class="w-[200px] sm:w-auto"
      />
    </div>
    <div class="col-span-12 sm:col-span-7">
      <div class="text-xl sm:text-5xl font-semibold">Personal Project</div>
      <div class="mt-2 sm:mt-5 sm:text-2xl">
        From solo coding sessions to team collaborations, I’ve worked on real
        software projects that pushed me to learn fast, solve problems, and keep
        leveling up.
      </div>
      <div class="mt-5 sm:mt-10">
        <Carousel>
          <div
            v-for="(item, i) in personal_projects"
            :key="i"
            class="w-full flex-shrink-0 border-white border rounded-2xl text-white flex items-center justify-center"
          >
            <div class="px-3 sm:px-10 py-2 sm:py-5">
              <div class="text-center">
                <div class="sm:text-3xl font-bold">
                  {{ item.name }}
                </div>
                <div class="text-sm sm:text-2xl italic">
                  As a {{ item.position }}
                </div>
                <div class="text-xs sm:text-[16px]">
                  {{ item.periode }}
                </div>
                <div
                  class="flex flex-wrap gap-1 sm:gap-3 justify-center items-center text-xs sm:text-[16px]"
                >
                  <div
                    v-for="tech in item.tech_stack"
                    class="border border-[#c8f31d] rounded-lg px-2"
                  >
                    {{ tech }}
                  </div>
                </div>
                <hr class="text-primary my-5" />
                <div class="text-xs sm:text-[16px] px-6 sm:px-2">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
</template>
