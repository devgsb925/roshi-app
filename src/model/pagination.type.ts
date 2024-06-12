export type PaginationTableType = {
  page: number
  pageSize: number
}

export type PaginationResponse = {
  total: number
  page: number
  perPage: number
  totalPages: number
}
export type AxiosWithPagination<T> = {
  data: T
  pagination: PaginationResponse
}
