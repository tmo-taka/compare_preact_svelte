<script setup>
const props = defineProps({
  value: String
})
</script>

<template>
  <div>
    テスト10
    <div>{{ props.value }}</div>
  </div>
</template>

