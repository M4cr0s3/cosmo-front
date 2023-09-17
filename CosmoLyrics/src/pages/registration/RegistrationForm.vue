<script setup>
import FormInput from '@/components/formComponents/FormInput.vue'
import { computed, defineAsyncComponent, reactive, ref } from 'vue'
import CheckboxForm from '@/components/formComponents/CheckboxForm.vue'
import AlreadyLink from '@/components/formComponents/AlreadyLink.vue'
import FormButton from '@/components/formComponents/FormButton.vue'
import { useModalStore } from '@/stores/modalWindowStore'
import { useIsAcceptedStore } from '@/stores/isAcceptedStore'
import { storeToRefs } from 'pinia'
import useVuelidate from '@vuelidate/core'
import { minLength, email, helpers, maxLength, sameAs } from '@vuelidate/validators'
import axios from "axios";
import {APIUrl} from "@/APIUrl";
import { useRegisterStore } from "@/stores/register";

const modalStore = useModalStore()
const { showModal } = storeToRefs(modalStore)

const isAcceptedStore = useIsAcceptedStore()
const { isAccepted } = storeToRefs(isAcceptedStore)

const TermsComponent = defineAsyncComponent(() =>
  import('../../components/modals/TermsAndConditionsModal.vue')
)

const formData = reactive({
  email: '',
  name: '',
  username: '',
  password: '',
  confirmed_password: ''
})

const rules = computed(() => ({
  email: {
    email: helpers.withMessage('Данное поле должно содержать Ваш адрес электронной почты.', email)
  },
  name: {
    minLength: helpers.withMessage('Минимальная длина имени 3 символа.', minLength(3)),
    maxLength: helpers.withMessage('Максимальная длина имени 20 символов.', maxLength(20))
  },
  username: {
    minLength: helpers.withMessage('Минимальная длина юзернейма 4 символа.', minLength(4)),
    maxLength: helpers.withMessage('Максимальная длина юзернейма 15 символов.', maxLength(15))
  },
  password: {
    minLength: helpers.withMessage('Минимальная длина пароля 8 символов.', minLength(8)),
    maxLength: helpers.withMessage('Максимальная длина пароля 50 символов.', maxLength(15))
  },
  confirmed_password: {
    sameAsPassword: helpers.withMessage('Пароли не совпадают.', sameAs(formData.password))
  }
}))

const v$ = useVuelidate(rules, formData)

const registerStore = useRegisterStore()

const register = () => {
  v$.value.$touch()
  if (v$.value.$error) return
  registerStore.email = formData.email
  registerStore.name = formData.name
  registerStore.password = formData.password
  registerStore.password_confirmation = formData.confirmed_password
  registerStore.register()
}
</script>

<template>
  <form @submit.prevent="register()" class="space-y-4 md:space-y-6">
    <div class="mb-2">
      <FormInput
        type="email"
        placeholder="Ваш email"
        required="required"
        label="Email"
        :error="v$.email.$errors"
        v-model:value="v$.email.$model"
      >
      </FormInput>
    </div>
    <div class="mb-2">
      <FormInput
        type="text"
        placeholder="Ваше имя"
        required="required"
        label="Имя"
        :error="v$.name.$errors"
        v-model:value="v$.name.$model"
      />
    </div>
    <div class="mb-2">
      <FormInput
        type="text"
        placeholder="Например, Macrose"
        required="required"
        label="Имя пользователя"
        :error="v$.username.$errors"
        v-model:value="v$.username.$model"
      />
    </div>
    <div class="mb-2">
      <FormInput
        type="password"
        placeholder="••••••••"
        required="required"
        label="Пароль"
        :error="v$.password.$errors"
        v-model:value="v$.password.$model"
      />
    </div>
    <div class="mb-2">
      <FormInput
        type="password"
        placeholder="••••••••"
        required="required"
        label="Повтор пароля"
        :error="v$.confirmed_password.$errors"
        v-model:value="v$.confirmed_password.$model"
      />
    </div>
    <CheckboxForm> Условия и положения</CheckboxForm>
    <FormButton> Создать аккаунт</FormButton>
    <AlreadyLink to="/login">
      <template v-slot:if> Если у вас уже есть аккаунт</template>
      <template v-slot:do> авторизуйтесь здесь</template>
    </AlreadyLink>
    <TermsComponent v-if="showModal" />
  </form>
</template>

<style scoped></style>