import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { TextField ,  Button } from '@mui/material/';
import imagem1 from "./programador.png";
import github from "./github.png";

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(false)

  const getEmailValue = (e) => {
    let emailValue = e.target.value
    setEmail(emailValue)
  }
  const getPasswordValue = (e) => {
    let passwordValue = e.target.value 
    setPassword(passwordValue)
  }
  const sendLoginData = ()=> {
    let data = {
      email: email,
      password: password
    }
    axios.post("https://62913677665ea71fe142a512.mockapi.io/api/v1/login/", data).then((res)=> {
      let token = res.data.token
      localStorage.setItem("token", token)
    })
  }
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token !== null){
      setLogged(true)
    }
  }, []) 


  return (
    <div className="App">
         <img alt="aprendendo" className='imagem__aprendendo' src={imagem1}/>
        <TextField 
          id="standard-basic" 
          label="Email" 
          variant="standard" 
          type="email"
          onChange={getEmailValue}
          value={email}
          margin="normal"
        />
        <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
          type="password"
          onChange={getPasswordValue}
          value={password}
          margin="normal"
        />
        <Button 
          style={{
            marginTop: 9 
          }}
          variant="outlined"
          onClick={sendLoginData}
        >Login
        </Button>
        <a href="https://github.com/luanafront/estudos-api-domingo">
          <img alt="aprendendo" className='imagem__github' src={github}/> 
        </a>
    </div>
  );
}

export default App;
