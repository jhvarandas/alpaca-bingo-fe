import { createStore } from 'vuex';

import useKeywords from '@/composables/keywords';
import { Keyword } from '@/composables/keywords.d';

const store = createStore({
  state: {
    matrix: [],
  },
  mutations: {
    SET_MATRIX(state, payload) {
      state.matrix = payload;
    },
    UPDATE_CELL(state, payload) {
      const { row, col } = payload;
      const cell = state.matrix[row][col] as Keyword;
      cell.isSelected = !cell.isSelected;
    },
  },
  getters: {
    isCellSelected: (state) => (row: number, col: number) => {
      const { isSelected } = state.matrix[row][col] as Keyword;
      return isSelected;
    },
  },
  actions: {
    async setMatrix(context) {
      const { bingoMatrix, createBingoMatrix } = await useKeywords();
      createBingoMatrix();

      context.commit('SET_MATRIX', bingoMatrix);
    },
    onCellClick(context, payload) {
      context.commit('UPDATE_CELL', payload);
      context.dispatch('checkForCompletion', payload);
    },
    checkForCompletion(context, payload) {
      console.log('@check completion', payload, context);
    },
  },
  modules: {
  },
});

export default store;
