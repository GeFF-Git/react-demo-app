import React from 'react'
import { Link } from 'react-router-dom'
// import Contact from './Contact'

export default function Home() {
  return (
    <>
    <div>Home</div>
    <button className='btn btn-primary text-3xl font-bold underline'> <Link to='/contact'>Contact</Link></button>
    </>
  )
}
