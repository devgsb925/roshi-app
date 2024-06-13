import type {
  PredictionModel,
  PredictionModelForm,
  PredictionsResponse
} from '@/model/prediction.type'
import { api, API_URIs, axiosErrorMsg, type IServiceResultData } from './api.service'

class PredictionService {
  async save(body: PredictionModelForm) {
    const res: IServiceResultData<string> = {
      data: '',
      message: '',
      error: false
    }

    try {
      const response = await api.post(API_URIs.prediction, body)
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }
  async update(id: string, body: PredictionModelForm) {
    const res: IServiceResultData<string> = {
      data: '',
      message: '',
      error: false
    }

    try {
      const response = await api.patch(`${API_URIs.prediction}/${id}`, body)
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }
  async del(id: string) {
    const res: IServiceResultData<string> = {
      data: '',
      message: '',
      error: false
    }

    try {
      const response = await api.delete(`${API_URIs.prediction}/${id}`)
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }

  async getAll(filter: Record<string, any>) {
    const res: IServiceResultData<PredictionsResponse> = {
      data: {
        data: [],
        pagination: {
          page: 0,
          total: 0,
          perPage: 0,
          totalPages: 0
        }
      },
      message: '',
      error: false
    }

    try {
      const response = await api.get(`${API_URIs.prediction}`, {
        params: filter
      })
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }
  async getOne(id: string) {
    const res: IServiceResultData<PredictionModel> = {
      data: {
        id: '',
        poster: '',
        oddDetail: '',
        introduction: '',
        roshiPrediction: '',
        teamLeft: null,
        teamRight: null,
        links: [],
        reliability: 0,
        schedule: null,
        winner: '',
        onPoint: false,
        archive: false
      },
      message: '',
      error: false
    }

    try {
      const response = await api.get(`${API_URIs.prediction}/${id}`)
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }
}

export const predictionService = new PredictionService()
