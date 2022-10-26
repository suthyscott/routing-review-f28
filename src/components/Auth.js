import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // put logic here to make a login/register request to backend
    navigate('/')
  }
  return (
    <div>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default Auth