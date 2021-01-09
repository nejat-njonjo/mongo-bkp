const childProcess = require('child_process')
const fs = require('fs')
const db = require('mongoose')
const path = require('path')

const atlasURI = 'mongodb+srv://dataframe:Mlambe101@mongobkp.waqd2.mongodb.net/'

function loadBuckups(req, res) {
  try {
    res.send('OK')
  } catch (error) {
    res.send(error.message)
  }  
}

function backup(req, res) {
  try {
    const {host, port, database, directory} = req.body

    if (!database) {
      res.send({
        error: 'You must provide database name'
      })
      return
    }

    if (directory && database) {
      fs.access(directory, err => {
        if (err) {
          res.send({
            error: `Unknown directory "${directory}"`
          })
          return
        }
      })

      createBackup({ host, port, database }, directory).then(onfullfilled => {
        res.send(onfullfilled)
      }).catch(err => {
        res.send({
          error: new Error(err).message
        })
      })
    } else {
      createBackup({host, port, database}).then(onfullfilled => {
        res.send(onfullfilled)
      }).catch(err => {
        res.send({
          error: new Error(err).message
        })
      })
    }

    
  } catch (error) {
    res.status(403)
  }
}

function restore() {
  childProcess.exec('mongorestore --uri mongodb+srv://dataframe:Mlambe101@mongobkp.waqd2.mongodb.net/ -d store ./server/backup/dreamDataStore')
}

function createBackup({host, port, database}, directory = '') {
  return new Promise((resolve, reject) => {
    let url = `mongodb://${host}:${port}/${database}`
    if (!host || !port) {
      url = `mongodb://localhost:27017/${database}`
    }

    db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, err => {
      if (err) {
        reject(err)
        return
      }
    })
    const defaultOutDir = path.resolve(__dirname + '../../backup/')
    const command = `mongodump --db=${database} --out=${directory ? directory : defaultOutDir}`
    childProcess.exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err)
        return
      }

      const restoreCommand = `mongorestore --uri ${atlasURI} -d ${database} ${directory}`

      childProcess.exec(restoreCommand, (err, stdout, stderr) => {
        if (err) {
          res.send(err)
          return
        }

        const message = directory ? `Saved to ${directory}/${database}` : `Saved to /server/backup/${database} and saved to Mongo Atlas`

        resolve({ success: true, message })
      })
    })
  })
}

module.exports = Object.freeze({
  loadBuckups,
  backup
})
