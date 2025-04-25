<script setup lang="ts">
import { ref, watch } from "vue";
import RGBButton from "./utils/RGBButton.vue";
import { contacts } from "@/modules/data";
import { isMobileScreen } from "@/modules";
import Drawer from "./utils/Drawer.vue";
import { useStateManagement } from "@/stores";

// VARIABLES
const store = useStateManagement();
const navigations = ref([
  { name: "HOME", path: "#home" },
  { name: "ABOUT", path: "#about" },
  { name: "EXPERIENCES", path: "#experiences" },
  { name: "SKILLS", path: "#skills" },
  { name: "CONTACT", path: "#contact" },
]);
const current_nav = ref(store.getCurrentNav);

// LIFECYCLE HOOKS
watch(
  () => store.getCurrentNav,
  () => {
    current_nav.value = store.getCurrentNav;
  }
);
</script>
<template>
  <div class="navbar p-5 mx-5 sm:mx-10">
    <a
      href="#home"
      class="text-lg sm:text-4xl font-semibold"
      @click="(current_nav = 'HOME'), store.changeNav('HOME')"
    >
      <div class="fa-solid fa-fire text-primary"></div>
      Hanhan Septian
    </a>
    <div class="hidden sm:flex gap-5 flex-wrap justify-center">
      <div v-for="nav in navigations">
        <a
          :key="nav.name"
          :href="nav.path"
          class="nav-link md:text-xl"
          :class="{ 'nav-active': current_nav === nav.name }"
          @click="(current_nav = nav.name), store.changeNav(nav.name)"
        >
          {{ nav.name }}
        </a>
      </div>
    </div>
    <div class="action hidden sm:block">
      <a
        :href="
          'https://api.whatsapp.com/send?phone=62' + contacts.whatsapp.number
        "
        target="_blank"
      >
        <RGBButton text="Let's Talk" class="hover:scale-105">
          <template #append>
            <i class="fa-solid fa-arrow-right"></i>
          </template>
        </RGBButton>
      </a>
    </div>
    <div v-if="isMobileScreen()">
      <Drawer>
        <template #trigger>
          <button>
            <i class="fa-solid fa-bars"></i>
          </button>
        </template>
        <template #content>
          <div>
            <a
              href="#home"
              class="text-lg sm:text-4xl font-semibold"
              @click="(current_nav = 'HOME'), store.changeNav('HOME')"
            >
              <div class="fa-solid fa-fire text-primary"></div>
              Hanhan Septian
            </a>
            <div class="mt-5">
              <div v-for="nav in navigations">
                <a
                  :key="nav.name"
                  :href="nav.path"
                  class="nav-link md:text-xl"
                  :class="{ 'nav-active': current_nav === nav.name }"
                  @click="(current_nav = nav.name), store.changeNav(nav.name)"
                >
                  {{ nav.name }}
                </a>
              </div>
            </div>
            <div class="mt-5">
              <a
                :href="
                  'https://api.whatsapp.com/send?phone=62' +
                  contacts.whatsapp.number
                "
                target="_blank"
              >
                <RGBButton class="hover:scale-105">
                  <template #append>
                    <i class="fa-solid fa-arrow-right"></i>
                  </template>
                  <template #text>
                    <div class="text-xs">Let's Talk</div>
                  </template>
                </RGBButton>
              </a>
            </div>
          </div>
        </template>
      </Drawer>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  position: sticky;
  top: 20px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(15px);
  color: white;
  border: 0.1px solid rgb(109, 108, 108);
  border-radius: 30px;
  z-index: 999;
}
.navbar .nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.navbar .nav-link {
  text-decoration: none;
  color: white;
}
.navbar .nav-active {
  color: rgb(201, 243, 29);
}
.navbar .nav-link:hover {
  color: rgb(201, 243, 29);
  text-shadow: 0 0 10px rgb(201, 243, 29), 0 0 20px rgb(201, 243, 29);
  transition: 0.3s;
}
</style>
