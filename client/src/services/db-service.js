import axios from 'axios'

const url = '/api/v1'

export default class DBService {
  static async getDatabases() {
    try {
      const endpoint = `${url}/databases`
      const res = await axios.get(endpoint)
      return res.data
    } catch (e) {
      return e
    }
  }
}