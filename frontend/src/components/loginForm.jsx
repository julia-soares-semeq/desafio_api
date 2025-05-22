import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const url = "http://127.0.0.1:8000"

function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let dados = JSON.stringify({username, password})
    try{
      console.log(dados)
        let res = await fetch(`${url}/token`, {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json'
        },
        body: dados
      });
    response = await response.json();
    console.log(response)
    localStorage.setItem("access/refresh",JSON.stringify(response))
    history.pushState("/home")
    }
  catch (error){
    console.log(error)
  }
  if(res.ok){
    navigate('/home');
  };
  };

  return(
    <form onSubmit = {handleSubmit}>
      <label>Username</label>
      <input className ="inputValue" value={username} type="text" placeholder='username' onChange={(e) =>setUsername(e.target.value)} />
      <label>Password</label>
      <input className='inputValue' value={password} type="password" placeholder='password'  onChange={(e)=> setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    
    </form>
  );
};

export default LoginForm;
