const waitSeconds = require('./wait-seconds').withCallback

module.exports = {
  pass: pass,
  fail: fail
}

function pass () {
  console.log('Tell me something Mr. Callback?')
  waitSeconds(2, showResponse)
}

function fail () {
  console.log('Is something wrong Mr. Callback?')
  waitSeconds('2', showResponse)
}

function showResponse (err, message) {
  if (err) {
    return showFailure(err.message)
  }
  console.log(message)
}

function showFailure (message) {
  console.log(message)
}
