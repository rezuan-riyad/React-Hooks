import React, { useState, useEffect, useRef} from 'react'

export default function AbortApiCall(){
  const [input, setInput] = useState('')
  const [cities, setCities] = useState([])
  const initRender = useRef(false)

  useEffect(()=>{
    let controller = new AbortController()
    let signal = controller.signal
    if (initRender.current && input !== '') {
      fetch(`http://localhost:5000/find/${input}`, { signal : signal })
        .then( res => res.json())
        .then( data => {
          console.log(data)
          setCities(data)
        })
        .catch( err => console.log(err))
    } else {
      initRender.current = true
    }
    return () => {
      controller.abort()
    }
  },[input])
  return(
    <>
      <input type="text" value={input} onChange={ e => setInput(e.target.value) }/>
      {
        cities.map( (city, i) => {
          return <p key={i}>{city.city}</p>
        })
      }
    </>
  )
}
