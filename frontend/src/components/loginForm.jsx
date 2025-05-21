import { useState } from 'react'
import './App.css'

//Login function. Create a username and a password using setUsername. We utilize useState because the input values change. It's a react thing
function loginForm({sendLogin}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  //Se o usuario quiser enviar o form sem  username ou password, o validateForm bloqueia
  const validateForm =()=>{
    if(!username || !password){
      setError('Username and password are required!');
      return false;
    }
    setError('')
    return true;
  };
//When submitinhg a form, prevent the default reloading of the page. If the validating fails, the executing ends with return. 
  const handleSubmit =async (e)=>{
    e.preventDefault();
    if (!validateForm())return;
    setLoading(true);

    //If i doesn't fail, we use this method to search the url params, if it finds it, append the username and password
    const formValues = URLSearchParams();
    formValues.append("username", username);
    formValues.append("password", password);

    try{
      const response = await post('http://localhost:8000/', {
        method: 'POST', 
        hearders:{
          'Content/Type': 'JSON'
        },
        body: formValues
      })
    console.log(response)
    }
  catch (error){
    setLoading(false);
    setError('Post request error.');
  }
  setLoading(False)
  };

  return(
    <form onSubmit = {handleSubmit}>
      <label>Username</label>
      <input value={username}type="text" placeholder='username' onChange={(e) =>setUsername(e.target.value)}></input>
      <label>Password</label>
      <input value={password} type="password" placeholder='password'  onChange={(e)=> setPassword(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App
