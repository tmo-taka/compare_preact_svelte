<script setup>
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト5
    <div>{{ props.value }}</div>
  </div>
</template>

