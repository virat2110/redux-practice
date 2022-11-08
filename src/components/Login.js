import React, { useState } from 'react';
import './Login.css';
import { TextField, Button} from '@mui/material';

const Login = () => {

const [name, setName] = useState("");
const [password, setPassword] = useState("");




  return (
    <div className='login-container'>
      <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => { setName(e.value) }}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} type='password' onChange={(e) => { setPassword(e.value) }} />
        <Button variant="contained">LOGIN</Button>
      </form>
    </div>
  )
}

export default Login;