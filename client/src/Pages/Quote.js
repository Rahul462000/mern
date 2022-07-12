import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";


const Quote = () => {
  const history = useNavigate()
  const [quote, setQuote] = useState('')
  const [tempQuote, setTempQuote] = useState()

  async function populateQuote() {
    const req = await fetch('http://localhost:5000/api/quote', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
    const data = await req.json()
    if (data.status === 'ok') {
      setQuote(data.quote)
    } else {
      alert(data.error)
    }
  }
  // / to verify that user is loggedin 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token')
        history.replace('/login')
      } else {
        populateQuote()
      }
    }

  }, [])

  async function updateQuote() {
    const req = await fetch('http://localhost:5000/api/quote', {
      method:"POST",
      headers: {
        'Content-Type':'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body:JSON.stringify({
        quote:tempQuote,
      })
    })
    const data = await req.json()
    if (data.status === 'ok') {
      setTempQuote('')
      setQuote(data.quote)
    } else {
      alert(data.error)
    }

  }

  return (
    <div>
      <h1>Your Quote: {quote || 'No qoute found'} </h1>
      <form onSubmit={updateQuote}>
        <input 
          type="text"
          placeholder='Quote'
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <input type="submit" value="Updated quote" />
  
      </form>
    </div>
  )
}

export default Quote
