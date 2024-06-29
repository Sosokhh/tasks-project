export interface Data<T> {
  paginationKey: string;
  results: T[];
  totalMatches: number;
}

export const DATA_INITIAL: Data<any> = {
  results: [],
  paginationKey: '',
  totalMatches: 0,
};
