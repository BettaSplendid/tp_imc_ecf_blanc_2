import { defineStore } from "pinia";

export const useImcStore = defineStore({
  id: "imc_store",
  state: () => ({
    imc: 0,
  }),
  persist: true,
  getters: {
    doubleCount: (state) => state.imc,
  },
  actions: {
  },
});
