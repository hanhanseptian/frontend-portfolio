<script setup lang="ts">
import { contacts } from "@/modules/data";
</script>

<template>
  <div
    id="contact"
    class="mt-20 pt-34 pb-10 sm:px-10 bg-[#111112] rounded-tl-[100px] rounded-bl-[20px] rounded-tr-[380px] rounded-br-[50px]"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-7">
        <div class="text-3xl font-bold text-primary mb-16 font-caveat">
          <div class="flex items-center gap-2">
            <hr class="w-20" />
            Need Some Project?
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-5xl font-bold">Let’s Build Something Together</div>
          <div class="text-3xl font-bold mt-2">
            Fixed a meeting, Starting Concept, Make a Design, Make Project Flow
            and Finish the Project
          </div>
        </div>
        <hr class="text-primary mt-3" />
        <div class="mt-15">
          <a
            :href="'mailto:' + contacts.email.address"
            target="_blank"
            class="flex items-center gap-5 bg-neutral-800 rounded-2xl p-5 hover:scale-105 duration-300"
          >
            <div
              class="w-15 h-15 rounded-full bg-primary p-3 flex items-center justify-center"
            >
              <i :class="contacts.email.icon" class="text-3xl text-black"></i>
            </div>
            <div>
              <div class="text-2xl text-neutral-300">Email</div>
              <a
                :href="'mailto:' + contacts.email.address"
                target="_blank"
                class="text-xl hover:text-[#c8f31d]"
              >
                {{ contacts.email.address }}
              </a>
            </div>
            <div class="ms-auto">
              <i class="fa-solid fa-arrow-right text-3xl text-primary"></i>
            </div>
          </a>
          <a
            :href="contacts.address.link"
            target="_blank"
            class="mt-5 flex items-center gap-5 bg-neutral-800 rounded-2xl p-5 hover:scale-105 duration-300"
          >
            <div
              class="w-15 h-15 rounded-full bg-primary p-3 flex items-center justify-center"
            >
              <i :class="contacts.address.icon" class="text-3xl text-black"></i>
            </div>
            <div>
              <div class="text-2xl text-neutral-300">Address</div>
              <div class="text-xl">
                {{ contacts.address.address }}
              </div>
            </div>
            <div class="ms-auto">
              <i class="fa-solid fa-arrow-right text-3xl text-primary"></i>
            </div>
          </a>
        </div>
      </div>
      <div class="col-span-5 flex justify-end">
        <div class="w-10/12">
          <img src="@/assets/images/animation-personal-007.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
