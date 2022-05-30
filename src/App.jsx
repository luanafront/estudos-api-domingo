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
      setLogged(true)
    })
  }
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token !== null){
      setLogged(true)
    }
  }, []) 
  const logout = () => {
    localStorage.clear()
    setLogged(false)
  }


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
        <div className='botoes'>
          <Button 
            style={{
              margin: 9 
            }}
            variant="outlined"
            onClick={sendLoginData}
          >Login
          </Button>
          <Button 
            style={{
              margin: 9 
            }}
            variant="outlined"
            onClick={logout}
          >Logout
          </Button>
        </div>
        <p className='mensagem'>{logged ? "You are logged!" : "You aren't logged!"}</p>
        <a href="https://github.com/luanafront/estudos-api-domingo">
          <img alt="aprendendo" className='imagem__github' src={github}/> 
        </a>
    </div>
  );
}

export default App;
