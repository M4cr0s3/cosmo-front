import { defineStore } from 'pinia'
import axios from 'axios'
import { APIUrl } from '@/APIUrl'
import { ref } from 'vue'

export const useAdmSongsStore = defineStore('songs', () => {
  const songs = ref([])
  const current_page = ref()
  const last_page = ref()
  const links = ref()
  const to = ref()
  const error = ref()
  const loading = ref(false)

  const getSongs = async (page = 1) => {
    if (page === current_page.value) return
    try {
      loading.value = true
      const resp = await axios.get(`${APIUrl}/api/get_songs_to_stats?page=${page}`)
      songs.value = resp.data.data
      current_page.value = resp.data.meta.current_page
      last_page.value = resp.data.meta.last_page
      links.value = resp.data.meta.links
      to.value = resp.data.meta.to
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {songs, current_page, last_page, links, to, error, getSongs}
})
