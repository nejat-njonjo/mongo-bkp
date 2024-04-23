const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const connectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbUser = process.env.DB_USER;
const authPass = process.env.DB_PASS;
const authSource = process.env.AUTH_SOURCE;

const url = `mongodb://${dbUser}:${authPass}@localhost:27017/?authSource=${authSource}&w=1`;

const getDatabaseList = async () => {
  const connection = await mongoose.createConnection(url, connectionConfig);
  const adminDb = connection.db.admin();

  try {
    return (await adminDb.listDatabases()).databases;
  } finally {
    connection.close();
  }
};

const getDatabaseCollections = async (databases) => {
  const client = await MongoClient.connect(url, connectionConfig);

  try {
    const data = [];
    for (const database of databases) {
      const db = client.db(database.name);
      const collections = await db.listCollections().toArray();
      data.push({
        ...database,
        collections: collections.map((col) => col.name),
      });
    }
    return data;
  } finally {
    client.close();
  }
};

async function listDatabases(req, res) {
  try {
    const outbox = await getDatabaseList();
    const databases = await getDatabaseCollections(outbox);
    res.send({ databases });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
}

module.exports = Object.freeze({
  listDatabases,
});
