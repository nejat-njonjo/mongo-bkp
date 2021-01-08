const db = require('mongoose')

const url = `mongodb://localhost:27017`

function listDatabases(req, res) {
  const connection = db.createConnection(url)
  connection.on('open', () => {
    new db.mongo.Admin(connection.db).listDatabases((err, result) => {
      if (err) {
        res.status(404).send(err)
        return
      }
      res.send(result)
    })
  })
}

module.exports = Object.freeze({
  listDatabases
})
