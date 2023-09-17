<template>
    <div class="w-full flex justify-center mt-[30px]">
        <Icon icon="eos-icons:bubble-loading" color="#a78bfa" :width="width" :height="height"></Icon>
    </div>
</template>

<script setup>
    import {Icon} from '@iconify/vue'

    const {height, width} = defineProps({
      height: {
        type: Number,
        required: false
      },
      width: {
        type: Number,
        required: false
      }
    })
</script>

<style scoped>

</style>
