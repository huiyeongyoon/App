<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-list bordered separator>
        <q-item clickable>
          <q-item-section>Single line item</q-item-section>
        </q-item>
      </q-list>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goPostDetails = (id) => {
  router.push(`/posts/${id}`);
};
</script>

<style lang="scss" scoped></style>
