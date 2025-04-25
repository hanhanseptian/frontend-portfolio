<script setup lang="ts">
import ImagePreviewModal from "@/components/ImagePreviewModal.vue";
import { achievements } from "@/modules/data";
</script>
<template>
  <div class="rounded-3xl p-15 grid grid-cols-12 gap-5 bg-neutral-900">
    <div class="col-span-5 flex items-center justify-center">
      <img src="@/assets/images/animation-personal-003.png" alt="" />
    </div>
    <div class="col-span-7">
      <div class="text-5xl font-semibold">Achievements</div>
      <div class="mt-5 text-2xl">
        I have a passion for coding and software development, and I am always
        eager to learn new technologies and improve my skills. I have
        participated in various training and projects that have helped me grow
        as a developer.
      </div>
      <div class="grid grid-cols-1 mt-10">
        <div v-for="item in achievements" class="col-span-1 mb-10">
          <div class="flex gap-5">
            <div style="max-width: 200px">
              <ImagePreviewModal :image_src="item.image" />
            </div>
            <div>
              <div class="text-2xl font-semibold">{{ item.title }}</div>
              <div class="font-semibold">
                {{ item.organization }} - {{ item.year }}
              </div>
              <div class="text-lg mt-3">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
