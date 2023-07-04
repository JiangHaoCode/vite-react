import { defineStore } from "react-pinia";

const useStore = defineStore({
  state: () => {
    return {
      count: 1,
      user: "hello",
    };
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  actions: {
    add() {
      this.count += 1;
    },

    reset() {
      this.count = 1;
      this.user = "hello";
    }
  },
  // 是否持久化数据
  persist: {
    key: "user",
    storage: "localStorage", // 'localStorage' | 'sessionStorage' 默认使用localStorage
  },
  // deet: true,
});

export { useStore };
