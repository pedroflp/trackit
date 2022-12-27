import axios from 'axios'

const api = axios.create({
  baseURL: `https://api.linketrack.com/track/json`,
})

export default api
