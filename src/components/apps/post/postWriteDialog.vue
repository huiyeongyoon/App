<template>
  <q-dialog v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close"></q-btn>
      </q-toolbar>
      <q-separator></q-separator>
      <postForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
      >
      </postForm>
    </q-card>
  </q-dialog>
</template>
<script>
const getInitialForm = () => ({
  title: "",
  category: "",
  content: "",
  tags: [],
});
</script>
<script setup>
import { ref } from "vue";
import postForm from "./postForm.vue";
const form = ref(getInitialForm());

const onHide = () => {
  form.value = getInitialForm();
};
</script>
