<script setup>

import {reactive} from "vue";
import FormInput from "@/components/formComponents/FormInput.vue";
import FormButton from "@/components/formComponents/FormButton.vue";
import AlreadyLink from "@/components/formComponents/AlreadyLink.vue";
import { useAuthStore } from "@/stores/auth";

const formData = reactive({
  email: '',
  password: ''
})

const authStore = useAuthStore()

const login = () => {
  authStore.email = formData.email
  authStore.password = formData.password
  authStore.auth()
}

</script>

<template>
  <form @submit.prevent="login()" class="space-y-4 md:space-y-6">
    <div class="mb-2">
      <FormInput
          type="email"
          placeholder="Ваш email"
          required="required"
          label="Email"
          v-model:value="formData.email"
      >
      </FormInput>
    </div>
    <div class="mb-2">
      <FormInput
          type="password"
          placeholder="••••••••"
          required="required"
          label="Пароль"
          v-model:value="formData.password"
      />
    </div>
    <FormButton>
      Авторизоваться
    </FormButton>
    <AlreadyLink
      to="/registration"
    >
      <template v-slot:if>
        Если у вас еще нет аккаунта
      </template>
      <template v-slot:do>
        зарегистрируйтесь здесь
      </template>
    </AlreadyLink>
  </form>
</template>

<style scoped>

</style>