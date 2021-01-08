const router = require('express').Router()
const backupController = require('../controllers/backup-controller')
const databaseController = require('../controllers/database-controller')

/**
 * Backup Routes
 */
router.get('/backups', backupController.loadBuckups)
      .post('/backup', backupController.backup)

router.get('/databases', databaseController.listDatabases)


module.exports = router
