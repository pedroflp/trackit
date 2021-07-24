import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo="
})

export default api