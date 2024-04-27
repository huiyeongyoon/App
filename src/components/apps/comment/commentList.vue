<template>
  <q-list class="q-mt-lg bg-white" bordered separator>
    <commentItem
      v-for="item of items"
      :key="item.id"
      v-bind="item"
    ></commentItem>
  </q-list>
</template>

<script setup>
import commentItem from "./commentItem.vue";
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
