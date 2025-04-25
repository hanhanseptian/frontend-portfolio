import { defineStore } from "pinia";

export const useStateManagement = defineStore("stateManagement", {
  state: () => ({
    current_nav: "HOME" as string,
  }),
  actions: {
    changeNav(nav: string) {
      this.current_nav = nav;
    },
  },
  getters: {
    getCurrentNav: (state) => state.current_nav,
  },
});
