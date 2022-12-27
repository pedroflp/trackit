import axios from 'axios'

const api = axios.create({
  baseURL: `https://api.linketrack.com/track`,
})

export default api
