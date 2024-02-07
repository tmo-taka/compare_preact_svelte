<script setup>
import TestN2 from "./TestN2.vue";

const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト1
    <TestN2 :value="props.value" />
  </div>
</template>

