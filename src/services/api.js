import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.linketrack.com/track/json?user=pedrofelipe0940@gmail.com&token=97d1b9173324b42178ff1cb34e94b94add61ab457bbc216916759de7317bf2c6&codigo="
})

export default api
