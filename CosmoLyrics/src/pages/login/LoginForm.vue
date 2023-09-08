<script setup>

import {reactive} from "vue";
import FormInput from "@/components/formComponents/FormInput.vue";
import FormButton from "@/components/formComponents/FormButton.vue";
import AlreadyLink from "@/components/formComponents/AlreadyLink.vue";

const formData = reactive({
  email: '',
  password: ''
})


</script>

<template>
  <form @submit.prevent="" class="space-y-4 md:space-y-6">
    <div class="mb-2">
      <FormInput
          type="email"
          placeholder="Ваш email"
          required="required"
          label="Email"
          v-model="formData.email"
      >
      </FormInput>
    </div>
    <div class="mb-2">
      <FormInput
          type="password"
          placeholder="••••••••"
          required="required"
          label="Пароль"
          v-model="formData.password"
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