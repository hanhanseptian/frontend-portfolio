<script setup lang="ts">
import { contacts } from "@/modules/data";
import { useStateManagement } from "@/stores";
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

// VARIABLES
const store = useStateManagement();
const title_el = ref(null);
const is_title_visible = ref(false);

useIntersectionObserver(title_el, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    is_title_visible.value = true;
    store.changeNav("CONTACT");
  }
});
</script>

<template>
  <div
    id="contact"
    class="mt-10 sm:mt-20 pt-10 sm:pt-34 pb-5 sm:pb-10 px-5 sm:px-10 bg-[#111112] rounded-4xl sm:rounded-tl-[100px] sm:rounded-bl-[20px] sm:rounded-tr-[380px] sm:rounded-br-[50px]"
  >
    <div class="grid grid-cols-12">
      <div class="order-2 sm:order-1 col-span-12 sm:col-span-7 mt-10 sm:mt-0">
        <div
          class="text-lg sm:text-3xl font-bold text-primary font-caveat"
          :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
        >
          <div class="flex items-center gap-2">
            <hr class="w-20" />
            Need Some Project?
          </div>
        </div>
        <div
          ref="title_el"
          class="mt-5 sm:mt-16 flex flex-col"
          :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
        >
          <div class="text-2xl sm:text-5xl font-bold">
            Let’s Build Something Together
          </div>
          <div class="text-lg sm:text-3xl font-bold mt-2">
            Fixed a meeting, Starting Concept, Make a Design, Make Project Flow
            and Finish the Project
          </div>
        </div>
        <hr class="text-primary mt-3" />
        <div class="mt-5 sm:mt-15">
          <a
            :href="'mailto:' + contacts.email.address"
            target="_blank"
            class="flex items-center gap-5 bg-neutral-800 rounded-2xl p-3 sm:p-5 hover:scale-105 duration-300"
            :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
          >
            <div
              class="w-15 h-15 rounded-full bg-primary p-3 flex items-center justify-center"
            >
              <i
                :class="contacts.email.icon"
                class="text-xl sm:text-3xl text-black"
              ></i>
            </div>
            <div>
              <div class="text-lg sm:text-2xl text-neutral-300">Email</div>
              <a
                :href="'mailto:' + contacts.email.address"
                target="_blank"
                class="sm:text-xl hover:text-[#c8f31d]"
              >
                {{ contacts.email.address }}
              </a>
            </div>
            <div class="ms-auto">
              <i
                class="fa-solid fa-arrow-right text-xl sm:text-3xl text-primary"
              ></i>
            </div>
          </a>
          <a
            :href="contacts.address.link"
            target="_blank"
            class="mt-5 flex items-center gap-5 bg-neutral-800 rounded-2xl p-3 sm:p-5 hover:scale-105 duration-300"
            :class="is_title_visible ? 'animate-fade-in' : 'opacity-0'"
          >
            <div
              class="w-15 h-15 rounded-full bg-primary p-3 flex items-center justify-center"
            >
              <i
                :class="contacts.address.icon"
                class="text-xl sm:text-3xl text-black"
              ></i>
            </div>
            <div>
              <div class="text-lg sm:text-2xl text-neutral-300">Address</div>
              <div class="sm:text-xl">
                {{ contacts.address.address }}
              </div>
            </div>
            <div class="ms-auto">
              <i
                class="fa-solid fa-arrow-right text-xl sm:text-3xl text-primary"
              ></i>
            </div>
          </a>
        </div>
      </div>
      <div
        class="order-1 sm:order-2 col-span-12 sm:col-span-5 flex justify-center sm:justify-end"
      >
        <img
          src="@/assets/images/animation-personal-007.png"
          alt=""
          class="w-[200px] sm:w-auto"
        />
      </div>
    </div>
  </div>
</template>
