import MATRIX_CONFIG from '@/config/enums';
import { Keyword } from './keywords.d';

export default function useMatrix() {
  const { totalRowCount, totalColCount } = MATRIX_CONFIG;

  const isRowComplete = (payload: any) => {
    const { position, state } = payload;
    const isRowBingo = state[position.row].every((cell: Keyword) => cell.isSelected);

    return isRowBingo;
  };

  const isColComplete = () => {
    console.log('@isColComplete');
  };

  const isDiagonalComplete = () => {
    console.log('@isDiagonalComplete');
  };

  const hasBingo = (payload: any) => {
    console.log('hasBingo');
  };

  return {
    isRowComplete,
    isColComplete,
    isDiagonalComplete,
  };
}
