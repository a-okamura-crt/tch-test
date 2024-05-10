import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    nowCount(state):number {
      return state.count;
    },
    doubleCount(): number {
        return this.nowCount * 2
    },
  },
  actions: {
    countUp() {
        this.count++
    }
  }
});
