//useReducer
import React, { useReducer } from 'react'

const initialState = {
  uname: '',
  pass: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
}

function reducer(state, action){
  switch(action.type){
    case 'field':
      return {
        ...state,
        [action.fieldName]: action.payload
      }
    case 'login':
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    case 'success':
      return {
        ...state,
        uname: '',
        pass: '',
        isLoading: false,
        isLoggedIn: true
      }
    case 'error':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case 'logout':
      return{
        ...state,
        isLoggedIn: false,
      }
    default:
        return state
  }
}

export default function LoginUseReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { uname, pass, isLoading, error, isLoggedIn } = state

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: 'login'})
    await login(uname, pass)
      .then( () => dispatch({ type: 'success' }) )
      .catch( (err) => dispatch({ type: 'error', payload: err }) )
  }

  return(
    <>
      <div className="loginContainer">
      { isLoggedIn ?
        (
          <div>
            <h1>Hello John Doe!</h1>
            <button onClick={() => dispatch({ type: 'logout' })}>Log Out</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p className="err">{error}</p>
            <input
            type="text"
            value={uname}
            placeholder="Username"
            onChange={e => dispatch({
              type: 'field',
              fieldName: 'uname',
              payload: e.target.value
            })}
            />
            <input
            type="password"
            value={pass}
            placeholder="Password"
            onChange={e => dispatch({
              type: 'field',
              fieldName: 'pass',
              payload: e.target.value
            })}
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
