import { useState } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import './App.css'


const App= () => {
  const [ username, password ] = useState([]);

  const onSubmit = (data) =>{
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} type ="text" placeholder="Username"/>
      <input {...register("password")} type="password" placeholder="Password"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
