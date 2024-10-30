import { defineStore } from "pinia";
export const useLoginStore = defineStore("user", {
  state: () => {
    return {
      isLogged: false,
      username: "",
      email: "",
    };
  },
  persist: true,
});
