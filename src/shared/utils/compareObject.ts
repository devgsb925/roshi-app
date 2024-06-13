export function compareObjects(
  defaultState: Record<string, any>,
  updateState: Record<string, any>
) {
  const changes: Record<string, any> = {}

  for (const key in updateState) {
    if (updateState[key] && defaultState[key] !== updateState[key]) changes[key] = updateState[key]
  }

  return changes
}
