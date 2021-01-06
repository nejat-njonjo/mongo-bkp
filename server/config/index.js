const routes = require('./routes');
const port = () => process.env.PORT || '3000'

module.exports = {
  routes,
  port: port(),
  API: {
    baseUrl: '/api/v1'
  },
  Mongo: {
    username: '',
    password: '',
    hostname: 'localhost',
    port: '27017',
    dbname: 'my-backups'
  },
  Events: {
    DB_CONN_ERR: 'DB_CONN_ERR',
    DB_CONN_OK: 'DB_CONN_OK'
  }
}
