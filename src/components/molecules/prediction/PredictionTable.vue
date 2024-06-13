<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { type PredictionModel } from '@/model/prediction.type'
import { type PaginationTableType } from '@/model/pagination.type'
import PredictionTagStatus from '@/components/molecules/prediction/PredictionTagStatus.vue'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  total: number
  data: PredictionModel[]
}>()

const emits = defineEmits(['edit', 'delete', 'paginateChange'])

const pagination = reactive<PaginationTableType>({
  page: 1,
  perPage: 10
})

const onPaginateChange = (page: number, perPage: number) => {
  pagination.page = page
  pagination.perPage = perPage
  emits('paginateChange', pagination)
}

const columns = [
  {
    title: 'Poster',
    dataIndex: 'poster',
    align: 'center',
    key: 'poster'
  },
  {
    title: 'MatchInfo',
    dataIndex: 'matchInfo',
    align: 'center',
    width: 400,
    key: 'matchInfo'
  },
  {
    title: 'schedule',
    dataIndex: 'schedule',
    width: 200,
    align: 'center',
    key: 'schedule'
  },
  {
    title: 'winner',
    dataIndex: 'winner',
    align: 'center',
    key: 'winner'
  },
  {
    title: 'oddDetail',
    dataIndex: 'oddDetail',
    align: 'center',
    key: 'oddDetail'
  },
  {
    title: 'onPoint',
    dataIndex: 'onPoint',
    key: 'onPoint',
    align: 'center'
  },
  {
    title: 'archive',
    dataIndex: 'archive',
    align: 'center',
    key: 'archive'
  },
  {
    title: '',
    align: 'center',
    key: 'action'
  }
]

const dataSource = computed(() =>
  props.data.map((val) => ({
    id: val.id,
    poster: val.poster,
    matchInfo: `${val.teamLeft} vs ${val.teamRight}`,
    schedule: val.schedule ? new Date(val.schedule).toLocaleString() : '',
    winner: val.winner,
    oddDetail: val.oddDetail,
    onPoint: val.onPoint,
    archive: val.archive
  }))
)
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="{
      page: pagination.page,
      total: total,
      perPage: pagination.perPage,
      onChange: onPaginateChange,
      showSizeChange: onPaginateChange
    }"
    bordered
    size="middle"
  >
    <template #bodyCell="{ record, column }">
      <template v-if="column.key === 'action'">
        <div style="display: flex; gap: 8px">
          <a-button @click="emits('edit', record.id)" type="primary"><EditOutlined /></a-button>
          <a-button @click="emits('delete', record.id)" danger><DeleteOutlined /></a-button>
        </div>
      </template>

      <template v-if="column.key === 'poster'">
        <a-avatar :size="50" :src="record.poster" :alt="record.poster" />
      </template>
      <template v-if="column.key === 'onPoint'">
        <PredictionTagStatus :status="record.onPoint" />
      </template>
      <template v-if="column.key === 'archive'">
        <PredictionTagStatus :status="record.archive" />
      </template>
    </template>
  </a-table>
</template>

<style scoped></style>
