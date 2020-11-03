const path = require('path')
module.exports = {
  getPath (pathName, basicPath = __dirname) {
    return path.resolve(basicPath, pathName)
  }
}