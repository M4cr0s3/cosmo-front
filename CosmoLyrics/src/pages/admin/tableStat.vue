<script setup>
import TableItem from '@/pages/admin/tableItem.vue'
import { useAdmSongsStore } from '@/stores/admSongsStore'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import Pagination from '@/components/global/Pagination.vue'
import Loading from '@/components/global/Loading.vue'

const store = useAdmSongsStore()

const { songs, current_page, last_page, links, to, loading } = storeToRefs(store)

onMounted(async () => {
  await store.getSongs()
})
</script>

<template>
  <Loading v-if="loading" height="32" width="32"> </Loading>
  <div class="" v-else>
    <div class="mt-[20px] px-4">
      <div class="flex justify-between items-center">
        <h1 class="text-5xl text-gray-50 font-bold mb-5">
          <slot name="title"></slot>
        </h1>
      </div>
      <div class="">
        <div class="chart-table">
          <a class="flex items-center text-indigo-700" v-for="song in songs" :key="song.id">
            <TableItem
              :id="song.id"
              :name="song.name"
              :photo="song.photo"
              :watches="song.watches"
              :singers="song.singers"
            >
            </TableItem>
          </a>
        </div>
      </div>
    </div>
    <Pagination
      :current_page="current_page"
      :last_page="last_page"
      :links="links"
      @page-change="store.getSongs"
    >
    </Pagination>
  </div>
</template>

<style scoped></style>