import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import './../Layout/Layout.scss'
import Home from './../Home';

// import Footer from './'
export default function Layout() {

  return (
<>
<div className='h-full'>
  <Header></Header>
  <div className='content'>
    <Outlet></Outlet>
  </div>
</div>
</>
)
}
