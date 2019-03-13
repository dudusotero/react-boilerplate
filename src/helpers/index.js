export const getUrlParams = (str) => {
  const params = str.match(/[^&?]*?=[^&?]*/g)
  const obj = {}
  params.forEach((param) => {
    const [first, second] = param.split('=')
    obj[first] = second
  })
  return obj
}

export const copyToClipboard = (targetId) => {
  const target = document.getElementById(targetId)
  const el = document.createElement('input')
  el.style.position = 'absolute'
  el.style.top = '-9999px'
  el.value = target.value
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  el.remove()
}

export const triggerClickById = id => document.getElementById(id).click()
