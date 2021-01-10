const shell = require('shelljs')

const dumpDatabase = (database, dir) => {
  const dump = shell.exec(`mongodump --db=${database} --out=${dir}`)

  if (dump.code !== 0) {
    return false
  }

  return true
}

module.exports = {
  dumpDatabase
}