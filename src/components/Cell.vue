<template>
  <button class="cell" @click="onUserClick" :class="{ 'cell--selected': isCellSelected }">
    <div class="cell__content">{{content}}</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import store from '@/store';

export default defineComponent({
  props: {
    content: String,
    row: Number,
    col: Number,
  },
  computed: {
    isCellSelected(): boolean {
      return store.getters.isCellSelected(this.row, this.col);
    },
  },
  methods: {
    onUserClick(evt: MouseEvent): void {
      console.log('evt', evt);
      store.dispatch('onCellClick', { row: this.row, col: this.col });
    },
  },
});
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  color: white;
  border: 1px solid gold;
  background-color: transparent;
  outline: none;

  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(gold, 0.1);
  }

  &.cell--selected {
    background-color: rgba(gold, 0.7);
  }
}
</style>
