export const filterAntOption = (input: string, option: { label: string; value: string }) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
