<template>
  <postList :items="posts"></postList>
</template>

<script setup>
import postList from "src/components/apps/post/postList.vue";

const posts = Array.from(Array(3), (_, index) => ({
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
