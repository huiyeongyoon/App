<template>
  <baseCard class="q-pa-lg">
    <div class="flex q-mb-md">
      <q-btn
        icon="sym_o_arrow_back"
        flat
        round
        dense
        color="grey"
        size="16px"
      ></q-btn>
      <q-space></q-space>
      <q-btn
        icon="sym_o_favorite"
        flat
        round
        dense
        color="red"
        size="16px"
      ></q-btn>
      <q-btn
        icon="sym_o_bookmark"
        flat
        round
        dense
        color="blue"
        size="16px"
      ></q-btn>
    </div>
    <div>
      <div class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-ml-md">
          <div>쫀더기</div>
          <div class="text-grey-6">3일전</div>
        </div>
        <q-space></q-space>
        <q-btn icon="more_horiz" round flat>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-close-popup
                :to="`/posts/${$route.params.id}/edit`"
              >
                <q-item-section>수정</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>삭제</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <div class="q-mt-md text-h5 text-weight-bold">제목</div>
    <div class="row items-center q-gutter-x-md q-mt-md justify-end">
      <postIcon name="sym_o_visibility" :label="1" :tooltip="'조회수'" />
      <postIcon name="sym_o_sms" :label="2" :tooltip="'댓글수'"></postIcon>
      <postIcon name="sym_o_favorite" :label="3" :tooltip="'좋아요'" />
      <postIcon name="sym_o_bookmark" :label="4" :tooltip="'북마크'" postIcon />
    </div>
    <q-separator class="q-my-lg"></q-separator>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti fugit
      laudantium commodi officia quo impedit a nemo, amet animi, consequuntur,
      ea earum ipsam eius sit voluptates sequi nisi eaque pariatur. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Corrupti fugit laudantium
      commodi officia quo impedit a nemo, amet animi, consequuntur, ea earum
      ipsam eius sit voluptates sequi nisi eaque pariatur. Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Corrupti fugit laudantium commodi
      officia quo impedit a nemo, amet animi, consequuntur, ea earum ipsam eius
      sit voluptates sequi nisi eaque pariatur.
    </div>
  </baseCard>
</template>

<script setup>
import baseCard from "src/components/base/baseCard.vue";
import postIcon from "src/components/apps/post/postIcon.vue";
</script>

<style lang="scss" scoped></style>
