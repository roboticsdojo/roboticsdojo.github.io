import React from 'react'
import { render } from 'react-dom'
import Teams from './components/Teams'
import Teams2023 from './components/Teams2023'
import App from './components/Navbar'
import Footer from './components/footer'
 
const teamsDOM = document.getElementById('teams')
const teams2023DOM = document.getElementById('teams2023')
const navbarDOM = document.getElementById('navbar')

if (teamsDOM !== null) render(<Teams />, teamsDOM)
if (teams2023DOM !== null) render(<Teams2023 />, teams2023DOM)
if (navbarDOM !== null) render(<App />, navbarDOM)


const footerDOM = document.getElementById('footer')
if (footerDOM !== null) render(<Footer />, footerDOM)
