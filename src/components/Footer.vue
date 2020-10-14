<template>
  <footer class="footer col-span-4">
    <h5>Rules:</h5>
    <ul>
      <li>Keep this open in a tab in the background.</li>
      <li>Click the appropriate field when it happens on stream.</li>
      <li>Shout BINGO into chat when you have your bingo card filled.</li>
    </ul>
  </footer>
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
h5 {
  font-weight: bold;
}
ul {
  padding: 0;
  margin: 0;
  color: #ccc;
}
.footer {
  margin-top: 20px;
}
</style>
