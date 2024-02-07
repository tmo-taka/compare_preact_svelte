<script setup>
import TestN5 from "./TestN5.vue";
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト4
    <TestN5 :value="props.value"/>
  </div>
</template>

