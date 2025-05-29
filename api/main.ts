import axios from 'axios'
import { API_BASE_URL, TIMEOUT } from '../constants/Api'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: TIMEOUT,
})

export default apiClient
