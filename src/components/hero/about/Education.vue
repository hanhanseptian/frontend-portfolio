<script setup lang="ts">
import { educations } from "@/modules/data";
</script>
<template>
  <div class="rounded-3xl p-5 sm:p-15 grid grid-cols-12 gap-5 bg-neutral-900">
    <div class="order-2 sm:order-1 col-span-12 sm:col-span-7">
      <div class="text-xl sm:text-5xl font-semibold">Education History</div>
      <div class="mt-2 sm:mt-5 text-sm sm:text-2xl">
        I earned a Diploma in Informatics Engineering, where I discovered my
        passion for coding and learned how to build and manage software systems
        from the ground up.
      </div>
      <div class="grid grid-cols-1 mt-5 sm:mt-10">
        <hr class="mb-2" />
        <div v-for="item in educations" class="col-span-1 mb-2">
          <div class="mb-2">
            <div class="sm:text-2xl font-semibold">
              {{ item.major }} {{ item.gpa ? `(GPA - ${item.gpa})` : "" }}
            </div>
            <div class="text-sm sm:text-lg text-neutral-500">
              {{ item.title }}, {{ item.year }}
            </div>
            <div class="text-sm sm:text-lg text-neutral-500">
              {{ item?.description || "" }}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div
      class="order-1 sm:order-2 col-span-12 sm:col-span-5 flex items-center justify-center"
    >
      <img
        src="@/assets/images/animation-personal-004.png"
        alt=""
        class="h-[150px] sm:h-auto"
      />
    </div>
  </div>
</template>
