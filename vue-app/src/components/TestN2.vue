<script setup>
import TestN3 from "./TestN3.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト2
    <TestN3 :value="props.value" />
  </div>
</template>

