<script setup>

const {to} = defineProps({
  to: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
     <slot name="if"></slot><RouterLink class="font-bold text-primary-600 hover:underline dark:text-primary-500" :to="to"><slot name="do"/></RouterLink>
  </p>
</template>

<style scoped>

</style>