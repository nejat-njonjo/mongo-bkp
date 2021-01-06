const router = require('express').Router()
const backupController = require('../controllers/backup-controller')

/**
 * Backup Routes
 */
router.get('/backups', backupController.loadBuckups)


module.exports = router