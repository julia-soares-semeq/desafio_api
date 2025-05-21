import React, {useState} from 'react'
import api from "../api.js"
import loginForm from "./loginForm.js"

const LoginList = () => {
    const [token, setToken] = useState([])

    const fetchLogin = async ()=>{
        try {
            const response= await api.post('/login', {"username": username, "password":password})
            loginForm(response.data.dadosLogin)
        }
        catch (error){
            console.error("Error fetching token")
        }
    }
}