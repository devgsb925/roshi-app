import type { AxiosWithPagination } from './pagination.type'

export type PredictionTeamMatchProp = {
  title: string
  imageUrl: string
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

export type PredictionModelForm = Omit<PredictionModel, 'id'>

export type PredictionsResponse = AxiosWithPagination<PredictionModel[]>
