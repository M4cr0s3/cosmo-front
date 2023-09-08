<script setup>

import {useModalStore} from "@/stores/modalWindowStore";
import {useIsAcceptedStore} from "@/stores/isAcceptedStore";
import {storeToRefs} from "pinia";

const modalStore = useModalStore()

const {showModal, closeModal} = modalStore

const acceptedStore = useIsAcceptedStore()

const { isAccepted } = storeToRefs(acceptedStore)
const { acceptTerms, denyTerms } = acceptedStore

const handleAccept = () => {
  acceptTerms()
  closeModal()
}

const handleDeny = () => {
  denyTerms()
  closeModal()
}

</script>

<template>

  <!-- Main modal -->
  <div id="defaultModal" tabindex="-1" aria-hidden="true"
       class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
       :class="showModal ? 'flex justify-center items-center' : 'hidden'"
       :role="showModal ? 'dialog': ''"
       :aria-modal="showModal ? 'true': ''"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            <slot name="title"/>
          </h3>
          <button type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  @click="closeModal"
          >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Закрыть окно</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="defaultModal" type="button"
                  @click="handleAccept"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            I accept
          </button>
          <button data-modal-hide="defaultModal" type="button"
                  @click="handleDeny"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Отклонить
          </button>
        </div>
      </div>
    </div>
  </div>
  <div modal-backdrop="" class="bg-indigo-950 bg-opacity-50 dark:bg-opacity-40 fixed inset-0 z-40"></div>

</template>

<style scoped>
.hidden {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}

input[type=checkbox] + label {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
  padding-top: 0.625rem /* 10px */;
  padding-bottom: 0.625rem /* 10px */;
}

input[type=checkbox]:checked + label {
  --tw-bg-opacity: 1;
  background-color: rgb(28 67 235 / var(--tw-bg-opacity));
}
</style>