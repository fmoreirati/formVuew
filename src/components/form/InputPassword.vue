<template>
  <div>
    <div class="mb-3">
      <label :for="`${props.label}Input`" class="form-label">{{ label }}</label>
      <input
        type="password"
        class="form-control"
        v-model="value"
        :id="`${props.label}Input`"
        :placeholder="props.help"
        :requiere="props.required"
        @blur="validateField(value)"
        @input="validateField(value)"
      />
      <div class="form-text" :class="!isValid ? '' : 'notMessage'">
        <span v-if="!isValid"> {{ props.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isPassword } from '@/core/helpers/validator'
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  help: {
    type: String,
    default: undefined,
  },
  message: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: false,
  },
  validation: {
    type: Boolean,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: undefined,
    required: true,
  },
})

const isValid = ref(true)

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

function validateField(value?: string) {
  if (typeof props.validation !== undefined) {
    isValid.value = props.validation || !props.required
    return
  }
  isValid.value = isPassword(value) || !props.required
}
</script>

<style scoped>
.form-text {
  font-size: 0.8rem;
  padding: 0;
  text-align: right;
  color: red;
}
.form-text.notMessage {
  padding: 0.6rem 0;
}
</style>
