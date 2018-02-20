const test = require('tape')
const waitWithCallback = require('./wait-seconds').withCallback
const waitWithPromise = require('./wait-seconds').withPromise
const ERR_MSG = 'Error: Seconds must be a number'

test('passing callback succeeds with number', function (t) {
  waitWithCallback(2, function (err, msg) {
    if (err) { console.error(err) }
    t.equals(msg, "Here's my number, so call me maybe.")
    t.end()
  })
})

test('failing callback fails with string', function (t) {
  waitWithCallback('2', function (err, msg) {
    if (err) { console.error(err) }
    t.equals(err.message, ERR_MSG)
    t.end()
  })
})

test('passing promise succeeds with number', function (t) {
  waitWithPromise(2).then(function (msg) {
    t.equals(msg, 'This is something, I promise.')
    t.end()
  })
})

test('failing promise fails with string', function (t) {
  waitWithPromise('2')
    .then(function (msg) {
      t.fail('Should not have called the resolve function')
      t.end()
    })
    .catch(function (errmsg) {
      t.equals(errmsg, ERR_MSG)
      t.end()
    })
})
