<script lang="ts" setup>
import type { PredictionModel, PredictionModelForm } from '@/model/prediction.type'
import { useTeamStore } from '@/stores/useTeam.store'
import { reactive, computed, ref } from 'vue'
import { filterAntOption } from '@/shared/utils/filterOption'
import { stringToDatePicker } from '@/shared/utils/datePicker'
const teamStore = useTeamStore()

defineProps<{
  id?: string
}>()
const formState = ref<PredictionModelForm>({
  poster: '',
  oddDetail: '',
  introduction: '',
  roshiPrediction: '',
  teamLeft: null,
  links: ['', '', ''],
  teamRight: null,
  reliability: 0,
  schedule: null,
  winner: '',
  onPoint: false,
  archive: true
})

const emits = defineEmits(['finish'])

const message = '${label} is required'
const getDefaultRule = (required = true, trigger = ['change', 'blur']) => [
  { required, message, trigger }
]

const rules = reactive({
  poster: getDefaultRule(),
  oddDetail: getDefaultRule(),
  introduction: getDefaultRule(),
  roshiPrediction: getDefaultRule(),
  teamLeft: getDefaultRule(),
  links: getDefaultRule(false),
  teamRight: getDefaultRule(),
  reliability: getDefaultRule(),
  schedule: getDefaultRule(),
  //
  winner: getDefaultRule(false),
  onPoint: getDefaultRule(false),
  archive: getDefaultRule(false)
})
const onFinish = () => {
  emits('finish', formState.value)
}

const teamSelectedOptions = computed(() => {
  const otps = []
  if (formState.value.teamLeft) {
    otps.push({
      label: formState.value.teamLeft,
      value: formState.value.teamLeft
    })
  }
  if (formState.value.teamRight) {
    otps.push({
      label: formState.value.teamRight,
      value: formState.value.teamRight
    })
  }
  return otps
})

const onArchiveChange = () => {
  if (!formState.value.archive) return (rules.winner[0].required = true)
  rules.winner[0].required = false
}
const onReplaceForm = (prediction: PredictionModel) => {
  formState.value.poster = prediction.poster
  formState.value.oddDetail = prediction.oddDetail
  formState.value.introduction = prediction.introduction
  formState.value.roshiPrediction = prediction.roshiPrediction
  formState.value.teamLeft = prediction.teamLeft
  formState.value.links = prediction.links
  formState.value.teamRight = prediction.teamRight
  formState.value.reliability = Number(prediction.reliability)
  formState.value.schedule = prediction.schedule ? stringToDatePicker(prediction.schedule) : null
  formState.value.winner = prediction.winner
  formState.value.onPoint = prediction.onPoint
  formState.value.archive = prediction.archive
  onArchiveChange()
}

defineExpose({
  onReplaceForm
})
</script>

<template>
  <div>
    <a-card class="card">
      <a-form
        :rules="rules"
        :model="formState"
        name="prediction-form"
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-row :gutter="[8, 8]">
          <!-- poster -->
          <a-col span="24">
            <a-form-item label="Poster" name="poster" has-feedback>
              <a-input readonly v-model:value="formState.poster" placeholder="input username" />
            </a-form-item>
          </a-col>
          <!-- teamLeft -->
          <a-col span="12">
            <a-form-item label="Team-A" name="teamLeft" has-feedback>
              <a-select
                :filter-option="filterAntOption"
                show-search
                allowClear
                v-model:value="formState.teamLeft"
                placeholder="select Team-A"
              >
                <a-select-option
                  v-show="team === formState.teamRight"
                  v-for="team in teamStore.teams"
                  :key="team"
                  :value="team"
                  :label="team"
                ></a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <!-- teamRight -->
          <a-col span="12">
            <a-form-item label="Team-B" name="teamRight" has-feedback>
              <a-select
                :filter-option="filterAntOption"
                show-search
                allowClear
                v-model:value="formState.teamRight"
                placeholder="select Team-B"
              >
                <a-select-option
                  v-for="team in teamStore.teams"
                  :key="team"
                  :value="team"
                  :label="team"
                ></a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <!-- schedule -->
          <a-col span="24">
            <a-form-item label="Schedule" name="schedule" has-feedback>
              <a-date-picker
                style="width: 300px"
                showTime
                v-model:value="formState.schedule"
                placeholder="select schedule"
              /> </a-form-item
          ></a-col>

          <!-- reliability -->
          <a-col span="24">
            <a-form-item label="Reliability" name="reliability" has-feedback>
              <a-input-number
                style="width: 300px"
                :min="0"
                :max="100"
                :precision="2"
                v-model:value="formState.reliability"
              />
            </a-form-item>
          </a-col>
          <!-- oddDetail -->
          <a-col span="24">
            <a-form-item label="oddDetail" name="oddDetail" has-feedback>
              <a-auto-complete
                v-model:value="formState.oddDetail"
                :options="teamSelectedOptions"
                style="width: 300px"
                placeholder="input here"
              />
            </a-form-item>
          </a-col>

          <!-- links -->
          <a-col v-for="(_, index) in formState.links" :key="`link-${index}`" span="8">
            <a-form-item :label="`Link-${index + 1}`" :name="['links', index]">
              <a-input v-model:value="formState.links[index]" placeholder="" />
            </a-form-item>
          </a-col>

          <!-- introduction -->
          <a-col span="24">
            <a-form-item label="Introduction" name="introduction" has-feedback>
              <a-textarea v-model:value="formState.introduction" />
            </a-form-item>
          </a-col>

          <!-- roshiPrediction -->
          <a-col span="24">
            <a-form-item label="RoshiPrediction" name="roshiPrediction" has-feedback>
              <a-textarea v-model:value="formState.roshiPrediction" />
            </a-form-item>
          </a-col>

          <!-- archive -->
          <a-col span="24">
            <a-form-item label="archive" name="archive" has-feedback>
              <a-checkbox @change="onArchiveChange" v-model:checked="formState.archive"
                >archive</a-checkbox
              >
            </a-form-item>
          </a-col>

          <!-- onPoint -->
          <a-col span="24">
            <a-form-item label="onPoint" name="onPoint" has-feedback>
              <a-checkbox :disabled="formState.archive" v-model:checked="formState.onPoint"
                >onPoint</a-checkbox
              >
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-form-item label="winner" name="winner" has-feedback>
              <a-auto-complete
                v-model:value="formState.winner"
                :options="teamSelectedOptions"
                style="width: 300px"
                placeholder="input here the winner"
              />
            </a-form-item>
          </a-col>

          <a-form-item>
            <a-button type="primary" html-type="submit">
              {{ id ? 'Update' : 'New' }} Prediction</a-button
            >
          </a-form-item>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<style scoped></style>
