<template>
  <div class="form-login">
    {{ person }} {{ confirmPass }}
    <InputValue
      v-model="person.name"
      label="Name"
      message="Campo nome obrigatorio"
      :required="true"
    ></InputValue>
    <InputEmail
      v-model="person.email"
      label="E-mail"
      message="Campo e-mail obrigatorio"
      :required="true"
    ></InputEmail>
    <InputPassword
      v-model="person.pass"
      label="Senha"
      message="Senha invalida. Entre com: letra, numeros e simbolos com min.8 caracteres"
      :required="true"
    ></InputPassword>
    <InputPassword
      v-model="confirmPass"
      label="Confirmação senha"
      message="Senha diferentes "
      :required="true"
      :validation="confirmPass == person.pass"
    >
    </InputPassword>

    <InputForm
      v-model="person.phone"
      type="tel"
      label="Telefone"
      message="Telefone invaldo ou forma do formato"
      :required="true"
    ></InputForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputEmail from '@/components/form/InputEmail.vue'
import InputValue from '@/components/form/InputValue.vue'
import InputPassword from '@/components/form/InputPassword.vue'
import InputForm from '@/components/form/InputForm.vue'

const person = ref({
  name: '',
  email: '',
  pass: '',
  phone: '',
})
const confirmPass = ref('')
</script>

<style scoped>
.form-login {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  min-width: 300px;
  padding: 20px;
  border-radius: 8px;
  border: solid 1px #ddd;
  transform: translate(-50%, -50%);
}
</style>
