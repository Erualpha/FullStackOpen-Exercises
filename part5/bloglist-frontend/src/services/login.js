import axios from 'axios'
const loginEndpoint = '/api/login'

const authenticate = async (credentials) => {
  const response = await axios.post(loginEndpoint, credentials)
  return response.data
}

export default { authenticate }