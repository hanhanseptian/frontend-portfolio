<script setup lang="ts">
import { social_media, contacts } from "@/modules/data";
</script>
<template>
  <div class="rounded-3xl p-5 sm:p-15 grid grid-cols-12 gap-5 bg-neutral-900">
    <div class="col-span-12 sm:col-span-5 flex items-center justify-center">
      <img
        src="@/assets/images/animation-personal-001.png"
        alt=""
        class="h-[150px] sm:h-auto"
      />
    </div>
    <div class="col-span-12 sm:col-span-7">
      <div class="text-xl sm:text-5xl font-semibold">Personal Information</div>
      <div class="mt-2 sm:mt-5 text-sm sm:text-2xl">
        Hi! I'm a Software Developer specializing in full-stack development
        using JavaScript, TypeScript, Python etc.. Strong background in building
        REST APIs, microservices, and user-friendly interfaces.
      </div>
      <div class="grid grid-cols-2 gap-5 mt-5 sm:mt-10">
        <a
          :href="contacts.address.link"
          target="_blank"
          class="col-span-2 bg-neutral-800 p-3 sm:p-5 rounded-2xl hover:bg-neutral-800 hover:scale-105 duration-500"
        >
          <a class="sm:text-2xl font-semibold flex gap-2 items-center mb-3">
            <i
              :class="contacts.address.icon + ' ' + contacts.address.color"
            ></i>
            Address
          </a>
          <div class="text-xs sm:text-lg">
            {{ contacts.address.address }}
          </div>
        </a>
        <a
          :href="'mailto:' + contacts.email.address"
          target="_blank"
          class="bg-neutral-800 p-3 sm:p-5 col-span-2 sm:col-span-1 rounded-2xl hover:bg-neutral-800 hover:scale-105 duration-500"
        >
          <div class="sm:text-2xl font-semibold flex gap-2 items-center mb-3">
            <i :class="contacts.email.icon"></i> Email
          </div>
          <div class="text-xs sm:text-lg">{{ contacts.email.address }}</div>
        </a>
        <a
          :href="
            'https://api.whatsapp.com/send?phone=62' + contacts.whatsapp.number
          "
          target="_blank"
          class="bg-neutral-800 p-3 sm:p-5 col-span-2 sm:col-span-1 rounded-2xl hover:bg-neutral-800 hover:scale-105 duration-500"
        >
          <div class="sm:text-2xl font-semibold flex gap-2 items-center mb-3">
            <i
              :class="contacts.whatsapp.icon + ' ' + contacts.whatsapp.color"
            ></i>
            Whatsapp
          </div>
          <div class="text-xs sm:text-lg">0{{ contacts.whatsapp.number }}</div>
        </a>
        <div class="col-span-2">
          <div class="bg-neutral-800 p-5 rounded-2xl">
            <div class="sm:text-2xl font-semibold flex gap-2 items-center mb-3">
              <i class="fa-solid fa-share-from-square"></i> Social Media
            </div>
            <div class="grid grid-cols-4 gap-3">
              <a v-for="item in social_media" :href="item.link" target="_blank">
                <div
                  class="text-center bg-neutral-900 rounded-lg pt-1 sm:pt-3 sm:pb-2 hover:scale-105 duration-500 hover:cursor-pointer"
                  :class="item.color"
                >
                  <i :class="item.icon" class="sm:text-2xl"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
