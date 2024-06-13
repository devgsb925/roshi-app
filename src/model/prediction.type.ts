import type { AxiosWithPagination, PaginationTableType } from './pagination.type'

export type PredictionTeamMatchProp = {
  title: string
  imageUrl: string
}

export type SchedulePrediction = {
  label: string
  value: Date
}

export type PredictionModel = {
  id: string
  poster: string
  oddDetail: string
  introduction: string
  roshiPrediction: string
  teamLeft: string | null
  teamRight: string | null
  links: string[]
  reliability: number
  schedule: null | Date
  winner: string
  onPoint: boolean
  archive: boolean
}

export type PredictionModelNotNull = {
  id: string
  poster: string
  oddDetail: string
  introduction: string
  roshiPrediction: string
  teamLeft: string
  teamRight: string
  links: string[]
  reliability: number
  schedule: Date
  winner: string
  onPoint: boolean
  archive: boolean
}
export type PredictionFilterType = {
  schedule?: string
  team?: string
  winner?: string
  archive?: boolean
  onPoint?: boolean
} & Partial<PaginationTableType>

export type PredictionModelForm = Omit<PredictionModel, 'id'>

export type PredictionsResponse = AxiosWithPagination<PredictionModel[]>
export type PredictionsPublicResponse = AxiosWithPagination<PredictionModelNotNull[]>
export type ScheduleResponse = AxiosWithPagination<SchedulePrediction[]>
