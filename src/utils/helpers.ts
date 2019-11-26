// 下划线转驼峰
export const camelCase = str =>
  str.replace(/(-|_)+(.)?/g, (_match, _p1, p2) => (p2 ? p2.toUpperCase() : ''))

// 驼峰转下划线
export const underscoreCase = str =>
  str.replace(/([A-Z])/g, (_match, p1) => (p1 ? `_${p1.toLowerCase()}` : ''))

// 驼峰&下划线互转
const switchCase = fn => obj => {
  if (obj instanceof Array) {
    return obj.map(item => switchCase(fn)(item))
  }

  if (obj instanceof Object) {
    const object = {}
    Object.keys(obj).forEach(key => {
      object[fn(key)] = switchCase(fn)(obj[key])
    })
    return object
  }

  return obj
}

// 将 json key 中的下划线转为驼峰
export const camelJson = switchCase(camelCase)

// 将 json key 中的驼峰转为下划线
export const underscoreJson = switchCase(underscoreCase)
