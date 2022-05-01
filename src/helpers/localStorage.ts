export const getItem = (key: string) => {
  const resp = window.localStorage.getItem(key) ?? "{}"
  return JSON.parse(resp)
}
export const setItem = (key: string, value: string | object) =>
  window.localStorage.setItem(key, JSON.stringify(value))

export const removeItem = (key: string) => window.localStorage.removeItem(key)
export const clear = () => window.localStorage.clear() 