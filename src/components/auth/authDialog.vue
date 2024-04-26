<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="(val) => $emit('update:modelValue', val)"
    @hide="changeViewMode('loginForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex justify-end">
        <q-btn icon="close" flat round dense v-close-popup></q-btn>
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <loginVue
          v-if="viewMode === 'loginForm'"
          @change-view-mode="changeViewMode"
        ></loginVue>
        <signupFormVue
          v-else-if="viewMode === 'signupForm'"
          @change-view-mode="changeViewMode"
        ></signupFormVue>
        <findPasswordFormVue
          v-else
          @change-view-mode="changeViewMode"
        ></findPasswordFormVue>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import findPasswordFormVue from "./findPasswordForm.vue";
import loginVue from "./login.vue";
import signupFormVue from "./signupForm.vue";
import { ref } from "vue";
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["update:modelValue"]);

const viewMode = ref("loginForm"); // SignInForm, SignUpForm, FindPasswordForm
const changeViewMode = (mode) => (viewMode.value = mode);

// const authViewComponents = {
//   findPasswordFormVue,
//   loginVue,
//   signupFormVue,
// };
</script>

<style lang="scss" scoped></style>
