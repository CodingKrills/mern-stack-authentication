import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

// * Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register_user', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.response))
    }

    return response.data
}

// * Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login_user', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.response))
    }

    return response.data
}

// * Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService