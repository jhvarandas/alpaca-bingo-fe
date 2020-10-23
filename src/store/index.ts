import { createStore } from 'vuex';

import useKeywords from '@/composables/keywords';
import useMatrix from '@/composables/matrix';

import { Keyword } from '@/composables/keywords.d';

const store = createStore({
  state: {
    matrix: [] as Keyword[][],
    complete: {
      rows: [] as number[],
      columns: [] as number[],
      diagonals: [] as number[],
    },
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
    SAVE_COMPLETE_ROW(state, payload: number) {
      state.complete.rows.push(payload);
    },
  },
  getters: {
    isCellSelected: (state) => (row: number, col: number) => {
      const { isSelected } = state.matrix[row][col] as Keyword;
      return isSelected;
    },
    matrixState: (state) => state.matrix,
  },
  actions: {
    async setMatrix(context) {
      const { bingoMatrix, createBingoMatrix } = await useKeywords();
      createBingoMatrix();

      context.commit('SET_MATRIX', bingoMatrix);
    },
    onCellClick({ commit, dispatch }, payload) {
      commit('UPDATE_CELL', payload);
      dispatch('checkForCompletion', payload);
    },
    checkForCompletion({ commit, getters }, position) {
      const { isColComplete, isRowComplete, isDiagonalComplete } = useMatrix();
      const payload = { position, state: getters.matrixState };
      const rowIsComplete = isRowComplete(payload);

      if (rowIsComplete) {
        commit('SAVE_COMPLETE_ROW', position.row);
      }
    },
  },
  modules: {
  },
});

export default store;
