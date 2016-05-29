module.exports = {
  withCallback: withCallback,
  withPromise: withPromise
}

var ERR_MSG = 'Error: Seconds must be a number'

function withCallback (seconds, callback) {
  if (typeof seconds !== 'number') {
    return callback(new Error(ERR_MSG))
  }
  setTimeout(function () {
    callback(null, "Here's my number, so call me maybe.")
  }, seconds * 1000)
}

function withPromise (seconds) {
  return new Promise(function (resolve, reject) {
    if (typeof seconds !== 'number') {
      return reject(ERR_MSG)
    }
    setTimeout(function () {
      resolve('This is something, I promise.')
    }, seconds * 1000)
  })
}
