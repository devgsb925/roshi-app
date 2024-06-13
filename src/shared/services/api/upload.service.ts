import { api, API_URIs, axiosErrorMsg, type IServiceResultData } from './api.service'

class UploadService {
  async upload(file: File) {
    const res: IServiceResultData<string> = {
      data: '',
      message: '',
      error: false
    }
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await api.post(API_URIs.uploadFile, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }

    return res
  }
}

export const uploadService = new UploadService()
