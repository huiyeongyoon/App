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
import baseCard from "src/components/base/baseCard.vue";
import stickySideBarVue from "./stickySideBar.vue";
import { getCategories } from "src/services/category";
const categories = getCategories();
</script>
