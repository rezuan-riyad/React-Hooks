import React, { useState } from 'react'
import {useForm} from './useForm'

export default function SignUp(){
  const [values, handleChange] = useForm({ name: '', email: '', pass: ''})
  return(
    <>
      <form>
        <input type="text" name="name" value={values.name} placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" value={values.email} placeholder="Email" onChange={handleChange} />
        <input type="password" name="pass" value={values.pass} placeholder="Password" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  )
}
