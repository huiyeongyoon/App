<template>
  <q-list bordered separator>
    <postItem v-for="item in items" :key="item.id" v-bind="item"></postItem>
  </q-list>
</template>

<script setup>
import postItem from "src/components/apps/post/postItem.vue";
defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped></style>
