<script setup>
import TestN8 from "./TestN8.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト7
    <TestN8 :value="props.value"/>
  </div>
</template>

