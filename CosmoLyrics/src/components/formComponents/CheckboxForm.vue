<script setup>

import {ref, watch} from "vue";
import {useModalStore} from "@/stores/modalWindowStore";
import {useIsAcceptedStore} from "@/stores/isAcceptedStore";
import {storeToRefs} from "pinia";

// const emits = defineEmits([
//     'update:modelValue'
// ])

// const { modelValue, required } = defineProps({
//   modelValue: {
//     type: Boolean,
//     default: false
//   },
//   required: String,
// })


const acceptedStore = useIsAcceptedStore()

const { isAccepted } = storeToRefs(acceptedStore)
const { acceptTerms } = acceptedStore

// const value = ref(modelValue)

const { openModal } = useModalStore()


// watch(value, () => {
//   emits('update:modelValue', value)
// })

</script>

<template>
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input id="terms" aria-describedby="terms" type="checkbox" v-model="isAccepted" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
    </div>
    <div class="ml-3 text-sm">
<!--      <label for="terms" class="font-light text-gray-500 dark:text-gray-300">-->
<!--        I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>-->
<!--      </label>-->
      <label for="terms" class="font-light text-gray-500 dark:text-gray-300">
        Я принимаю <a @click.prevent="openModal()" class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#"><slot/></a>
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>