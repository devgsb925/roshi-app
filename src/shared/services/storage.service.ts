export const StoreKeys = {
  User: 'user'
}
export const storage = {
  get: <T>(key: string, defaultValue = null): T | null => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
  },
  set: <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear()
}
