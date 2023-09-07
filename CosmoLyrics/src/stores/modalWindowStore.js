import {defineStore} from "pinia";
import {ref} from "vue";

export const useModalStore = defineStore('modal', () => {
    const showModal = ref(false)
    const openModal = () => {
        return showModal.value = true
    }
    const closeModal = () => {
        return showModal.value = false
    }


    return { showModal, openModal, closeModal }
});