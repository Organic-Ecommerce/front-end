export const getItem = (key: string) => {
  return window.localStorage.getItem(key)
}
export const setItem = (key: string, value : string) => {
  window.localStorage.setItem(key, value)
}
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}