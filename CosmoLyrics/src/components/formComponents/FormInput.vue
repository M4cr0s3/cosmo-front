<script setup>
import { ref, watch } from 'vue'

const { placeholder, type, label, required, error } = defineProps({
  placeholder: String,
  type: {
    type: String,
    validator(value) {
      return ['text', 'password', 'email', 'tel', 'search'].includes(value)
    }
  },
  required: String,
  label: String,
  value: String,
  error: {
    type: Array,
    required: false
  }
})

const emits = defineEmits(['update:value'])

const updateValue = (e) => {
  emits('update:value', e.target.value)
}
</script>

<template>
  <div>
    <label class="block mb-2 text-sm text-gray-900 dark:text-white font-bold">{{ label }}</label>
    <input
      :type="type"
      class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-indigo-900 border-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 font-medium"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      @input="updateValue"
    />
  </div>
  <TransitionGroup name="errors">
    <div
      class="form-error dark:bg-indigo-500 py-2 px-4 rounded-xl mt-3 font-semibold text-sm text-violet-100 shadow"
      v-for="element of error"
      :key="element.$uid"
    >
      <div class="form-error-message">
        {{ element.$message }}
      </div>
    </div>
  </TransitionGroup>
</template>

<style scoped>
.errors-enter-active,
.errors-leave-active {
  transition: all 0.25s ease;
}

.errors-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.errors-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>