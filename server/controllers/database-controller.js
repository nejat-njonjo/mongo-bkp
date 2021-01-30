const db = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const connectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const url = `mongodb://localhost:27017`

const getDatabaseList = () => {
  return new Promise((resolve, reject) => {
    const connection = db.createConnection(url, connectionConfig)

    connection.on('open', () => {      
      new db.mongo.Admin(connection.db).listDatabases((err, result) => {
        if (err) {
          reject(err)
        }

        resolve(result.databases)
      })
    })
  })
}

const outbox = list => {
  const cols = []
  for (collection of list) {
    cols.push(collection.collectionName)
  }

  return cols
}

const getDatabaseCollections = databases => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, connectionConfig, async (err, client) => {
      const data = []
      for (const database of databases) {
        const db = client.db(database.name)
        const collections = await db.collections()
        data.push({
          ...database,
          collections: outbox(collections)
        })
      }

      resolve(data)
    })
  })
}

async function listDatabases(req, res) {
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async (err, client) => {
      const outbox = await getDatabaseList()
      const databases = await getDatabaseCollections(outbox)

    res.send({
      databases
    })
  })
}

module.exports = Object.freeze({
  listDatabases
})
