<template>
  <q-item class="bg-white q-pt-md" vclickable :to="`/posts/${id}`">
    <q-item-section avatar top>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex items-center">
        <span> 닉네임 &middot; 3일 전 </span>
        <q-chip class="q-ml-sm" square color="primary" text-color="white">
          {{ category }}
        </q-chip>
      </div>
      <div class="text-h6 q-mt-sm">{{ title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in tags" :key="tag">#{{ tag }}&nbsp; </span>
      </div>
      <div class="text-grey-6 q-my-sm ellipsis-2-lines">
        {{ content }}
      </div>
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <postIcon
              name="sym_o_visibility"
              :label="readCount"
              :tooltip="'조회수'"
            ></postIcon>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <postIcon
              name="sym_o_sms"
              :label="commentCount"
              :tooltip="'댓글수'"
            ></postIcon>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" flat dense @click.prevent>
              <postIcon
                name="sym_o_favorite"
                :label="readCount"
                :tooltip="'좋아요'"
              ></postIcon>
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" flat dense @click.prevent>
              <postIcon
                name="sym_o_bookmark"
                :label="readCount"
                :tooltip="'북마크'"
              ></postIcon>
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import postIcon from "./postIcon.vue";
defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  readCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  bookmarkCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  createTime: {
    type: Date,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  userId: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
