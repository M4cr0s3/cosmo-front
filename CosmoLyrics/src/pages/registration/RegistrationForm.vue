<script setup>
import FormInput from "@/components/formComponents/FormInput.vue";
import {defineAsyncComponent, reactive, ref} from "vue";
import CheckboxForm from "@/components/formComponents/CheckboxForm.vue";
import AlreadyLink from "@/components/formComponents/AlreadyLink.vue";
import FormButton from "@/components/formComponents/FormButton.vue";

const isAccepted = ref(false)
import {useModalStore} from "@/stores/modalWindowStore";


const modalStore = useModalStore()
const { showModal } = modalStore

const TermsComponent = defineAsyncComponent(() => import('../../components/modals/TermsAndConditionsModal.vue'))

const { email, name, username, password, confirmed_password } = reactive({
  email: '',
  name: '',
  username: '',
  password: '',
  confirmed_password: '',
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
          v-model="email"
      >
      </FormInput>
    </div>
    <div class="mb-2">
      <FormInput
          type="text"
          placeholder="Ваше имя"
          required="required"
          label="Имя"
          v-model="name"
      />
    </div>
    <div class="mb-2">
      <FormInput
          type="text"
          placeholder="Например, Macrose"
          required="required"
          label="Имя пользователя"
          v-model="username"
      />
    </div>
    <div class="mb-2">
      <FormInput
          type="password"
          placeholder="••••••••"
          required="required"
          label="Пароль"
          v-model="password"
      />
    </div>
    <div class="mb-2">
      <FormInput
          type="password"
          placeholder="••••••••"
          required="required"
          label="Повтор пароля"
          v-model="confirmed_password"
      />
    </div>
    <CheckboxForm>
      Условия и положения
    </CheckboxForm>
    <FormButton>
      Создать аккаунт
    </FormButton>
    <AlreadyLink>
      Авторизуйтесь здесь
    </AlreadyLink>
    <TermsComponent
        v-if="showModal"
    />
  </form>


</template>

<style scoped>

</style>