const shell = require('shelljs')
const {
  atlasProtocol: protocol,
  atlasPassword: pswd,
  atlasHost: host,
  atlasUsername: uname
} = require('./config')

const restoreDatabase = (database, dir) => {
  const dump = shell.exec(`mongorestore --uri ${protocol}://${uname}:${pswd}@${host} --drop --db ${database} ${dir}`)

  if (dump.code !== 0) {
    return false
  }

  return true
}

module.exports = {
  restoreDatabase
}