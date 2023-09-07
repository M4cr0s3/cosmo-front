<script setup>
  import {defineProps} from 'vue'

  const props = defineProps({
    error: String
  })
</script>

<template>
  <div class="rounded-xl dark:bg-indigo-900 p-10">
    <h1 class="text-center text-xl text-white font-bold">{{ error }}</h1>
  </div>
</template>

<style scoped>

</style>