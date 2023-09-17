import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { APIUrl } from "@/APIUrl";

export const useRegisterStore = defineStore('register', () => {
  const email = ref('')
  const name = ref('')
  const photo = ref('')
  const password = ref('')
  const password_confirmation = ref('')
  const username = ref('')
  const error = ref('')
  const loading = ref(false)
  const token = ref('')

  const register = async () => {
    loading.value = true
    try {
      let resp = await axios.post(`${APIUrl}/api/register`, {
        email: email.value,
        name: name.value,
        password: password.value,
        password_confirmation: password_confirmation.value
      });
      token.value = resp.data.token
      localStorage.setItem('access_token', token.value)
      console.log(token.value);
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { email, name, password, password_confirmation, register }
})