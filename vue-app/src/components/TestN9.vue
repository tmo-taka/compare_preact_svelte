<script setup>
import TestN10 from "./TestN10.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト9
    <TestN10 :value="props.value"/>
  </div>
</template>

