<script setup>
import UButton from '../../components/global/UButton.vue'
import AboutUs from './AboutUs.vue';
import {onMounted} from "vue";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";


</script>

<template>
  <main>
    <div class="background">
      <Header/>
      <img class="gradient-elem-one" src="../../assets/imgs/group-4.png" alt="">
      <img class="gradient-elem-two" src="../../assets/imgs/group-5.png" alt="">

      <div class="container mx-auto flex">
        <div class="flex max-[800px]:flex-wrap">
          <div class="z-[3] w-[66.66%] relative" v-motion :initial="{ opacity: 0, x: -300 }"
               :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }">
            <div class="landing-text">
              <h1 class="title max-[800px]:text-5xl max-[800px]:text-center">COSMOLYRICS</h1>
            </div>
            <div class="landing-desc">
              <h2 class="desc max-[800px]:text-2xl max-[800px]:text-center max-[800px]:mt-[12px]">СЕРВИС ДЛЯ ПОИСКА
                ТЕКСТОВ ВАШИХ ЛЮБИМЫХ ПЕСЕН УЖЕ ЗДЕСЬ</h2>
            </div>
            <div class="mt-[2.2rem] flex justify-between w-[90%]">
              <UButton>
                НАЧАТЬ ПОЛЬЗОВАТЬСЯ
              </UButton>
              <UButton>
                О СЕРВИСЕ
              </UButton>
            </div>
          </div>
          <div class="w=[33.33%] relative z-[3]" v-motion-roll-right>
            <img src="../../assets/imgs/group-8.png" alt="" class="w-f">
          </div>
        </div>
      </div>
    </div>
    <AboutUs/>
    <Footer/>

  </main>
</template>

<style scoped>
.gradient-elem-one {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.gradient-elem-two {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

.landing-text {
  margin-top: 12rem;
  z-index: 2;
  position: relative;
}


.col-4 img {
  position: relative;
  z-index: 3;
}
</style>
