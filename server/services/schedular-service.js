
const cron = require('node-cron')
const dump = require('./backup-service')
const config = require('./config')
const restore = require('./restore-service')
const path = require('path')

class SchedularService {
  constructor(mins = '*', hr = '*') {
    this.startSchedular(mins, hr)
  }

  startSchedular(mins, hr) {
    cron.schedule(`15 * * * * *`, () => {
      console.log('YO')
      if (dump.dumpDatabase(config.database, config.outDir)) {
        restore.restoreDatabase(config.database, path.resolve(`${config.outDir}/${config.database}`))
      }
    })
  }
}

module.exports = SchedularService
