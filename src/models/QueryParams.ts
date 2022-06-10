export interface QueryParams {
  sortBy: string | null;
  sortOrder: 'asc' | 'desc'; // is needed for sortBy to work
  search: string | null;
  searchBy: 'title' | 'genre'; // is needed for search to work
  filter: string | null;
}
