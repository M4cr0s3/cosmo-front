import {defineStore} from "pinia";
import {ref} from "vue";

export const useIsAcceptedStore = defineStore('Accept', () => {
    const isAccepted = ref(false)

    const acceptTerms = () => {
        return isAccepted.value = true
    }

    const denyTerms = () => {
        return isAccepted.value = false
    }

    return { isAccepted, acceptTerms, denyTerms }
})