<script setup lang="ts">
import { ref  } from 'vue';
import TestN1 from './components/TestN1.vue'

let value = ref('');

const updateValue = (event) => {
  value.value = event?.target.value
}
</script>

<template>
  <main>
    <h1>Vite + Vue</h1>
    <input type="text" :value="value" @input="updateValue">
    <div>
      <TestN1 :value="value" />
    </div>
  </main>
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
