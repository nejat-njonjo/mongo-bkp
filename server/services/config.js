const path = require('path')

module.exports = {
  outDir: path.resolve(`${__dirname}../../backup`),
  database: 'db-hcs',
  atlasUsername: 'dataframe',
  atlasPassword: 'Mlambe101',
  atlasProtocol: 'mongodb+srv',
  atlasHost: 'mongobkp.waqd2.mongodb.net'
}