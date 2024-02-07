<script setup>
import TestN7 from "./TestN7.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト6
    <TestN7 :value="props.value"/>
  </div>
</template>

