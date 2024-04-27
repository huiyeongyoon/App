<template>
  <aside class="stick-side-bar">
    <slot></slot>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.stick-side-bar {
  position: sticky;
  top: 66px;
  z-index: 2;
  height: fit-content !important;
}
</style>
