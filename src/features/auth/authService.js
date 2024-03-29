import axios from 'axios'

const API_URL = 'https://g26back-main-1.onrender.com/api/users/'

//Creamos la peticion al backend para crear un usuario
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  return response.data
}

//Funcion para logear
const login = async (userData) => {
  const response = await axios.post(API_URL+'login', userData)
  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//Logout para el usuario
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout
}

export default authService