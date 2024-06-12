import axios from 'axios'
// const baseURL = 'http://localhost:3000/'
const baseURL = 'https://tangerina-pet-backend-91f0983cad6c.herokuapp.com/'
  export default {
    GetCategories: async () => {
        const response = await axios.get(baseURL + 'categories')
        return response
    }
    , GetProfessionals: async () => {
        const response = await axios.get(baseURL + 'professionals')
        return response
    }
}