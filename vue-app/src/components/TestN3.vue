<script setup>
import TestN4 from "./TestN4.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト3
    <TestN4 :value="props.value" />
  </div>
</template>

