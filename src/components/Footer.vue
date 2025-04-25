<script setup lang="ts">
import { social_media } from "@/modules/data";

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};
</script>

<template>
  <div id="footer" class="py-10 text-xl px-10">
    <div class="flex gap-3 justify-between">
      <div>
        Copyright © {{ getCurrentYear() }}
        <span class="text-primary">Hanhan Septian</span> All rights reserved.
      </div>
      <div class="flex gap-5">
        <a
          v-for="item in social_media"
          :href="item.link"
          target="_blank"
          class="hover:scale-110"
        >
          <i :class="item.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>
