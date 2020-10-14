import { ref } from 'vue';

import useApi from './api';

import { keywordsJSON, Keyword } from './keywords.d';

export default async function useKeywords() {
  const bingoMatrix = ref<Keyword[][]>([]);
  const totalRowCount = 5;
  const totalColCount = 5;
  const totalCellCount = totalRowCount * totalColCount;

  const { response: keywords, request } = useApi<keywordsJSON>('../api/keywords.json');

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  const keywordsArray = keywords.value?.keywords;

  const createBingoMatrix = () => {
    if (typeof keywordsArray !== 'undefined') {
      // tips by Carlos && Flavio Copes : https://flaviocopes.com/how-to-shuffle-array-javascript/
      const randomizedKeywords = keywordsArray.sort(() => Math.random() - 0.5);
      const selectedKeywords = randomizedKeywords.splice(0, totalCellCount);

      for (let i = 0; i < totalRowCount; i += 1) {
        const row: string[] = selectedKeywords.splice(0, totalRowCount);
        if (row) {
          const matrixRow: Keyword[] = row.map((item) => {
            const keyword: Keyword = { name: item, isSelected: false, isComplete: false };
            return keyword;
          });

          bingoMatrix.value.push(matrixRow);
        }
      }
    }
  };

  return { bingoMatrix, createBingoMatrix };
}
