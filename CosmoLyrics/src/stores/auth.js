import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { APIUrl } from "@/APIUrl";

export const useAuthStore = defineStore('auth', () => {
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const loading = ref(false)
  const token = ref('')
  const expiresIn = ref('')
  

  if (localStorage.getItem('access_token')) {
    token.value = localStorage.getItem('access_token')
  }
  
  const auth = async () => {
    loading.value = true
    try {
      let resp = await axios.post(`${APIUrl}/api/login`, {
        email: email.value,
        password: password.value
      })
      console.log(resp.data);
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  };

  return { email, password, auth }
})