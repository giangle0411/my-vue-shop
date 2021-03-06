import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false, //this is default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getPhones() {
    return apiClient.get('/mobile-phones')
  },
  getPhone(id) {
    return apiClient.get('/mobile-phones/' + id)
  },
  postPhone(phone) {
    return apiClient.post('/phones', phone)
  },
  getLaptops() {
    return apiClient.get('/laptops')
  },
  getLaptop(id) {
    return apiClient.get('/laptops' + id)
  },
  postLaptop(laptop) {
    return apiClient.post('/laptops', laptop)
  },
  getAccessories() {
    return apiClient.get('/accessories')
  },
  getProduct(category, id) {
    return apiClient.get('/' + category + '/' + id)
  }
}
