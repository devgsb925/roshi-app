import type { PredictionsResponse } from '@/model/prediction.type'
import { api, API_URIs, axiosErrorMsg, type IServiceResultData } from './api.service'

class PredictionService {
  async save(body: any) {
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
  async update(id: string, body: any) {
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
}

export const predictionService = new PredictionService()
