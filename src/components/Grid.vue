<template>
  <main class="col-span-4">
    <div class="grid grid-rows-5 grid-cols-5 gap-4">
      <div
        class="col-span-5 grid grid-cols-5 gap-4"
        v-for="(row, rowIndex) in matrix"
        :key='`row-${rowIndex}`'>
        <Cell
          class="col-span-1 row-span-1"
          v-for="(item, colIndex) in row"
          :key='`cell-${colIndex}`'
          :content='item.name'
          :row='rowIndex'
          :col='colIndex'
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

import store from '@/store';
import Cell from '@/components/Cell.vue';

export default defineComponent({
  setup() {
    store.dispatch('setMatrix');
  },
  components: {
    Cell,
  },
  computed: mapState([
    'matrix',
  ]),
});
</script>

<style scoped>

</style>
