import { api, API_URIs, axiosErrorMsg, type IServiceResultData } from './api.service'

class TeamService {
  async getAll() {
    const res: IServiceResultData<string[]> = {
      data: [],
      message: '',
      error: false
    }
    try {
      const response = await api.get(API_URIs.team)
      res.data = response.data.data
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }
}

export const teamService = new TeamService()
