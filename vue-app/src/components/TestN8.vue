<script setup>
import TestN9 from "./TestN9.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト8
    <TestN9 :value="props.value"/>
  </div>
</template>

