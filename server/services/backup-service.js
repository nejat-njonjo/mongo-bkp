const shell = require('shelljs')
const config = require('./config')

const dumpDatabase = (database, dir) => {
  const dump = shell.exec(`mongodump --username=${config.localUsername} --authenticationDatabase admin --password=${config.localPassword} --db=${database} --out=${dir}`)

  if (dump.code !== 0) {
    return false
  }

  return true
}

module.exports = {
  dumpDatabase
}