export default interface PaginatedResult<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
