<script setup lang="ts">
import {useCounterStore } from "../src/assets/store/count"
import { useField } from 'vee-validate'

const {value, errorMessage} = useField<string>('name', (value) => {

  if (value.length < 4) {
    return "shortage error"
  }

  if (value.length > 9) {
    return 'over length'
  }

  return true
})

const counterStore = useCounterStore()


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <div>count: {{ counterStore.nowCount }}</div>
    <div>doubleCount: {{ counterStore.doubleCount }}</div>
    <button @click="counterStore.countUp()">count up</button>
  </div>
  <div>
    <input type="password" v-model="value" />
    <div>{{ errorMessage }}</div>
  </div>
  
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
