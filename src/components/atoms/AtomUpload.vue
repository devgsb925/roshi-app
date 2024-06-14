<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      :multiple="true"
      :before-upload="beforeUpload"
      @remove="handleRemove"
      @change="onChange"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 1">
        <PlusOutlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :open="previewVisible" :title="false" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { message, type UploadChangeParam } from 'ant-design-vue'
import { uploadService } from '@/shared/services/api/upload.service'

type FileListType = {
  uid: string
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  percent: number
  originFileObj?: File
  thumbUrl: string
  url: string
}

const fileList = ref<FileListType[]>([])
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const popFileList = () => fileList.value.pop()
async function onChange(info: UploadChangeParam) {
  const isJpgOrPng = info.file.type === 'image/jpeg' || info.file.type === 'image/png'

  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!')
    popFileList()
  }

  const size = info.file.size || 0
  const isLt5M = size / 1024 / 1024 < 5
  if (!isLt5M) {
    message.error('Image must smaller than 5MB!')
    popFileList()
  }
  if (isJpgOrPng && isLt5M) emits('update:fileName', 'init-not-required')
  return isJpgOrPng && isLt5M
}

const handleRemove = (file: any) => {
  const index = fileList.value.indexOf(file)
  const newFileList = fileList.value.slice()
  newFileList.splice(index, 1)
  fileList.value = newFileList
  emits('update:fileName', '')
}

const beforeUpload = async () => {
  // fileList.value = [...fileList.value, file]
  return false
}

// modal
const previewVisible = ref(false)
const previewImage = ref('')

const handlePreview = async (file: any) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string
  }
  previewImage.value = file.url || file.preview
  previewVisible.value = true
}
const handleCancel = () => {
  previewVisible.value = false
}

const props = defineProps<{
  fileName: string // or url that when update that
}>()
const count = ref(0)

const addFileListFromChange = () => {
  const dateStr = new Date().toISOString()
  const newFileList: FileListType = {
    uid: dateStr,
    lastModified: 0,
    lastModifiedDate: new Date(),
    name: dateStr,
    size: 0,
    type: 'image/' + props.fileName.split('.').pop(),
    percent: 0,
    thumbUrl: props.fileName,
    url: props.fileName
  }
  fileList.value = [newFileList]
  count.value++
}

watch(
  () => props.fileName,
  (newVal, prev) => {
    if (!count.value && newVal?.length > prev?.length) addFileListFromChange()
  }
)

const emits = defineEmits(['update:fileName'])
//Section upload
const handleUpload = async () => {
  if (fileList.value[0].originFileObj instanceof File) {
    const response = await uploadService.upload(fileList.value[0].originFileObj)
    if (response.error) return message.error(response.message)
    count.value++
    emits('update:fileName', response.data)
  }
}
defineExpose({
  handleUpload
})
</script>
