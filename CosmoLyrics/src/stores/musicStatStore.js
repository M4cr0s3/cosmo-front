import axios from 'axios'
import {defineStore} from "pinia";
import {APIUrl} from "@/APIUrl";

export const useMusicStatStore = defineStore('music', {
    state: () => ({
        singer_count: null,
        song_count: null,
        total_watches: null,
        genre_listen_counts: [],
        top_song: null,
        loading: false,
    }),
    actions: {
        async getStats() {
            try {
                this.loading = true
                let response = await axios.get(`${APIUrl}/api/get_music_stats`)
                console.log(response.data.data);
                this.singer_count = response?.data?.data.singer_count
                this.song_count = response?.data?.data.song_count
                this.total_watches = response?.data?.data.total_watches
                this.genre_listen_counts = response?.data?.data.genre_listen_counts
                this.top_song = response?.data?.data.top_song
            } catch(e) {
                console.log('Something went wrong while fetching data', e.message)
            } finally {
                this.loading = false
            }
        }
    },
})
