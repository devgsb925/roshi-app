export type PredictionTeamMatchProp = {
  title: string
  imageUrl: string
}

export type PredictionModel = {
  poster: string
  oddDetail: string
  introduction: string
  roshiPrediction: string
  teamLeft: string | null
  teamRight: string | null
  links: string[]
  reliability: number
  schedule: null
  winner: string
  onPoint: boolean
  archive: boolean
}
export type PredictionModelForm = PredictionModel
