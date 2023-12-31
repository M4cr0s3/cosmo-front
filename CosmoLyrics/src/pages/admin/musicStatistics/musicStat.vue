<script setup>
import { useMusicStatStore } from '../../../stores/musicStatStore'
import AdminLayout from '../../../components/Layouts/adminLayout.vue'
import { onMounted, defineProps, computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import PieStat from '../pieStat.vue'
import CardStat from '@/pages/admin/cardStat.vue'
import TableStat from '@/pages/admin/tableStat.vue'
import Loading from '@/components/global/Loading.vue'

const store = useMusicStatStore()

const { singer_count, song_count, total_watches, genre_listen_counts,
  top_song, loading } = storeToRefs(store)

onMounted(() => {
  store.getStats()
})
</script>

<template>
  <AdminLayout>
    <div class="p-4 sm:ml-64 dark:bg-gray-900 min-h-[100vh]">
      <div class="mt-14 p-4">
        <Loading v-if="loading" height="64" width="64">
        </Loading>
        <div class="grid grid-cols-2 gap-4" v-else>
          <div class="flex h-45 rounded bg-gray-50 dark:bg-gray-800 relative gradient-music">
            <div class="py-6 px-6 dark:text-white flex flex-col">
              <div class="flex items-center">
                <Icon
                  icon="noto-v1:woman-singer-light-skin-tone"
                  height="1.8rem"
                  width="1.8rem"
                  class="mr-2"
                ></Icon>
                <p class="font-semibold">
                  <span class="text-3xl font-bold mr-1">{{ singer_count }}</span>
                  исполнителей
                </p>
              </div>
              <div class="flex items-center mt-2">
                <Icon
                  icon="noto-v1:sign-of-the-horns-medium-light-skin-tone"
                  height="1.8rem"
                  width="1.8rem"
                  class="mr-2"
                ></Icon>
                <p class="font-semibold">
                  <span class="text-3xl font-bold mr-1">{{ song_count }}</span>
                  песен
                </p>
              </div>
              <div class="flex items-center mt-2">
                <Icon
                  icon="noto-v1:woman-bowing-light-skin-tone"
                  height="1.8rem"
                  width="1.8rem"
                  class="mr-2"
                ></Icon>
                <p class="font-semibold">
                  <span class="text-3xl font-bold mr-1">{{ total_watches }}</span>
                  прослушивания
                </p>
              </div>
              <div class="flex items-center mt-[10px]">
                <Icon
                  icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                  height="1rem"
                  width="1.8rem"
                  class="mr-2"
                ></Icon>
                <span class="text-xs font-semibold dark:text-gray-200">
                  Масштабы уже удивляют... Верно?
                </span>
              </div>
            </div>
            <div class="absolute right-5 top-[5%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="160"
                viewBox="0 0 65 70"
                fill="none"
              >
                <g clip-path="url(#clip0_14_95)">
                  <path
                    d="M14.054 43.9647C15.0533 37.7681 16.0525 31.5716 17.0517 25.375C17.8795 26.1423 18.711 26.9132 19.5388 27.6804C18.7183 32.2804 17.9014 36.884 17.0809 41.4839C18.4083 41.4364 19.7321 41.3852 21.0595 41.3377C21.1543 42.116 21.2528 42.8942 21.3476 43.6724C18.9188 43.7711 16.4864 43.8661 14.054 43.9647Z"
                    fill="white"
                  />
                  <path
                    d="M23.6341 43.6578V38.7327L24.1738 40.2234L19.5643 33.3546H22.6713L25.2824 37.4905H24.7573L27.3684 33.3546H30.3733L25.793 40.2234L26.3327 38.7327V43.6578H23.6341Z"
                    fill="white"
                  />
                  <path
                    d="M31.4929 43.6578V33.3546H36.3504C37.5356 33.3546 38.4546 33.6359 39.1 34.2022C39.7455 34.7685 40.0701 35.5504 40.0701 36.5551C40.0701 37.2274 39.9242 37.801 39.6325 38.2723C39.3407 38.7437 38.9177 39.109 38.3634 39.3684C37.8091 39.6278 37.149 39.7557 36.3796 39.7557L36.5108 39.3904H37.2402C37.6669 39.3904 38.0461 39.5073 38.378 39.7411C38.7098 39.9749 38.9797 40.3001 39.1949 40.7203L40.7557 43.6578H37.8091L36.1316 40.3695C36.0258 40.154 35.8654 40.0078 35.6575 39.9311C35.4496 39.8544 35.2126 39.8142 34.95 39.8142H34.1915V43.6578H31.4929ZM34.1915 37.8997H35.8836C36.4087 37.8997 36.8062 37.7937 37.0797 37.5855C37.3532 37.3772 37.4882 37.063 37.4882 36.6428C37.4882 36.2336 37.3532 35.9267 37.0797 35.7221C36.8062 35.5175 36.4087 35.4152 35.8836 35.4152H34.1915V37.8997Z"
                    fill="white"
                  />
                  <path d="M41.7513 43.6578V33.3546H44.4499V43.6578H41.7513Z" fill="white" />
                  <path
                    d="M51.0104 43.8186C49.8909 43.8186 48.9281 43.5993 48.1149 43.1609C47.3016 42.7225 46.6744 42.105 46.2331 41.3049C45.7919 40.5047 45.5694 39.5694 45.5694 38.4989C45.5694 37.4284 45.7919 36.493 46.2331 35.7002C46.6744 34.9073 47.3016 34.2899 48.1149 33.8514C48.9281 33.413 49.8909 33.1938 51.0104 33.1938C51.7215 33.1938 52.367 33.2888 52.9505 33.4788C53.534 33.6688 54.0263 33.9391 54.4238 34.2899L53.6215 36.409C53.1729 36.0875 52.7645 35.8609 52.3889 35.7294C52.0133 35.5979 51.5902 35.5321 51.1125 35.5321C50.2373 35.5321 49.5626 35.7879 49.0922 36.2994C48.6218 36.8109 48.3847 37.5453 48.3847 38.4989C48.3847 39.4634 48.6218 40.2015 49.0922 40.713C49.5626 41.2245 50.2373 41.4802 51.1125 41.4802C51.5902 41.4802 52.0133 41.4145 52.3889 41.2829C52.7645 41.1514 53.1729 40.9249 53.6215 40.6034L54.4238 42.7225C54.0263 43.0732 53.534 43.3436 52.9505 43.5336C52.367 43.7236 51.7215 43.8186 51.0104 43.8186Z"
                    fill="white"
                  />
                  <path
                    d="M60.1565 43.8186C59.3287 43.8186 58.5446 43.7199 57.8007 43.519C57.0567 43.318 56.4331 43.0476 55.9262 42.7079L56.6848 40.618C57.0057 40.8226 57.3558 40.998 57.735 41.1441C58.1143 41.2902 58.5118 41.4035 58.9239 41.4875C59.336 41.5716 59.759 41.6118 60.1857 41.6118C60.8275 41.6118 61.2724 41.5277 61.5204 41.3633C61.7684 41.1989 61.8924 40.9833 61.8924 40.7203C61.8924 40.4864 61.8085 40.3038 61.6444 40.1722C61.4803 40.0407 61.1666 39.9274 60.7108 39.8288L58.9312 39.4634C57.9867 39.2698 57.2828 38.93 56.8161 38.4477C56.3493 37.9654 56.1159 37.3334 56.1159 36.5551C56.1159 35.8719 56.2982 35.28 56.6629 34.7795C57.0276 34.2789 57.5418 33.888 58.2018 33.6103C58.8619 33.3326 59.635 33.1938 60.5212 33.1938C61.2505 33.1938 61.9361 33.2924 62.5779 33.4934C63.2198 33.6943 63.7449 33.9684 64.1533 34.3191L63.3948 36.2775C63.0046 35.9961 62.567 35.7769 62.082 35.6271C61.597 35.4773 61.0572 35.4006 60.4628 35.4006C59.8976 35.4006 59.4745 35.4846 59.1865 35.6563C58.8984 35.8281 58.7561 36.0692 58.7561 36.3798C58.7561 36.5953 58.84 36.778 59.0114 36.9278C59.1828 37.0776 59.4964 37.2018 59.9523 37.3005L61.7027 37.6512C62.6472 37.8376 63.3547 38.1664 63.8251 38.645C64.2956 39.1236 64.5326 39.7448 64.5326 40.5157C64.5326 41.177 64.3503 41.7579 63.9856 42.2548C63.6209 42.7517 63.114 43.1353 62.4612 43.4094C61.8085 43.6834 61.039 43.8186 60.1565 43.8186Z"
                    fill="white"
                  />
                  <path
                    d="M40.0411 70.4201C25.5191 68.6346 13.5742 58.0347 10.1351 43.9187C6.37825 28.507 13.9459 13.7474 24.5524 6.53627C29.8074 2.96368 35.0995 1.72438 38.4905 1.23832C35.2663 0.835657 29.7986 0.595904 23.6206 2.65827C9.2111 7.47335 3.45958 20.6305 2.72091 22.3955C-1.99883 33.6854 -1.00925 48.2198 7.92435 58.7887C17.6693 70.3208 31.6501 70.9585 34.0147 71.0283L40.0411 70.4201Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_95">
                    <rect width="65" height="70" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <CardStat
            gradient="gradient-music-reversed"
            class="h-45 hover:cursor-default"
            icon="noto-v1:shooting-star"
            height="130"
            top="30px"
            right="50px"
            width="130"
          >
            <template v-slot:title>
              <p class="text-3xl">Самый популярный трек</p>
            </template>
            <template v-slot:subtitle>
              <div class="mt-2" v-if="top_song">
                <div class="chart-table">
                  <a class="flex items-center text-indigo-700">
                    <div
                      class="flex w-full justify-between dark:bg-indigo-950 items-center rounded-lg shadow-md px-5 py-3 border-b dark:border-indigo-900 dark:hover:bg-indigo-800 transition duration-250 ease-in-out"
                    >
                      <div class="flex items-center w-[50%] justify-around">
                        <div class="place text-[1.1rem]">1</div>
                        <div class="track-info flex">
                          <img :src="top_song.photo" alt="" class="rounded-md h-[60px] w-[60px]" />
                          <div class="trackname flex items-center">
                            <h2 class="track__name ml-4 text-indigo-700">{{ top_song.name }}</h2>
                          </div>
                        </div>
                      </div>
                      <div class="author" v-for="singer in top_song.singers" :key="singer.id">
                        {{ singer.name }}
                      </div>
                      <div class="listens flex items-center">
                        <Icon icon="mdi:eye" class="mr-[0.3rem]" />
                        {{
                          top_song.watches > 1000
                            ? Math.round((top_song.watches / 1000) * 100) / 100 + 'K'
                            : top_song.watches
                        }}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </template>
          </CardStat>
          <PieStat :data="genre_listen_counts" v-if="genre_listen_counts.length === 5"></PieStat>
          <CardStat
            class="dark:bg-indigo-950"
            icon="twemoji:thinking-face"
            height="11rem"
            width="11rem"
            right="50px"
            top="100px"
          >
            <template v-slot:title>
              <p class="text-3xl">
                Самый залайканный<br />
                комментарий среди треков
              </p>
            </template>
            <template v-slot:subtitle> Soon...</template>
          </CardStat>
        </div>
      </div>
      <TableStat>
        <template v-slot:title> Все песни</template>
      </TableStat>
    </div>
  </AdminLayout>
</template>

<style scoped>
.gradient-music {
  background: linear-gradient(134deg, #3c2de8 0%, #3cdafd 100%);
  box-shadow: 0 4px 20px 0 rgba(76, 61, 255, 0.5);
}

.gradient-music-reversed {
  background: linear-gradient(-20deg, #3c2de8 0%, #3cdafd 100%);
  box-shadow: 0 4px 20px 0 rgba(76, 61, 255, 0.5);
}
</style>