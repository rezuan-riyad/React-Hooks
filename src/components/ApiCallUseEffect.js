import React, { useState, useEffect } from 'react';

function ApiCallUseEffect() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( async() => {
    setLoading(true)
    const person = await fetch("https://api.randomuser.me/")
      .then( res => res.json())
      .then( data => data.results)
    const name = person[0].name.first
    setData(name)
    setLoading(false)
  },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      { loading ? <p>Loading ...</p> : data && <h1>{data}</h1> }
    </div>
  );
}

export default ApiCallUseEffect
