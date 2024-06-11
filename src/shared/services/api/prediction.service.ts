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
}

export const predictionService = new PredictionService()
