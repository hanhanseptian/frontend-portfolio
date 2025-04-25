<script setup lang="ts">
import ImagePreviewModal from "@/components/ImagePreviewModal.vue";
import Carousel from "@/components/utils/Carousel.vue";
import { personal_projects } from "@/modules/data";
</script>
<template>
  <div class="rounded-3xl p-15 grid grid-cols-12 gap-5 bg-neutral-900">
    <div class="col-span-7">
      <div class="text-5xl font-semibold">Personal Project</div>
      <div class="mt-5 text-2xl">
        From solo coding sessions to team collaborations, I’ve worked on real
        software projects that pushed me to learn fast, solve problems, and keep
        leveling up.
      </div>
      <div class="mt-10">
        <Carousel>
          <div
            v-for="(item, i) in personal_projects"
            :key="i"
            class="w-full flex-shrink-0 border-white border rounded-2xl text-white flex items-center justify-center"
          >
            <div class="px-10 py-5">
              <div class="text-center">
                <div class="text-3xl font-bold">
                  {{ item.name }}
                </div>
                <div class="text-2xl italic">As a {{ item.position }}</div>
                <div>
                  {{ item.periode }}
                </div>
                <hr class="text-primary my-5" />
                <div>
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
    <div class="col-span-5 flex items-center justify-center">
      <img src="@/assets/images/animation-personal-008.png" alt="" />
    </div>
  </div>
</template>
