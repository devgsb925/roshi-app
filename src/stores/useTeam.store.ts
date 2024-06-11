import { teamService } from '@/shared/services/api/team.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTeamStore = defineStore('counter', () => {
  const teams = ref<string[]>([])
  const loading = ref(false)

  const onFetchTeams = async () => {
    loading.value = true
    const result = await teamService.getAll()

    if (result.error) return 'Fetch team have failed'

    teams.value = result.data

    loading.value = false
    return ''
  }

  return { teams, loading, onFetchTeams }
})
