import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import './../Layout/Layout.scss'
import Home from './../Home';

// import Footer from './'
export default function Layout() {

  const styles = {
    height: 'calc(100vh - 75px)',
  }
  return (
<>
<div className='h-full'>
  <Header></Header>
  <div className='' style={{height : 'calc(100vh-75px)',overflowY: 'auto'}}>
    <Outlet></Outlet>
  </div>
</div>
</>
)
}
