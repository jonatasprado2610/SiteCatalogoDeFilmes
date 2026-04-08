import axios from 'axios'
const api = axios.create({
      baseURL: process.env.REACT_APP_API_URL
})

export async function login(email,senha){
    const r = await api.post(`/usuario/login`, {
            email: email,
            senha: senha
});
return r.data;
}