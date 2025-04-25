<script setup lang="ts">
import RGBButton from "../utils/RGBButton.vue";
import { social_media, contacts } from "@/modules/data";
</script>

<template>
  <div id="home" class="home-hero -mt-34 sm:-mt-20 pt-44 px-5 sm:px-10">
    <div class="grid grid-cols-12 gap-3">
      <div class="order-3 sm:order-1 col-span-1 bg-amber-300 rounded-2xl"></div>
      <div class="order-2 sm:order-2 col-span-12 sm:col-span-6 sm:pl-10">
        <div
          class="text-xs sm:text-3xl text-center sm:text-left sm:w-9/12 mt-5 sm:mt-0 animate-fade-in"
        >
          <div class="flex justify-center">
            <div class="w-6/12 sm:w-12/12">
              Currently Available For Software Development
            </div>
          </div>
          <hr class="sm:mt-5" />
        </div>
        <div class="mt-5 sm:mt-20 text-center sm:text-left animate-fade-in">
          <div class="text-4xl sm:text-9xl font-semibold">Software</div>
          <div class="text-6xl sm:text-[150px] font-bold text-primary sm:mt-5">
            Developer
          </div>
        </div>
        <a
          :href="contacts.portfolio.link"
          target="_blank"
          class="flex gap-2 mt-15 sm:mt-15 justify-center sm:justify-start"
        >
          <RGBButton class="hover:scale-105 animate-zoom-in">
            <template #button>
              <button
                class="bg-black rounded-xl flex gap-2 text-xs items-center justify-center px-2 py-1 sm:p-3 sm:text-xl animate-pulse"
              >
                <i class="fa-solid fa-download"></i>
                <span class="hidden sm:block">
                  Download Hanhan Septian's CV
                </span>
                <span class="sm:hidden">Download CV</span>
              </button>
            </template>
          </RGBButton>
        </a>
        <div
          class="mt-10 sm:mt-15 duration-700 text-center sm:text-left animate-fade-in"
        >
          <div class="text-xs sm:text-2xl">Follow Me:</div>
          <div
            class="flex gap-4 sm:gap-10 text-sm sm:text-3xl mt-2 sm:mt-5 justify-center sm:justify-start"
          >
            <a
              v-for="item in social_media"
              :key="item.name"
              :href="item.link"
              target="_blank"
              class="hover:scale-125 duration-300"
              :class="'hover:' + item.color"
            >
              <i :class="item.icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        class="order-1 sm:order-3 col-span-12 sm:col-span-5 flex justify-center items-center"
      >
        <div
          class="relative border-2 border-white rounded-full h-[40vw] w-[40vw] overflow-hidden bg-neutral-950 animate-roll-in animate-fade-in"
        >
          <img
            src="@/assets/images/profile-hanhan-001.png"
            alt="profile"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-hero {
  min-height: 100vh;
  background-image: url("@/assets/images/banner-bg-001.png");
}
</style>
