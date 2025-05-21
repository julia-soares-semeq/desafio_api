import { useState } from "react";
import api from "../api.js"


const LoginForm = async () =>{
    const [username, setUsername] = useState([]);
    const [password, SetPassword] = useState([])
    try{
        const response = await api.post('/token');
        setUsername(response.data.username);
        SetPassword(response.data.password);
    }
    catch(error){
        console.error('Token Fetching failed')
    }
};

return (
    <div>
        <h2>Token</h2>
        <input>
            {token.map((token, index)=> (
                <li key = {index}>{token.access}</li>
            ))}
        </input>
    </div>
)
export default App;