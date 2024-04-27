<template>
  <div>
    <div class="text-subtitile1 text-weight-bold q-mb-lg">댓글 5</div>

    <div v-if="isActive">
      <q-input type="textarea" class="bg-white" outlined></q-input>
      <div class="flex justify-end q-gutter-x-sm q-mt-sm">
        <q-btn label="등록" color="primary"></q-btn>
        <q-btn label="취소" color="dark" @click="toggleActive"></q-btn>
      </div>
    </div>

    <baseCard v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="" />
        </q-avatar>
        <div class="text-grey-6 q-ml-sm">댓글을 작성해보세요.</div>
      </q-card-section>
    </baseCard>
    <commentList :items="comments"></commentList>
  </div>
</template>

<script setup>
import baseCard from "src/components/base/basecard.vue";
import commentList from "src/components/apps/comment/commentList.vue";
import { ref } from "vue";
const isActive = ref(false);
const toggleActive = () => (isActive.value = !isActive.value);
const comments = ref([{ id: 1 }, { id: 2 }, { id: 3 }]);
</script>

<style lang="scss" scoped></style>
