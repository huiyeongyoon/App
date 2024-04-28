<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <postLeftBar class="col-grow"></postLeftBar>
      <section class="col-7">
        <postHeader></postHeader>
        <postList :items="posts"></postList>
      </section>
      <postRightBar
        class="col-3"
        @openWriteDialog="openWriteDialog"
      ></postRightBar>
    </div>
    <postWriteDialog v-model="postDialog"></postWriteDialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import postList from "src/components/apps/post/postList.vue";
import postHeader from "src/pages/components/postHeader.vue";
import postLeftBar from "src/pages/components/postLeftBar.vue";
import postRightBar from "src/pages/components/postRightBar.vue";
import { useRouter } from "vue-router";
import postWriteDialog from "src/components/apps/post/postWriteDialog.vue";

const router = useRouter();

// const goPostDetails = (id) => {
//   router.push(`/posts/${id}`);
// };

const postDialog = ref(false);

const openWriteDialog = () => {
  postDialog.value = true;
};

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
  title: "하이 타이틀" + index,
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores culpa reprehenderit unde modi officiis corrupti eius, ea, pariatur inventore voluptate amet voluptatum. Assumenda corrupti laudantium est, quibusdam quo velit?",
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  category: "카테고리",
  tags: ["javascript", "html", "css", "vue"],
  userId: "쫀더기",
}));
</script>

<style lang="scss" scoped></style>
