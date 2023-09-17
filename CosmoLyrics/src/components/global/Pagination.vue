<script setup>
const { links, current_page, last_page } = defineProps({
  links: {
    type: Array,
    required: true
  },
  last_page: {
    type: Number,
    required: true
  },
  current_page: {
    type: Number,
    required: true
  }
})

const emits = defineEmits(['page-change'])

function emitPageChange(page) {
  emits('page-change', page)
}


</script>

<template>
  <div class="" v-if="links">
    <div class="w-full flex gap-1 mt-4 justify-center px-4">
      <li v-for="link in links">
        <template
          v-if="
            (Number(link.label) &&
              current_page - link.label < 2 &&
              current_page - link.label > -2) ||
            Number(link.label) === 1 ||
            Number(link.label) === last_page
          "
        >
          <a
            href="#"
            @click.prevent="emitPageChange(link.label)"
            class="dark:text-indigo-700 rounded-lg dark:bg-indigo-950 h-[45px] w-[45px] flex justify-center items-center hover:cursor-pointer"
            :class="link.active ? 'dark:text-violet-400 dark:bg-indigo-800' : ''"
          >
            {{ link.label }}
          </a>
        </template>
        <template
          v-if="
            (Number(link.label) && current_page !== 3 && current_page - link.label === 2) ||
            (Number(link.label) &&
              current_page !== last_page - 2 &&
              current_page - link.label === -2)
          "
        >
          <div
            class="dark:text-indigo-700 rounded-lg dark:bg-indigo-950 h-[45px] w-[45px] flex justify-center items-center hover:cursor-pointer"
          >
            ...
          </div>
        </template>
      </li>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>