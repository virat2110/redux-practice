import { Button } from '@mui/material';
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <h1>Welcome <span>Ankit Seth</span>!</h1>
        <Button variant='contained' color='error'>LOGOUT</Button>
    </div>
  )
}

export default Home;