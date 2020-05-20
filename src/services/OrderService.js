import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3003/',
  withCredentials: false, //this is default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getOrders() {
    return apiClient.get('/orders')
  },
  postOrder(order) {
    return apiClient.post('/orders', order)
  }
}
