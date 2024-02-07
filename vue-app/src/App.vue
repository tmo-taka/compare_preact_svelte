<script setup lang="ts">
import { ref  } from 'vue';
import TestN1 from './components/TestN1.vue'
import TestD1 from './components/TestD1.vue'
import TestD2 from './components/TestD2.vue'
import TestD3 from './components/TestD3.vue'
import TestD4 from './components/TestD4.vue'
import TestD5 from './components/TestD5.vue'
import TestD6 from './components/TestD6.vue'
import TestD7 from './components/TestD7.vue'
import TestD8 from './components/TestD8.vue'
import TestD9 from './components/TestD9.vue'
import TestD10 from './components/TestD10.vue'

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
    <div>
      <TestD1 />
      <TestD2 />
      <TestD3 />
      <TestD4 />
      <TestD5 />
      <TestD6 />
      <TestD7 />
      <TestD8 />
      <TestD9 />
      <TestD10 />
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
