<script setup>
import TestN6 from "./TestN6.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト5
    <TestN6 :value="props.value"/>
  </div>
</template>

