import axios from './axios'

const login = (email, password) => {
    return axios.post('/admin/auth/login', {
        email, password
    })
}

const getProfile = () => {
    return axios.get('/admin')
}
const getDealer = () => {
    return axios.get('admin/top-dealers?page=1&limit=10')
}
const getorder = () => {
    return axios.get('/order?limit=10&page=1&delivered=true')
}
export default {
    login,
    getProfile,
    getDealer,
    getorder
}