var waitSeconds = require('./wait-seconds').withPromise

module.exports = {
  pass: pass,
  fail: fail
}

function pass () {
  console.log('Tell me something Ms. Promise?')
  waitSeconds(2)
    .then(showResponse)
    .catch(showFailure)
}

function fail () {
  console.log('Is something wrong Ms. Promise?')
  waitSeconds('2')
    .then(showResponse)
    .catch(showFailure)
}

function showResponse (message) {
  console.log(message)
}

function showFailure (message) {
  console.log(message)
}
