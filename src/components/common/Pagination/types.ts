export type propsPagination<T> = {
  itemsPerPage: number;
  totalPages: number;
  data: T[] | [];
  onChangeData: (data: T[]) => void;
};
