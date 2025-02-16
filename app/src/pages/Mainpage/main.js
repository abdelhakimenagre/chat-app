import React from 'react'
import Sidebar from '../../component/sideBare/sidebar'
import { Outlet } from 'react-router-dom';
import './main.css'

export default function Main() {
  return (
    <div className='main'>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}
