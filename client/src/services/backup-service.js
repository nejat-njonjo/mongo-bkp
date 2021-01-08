import axios from 'axios'

const url = '/api/v1'

export default class BackupService {
  static async createBackup(payload) {
    try {
      const endpoint = `${url}/backup`
      const res = await axios.post(endpoint, payload)
      return res.data
    } catch (e) {
      return e
    }
  }
}