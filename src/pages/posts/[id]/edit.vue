<template>
  <q-page padding>
    <baseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>
      <q-separator></q-separator>
      <postForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup></q-btn>
          <q-btn type="submit" flat label="수정" color="primary"></q-btn>
        </template>
      </postForm>
    </baseCard>
  </q-page>
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
import baseCard from "src/components/base/baseCard.vue";
import postForm from "src/components/apps/post/postForm.vue";

const form = ref(getInitialForm());
</script>

<route lang="yaml">
meta:
  width: 800px
</route>
