async function loadBuckups(req, res) {
  try {
    res.send('OK')
  } catch (error) {
    res.send(error.message)
  }
}

module.exports = Object.freeze({
  loadBuckups
})
