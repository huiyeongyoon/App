<template>
  <q-page padding>
    <postDetail></postDetail>
    <q-separator class="q-my-xl"></q-separator>
    <postComments></postComments>
  </q-page>
</template>

<script setup>
import postDetail from "./components/postDetails.vue";
import postComments from "./components/postComments.vue";
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  width: 800px
</route>
