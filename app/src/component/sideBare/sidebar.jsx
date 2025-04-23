import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom';
import { GrSend } from "react-icons/gr";
import { PiTrashSimple } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { LuUserCog } from "react-icons/lu";
import { BsPeople } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <nav className='sidebar'>
      
      <div className='Sidebar-Top'>
      <div className='user'>
            <div className='image'>KJ</div>
            <div className='name'>
              <div className='status'></div>
            </div>
      </div>
<NavLink className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} to="/" ><GrSend size={20} /></NavLink>
<NavLink  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} to="/Corbeille" >< PiTrashSimple size={20} /></NavLink>
<NavLink  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} to="/MonCompt" ><LuUserCog size={20}/></NavLink>
<NavLink  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} to="/Utilisateurs" ><BsPeople size={20} /></NavLink>
</div>
<div className='section-bottom'>
          <button className="parameter"><RiSettingsLine size={20}/></button>
          <button className="logout"><IoIosLogOut size={20} /></button>
</div>

    </nav>
  )
}
