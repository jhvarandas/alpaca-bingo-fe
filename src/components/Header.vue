<template>
  <header class="col-span-1 row-span-2">
    <a href="http://www.twitch.tv/miniaturesden" target="_blank">
      <img alt="AlpacaBingo logo" src="../assets/logo.png">
    </a>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
a {
  display: block;
  padding: 10px;
}
img {
  display: block;
  margin: 0 auto;
}
</style>
