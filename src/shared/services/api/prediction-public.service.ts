import type { PredictionsResponse, ScheduleResponse } from '@/model/prediction.type'
import { api, API_URIs, axiosErrorMsg, type IServiceResultData } from './api.service'

class PredictionPublicService {
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
      const response = await api.get(`${API_URIs.prediction}/${API_URIs.public}`, {
        params: filter
      })
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }

  async getSchedules(filter: Record<string, any>) {
    const res: IServiceResultData<ScheduleResponse> = {
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
      const response = await api.get(`${API_URIs.prediction}/${API_URIs.schedule}`, {
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

export const predictionPublicService = new PredictionPublicService()
