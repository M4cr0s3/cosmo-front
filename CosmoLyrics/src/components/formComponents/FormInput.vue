<script setup>
import {ref, watch} from "vue";

const {placeholder, type, label, required, modelValue} = defineProps({
  placeholder: String,
  type: {
    type: String,
    validator(value) {
      return ['text', 'password', 'email', 'tel', 'search'].includes(value)
    }
  },
  required: String,
  label: String,
  modelValue: String
})

const value = ref(modelValue)

const emits = defineEmits(
  ['update:modelValue']
)

watch(value, () => {
  emits('update:modelValue', value)
})



</script>

<template>
  <div>
    <label class="block mb-2 text-sm text-gray-900 dark:text-white font-bold">{{ label }}</label>
    <input :type="type"
           class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
           block w-full p-2.5 dark:bg-indigo-900 border-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            dark:focus:border-blue-500 outline-0 font-medium"
           :placeholder="placeholder" :required="required" v-model="value">
  </div>
</template>

<style scoped>

</style>