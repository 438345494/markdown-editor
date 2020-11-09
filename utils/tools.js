const isObj = obj => Object.prototype.toString.call(obj) === '[object Object]'
const isNum = num => Object.prototype.toString.call(num) === '[object Number]'
function debounce(fn, duration = 1000) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn()
    }, duration)
  }
}
module.exports = {
  isObj,
  isNum,
  debounce
}