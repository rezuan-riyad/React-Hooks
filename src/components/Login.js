// useState or useReducer
import React, { useState } from 'react'

export default function Login() {
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    await login(uname, pass)
      .then( () => {
        setIsLoggedIn(true)
        setUname('')
        setPass('')
      })
      .catch( error => setError(error))
    setIsLoading(false)
  }
  return(
    <>
      <div className="loginContainer">
      { isLoggedIn ?
        (
          <div>
            <h1>Hello John Doe!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p className="err">{error}</p>
            <input
            type="text"
            name="username"
            value={uname}
            placeholder="Username"
            onChange={(e)=> setUname(e.target.value)}
            />
            <input
            type="password"
            name="password"
            value={pass}
            placeholder="Password"
            onChange={(e)=> setPass(e.target.value)}
            />
            <button disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
          </form>
        )
      }
      </div>
    </>
  )
}

// pseudo API call to match username && password
async function login(uname, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (uname === 'john' && pass === '123') {
        resolve()
      } else {
        reject("Incorrect Username and Password")
      }
    }, 1000)
  })
}
