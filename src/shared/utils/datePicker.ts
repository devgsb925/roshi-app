import dayjs from 'dayjs'
export const stringToDatePicker = (str: string | Date): any => {
  const date = dayjs(str)
  return date.isValid() ? date : ''
}
