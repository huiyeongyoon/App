<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-3">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          {{ authStore }}
          <q-toolbar-title> 커뮤니티 </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https:/google.com"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        ></q-btn>
        <q-btn round flat>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "src/stores/auth";
import AuthDialog from "src/components/auth/authDialog.vue";

const route = useRoute();

const authStore = useAuthStore;

console.log(authStore);
const pageContainerStyles = computed(() => {
  return {
    maxWidth: route.meta?.width || "1080px",
    margin: "0 auto",
  };
});

const authDialog = ref(false);

const openAuthDialog = () => {
  authDialog.value = true;
};
</script>
