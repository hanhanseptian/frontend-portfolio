<script setup lang="ts">
import ImagePreviewModal from "@/components/ImagePreviewModal.vue";
import { achievements } from "@/modules/data";
</script>
<template>
  <div class="rounded-3xl p-5 sm:p-15 grid grid-cols-12 gap-5 bg-neutral-900">
    <div class="col-span-12 sm:col-span-5 flex items-center justify-center">
      <img
        src="@/assets/images/animation-personal-003.png"
        alt=""
        class="h-[150px] sm:h-auto"
      />
    </div>
    <div class="col-span-12 sm:col-span-7">
      <div class="text-xl sm:text-5xl font-semibold">
        Achievements & Licence
      </div>
      <div class="mt-2 sm:mt-5 text-sm sm:text-2xl">
        I have a passion for coding and software development, and I am always
        eager to learn new technologies and improve my skills. I have
        participated in various training and projects that have helped me grow
        as a developer.
      </div>
      <div class="grid grid-cols-1 mt-5 sm:mt-10">
        <div v-for="item in achievements" class="col-span-1 mb-10">
          <div class="flex flex-wrap sm:flex-nowrap gap-5">
            <div class="w-12/12 sm:w-auto sm:max-w-[250px]">
              <ImagePreviewModal :image_src="item.image" />
            </div>
            <div class="w-12/12 sm:w-auto">
              <div class="sm:text-2xl font-semibold">{{ item.title }}</div>
              <div class="text-sm font-semibold">
                {{ item.organization }} - {{ item.year }}
              </div>
              <div class="text-sm sm:text-lg mt-3">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
