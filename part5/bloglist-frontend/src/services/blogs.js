import axios from 'axios'
const baseUrl = '/api/blogs'

let authToken = null

const setAuthToken = (token) => {
  authToken = `Bearer ${token}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createBlog = async (blogData) => {
  const config = {
    headers: { Authorization: authToken }
  }
  const response = await axios.post(baseUrl, blogData, config)
  return response.data
}

export default { getAll, createBlog, setAuthToken }