export const getUrlParams = (str) => {
  const params = str.match(/[^&?]*?=[^&?]*/g)
  const obj = {}
  params.forEach((param) => {
    const [first, second] = param.split('=')
    obj[first] = second
  })
  return obj
}
