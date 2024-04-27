<template>
  <stickySideBarVue>
    <baseCard>
      <q-list bordered separator>
        <q-item clickable v-ripple :active="true">
          <q-item-section>전체</q-item-section>
        </q-item>
        <q-item
          v-for="category of categories"
          :key="category.value"
          clickable
          v-ripple
        >
          <q-item-section>{{ category.label }}</q-item-section>
        </q-item>
      </q-list>
    </baseCard>
  </stickySideBarVue>
</template>

<script setup>
import stickySideBarVue from "./stickySideBar.vue";
import baseCard from "src/components/base/basecard.vue";
const categories = [
  {
    label: "Q&A",
    value: "qna",
  },
  {
    label: "커뮤니티",
    value: "community",
  },
  {
    label: "공지사항",
    value: "notice",
  },
];
</script>

<style lang="scss" scoped></style>
