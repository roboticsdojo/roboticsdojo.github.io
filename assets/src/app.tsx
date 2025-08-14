import React from 'react'
import { render } from 'react-dom'
import Teams from './components/Teams'
import Teams2023 from './components/Teams2023'
import Teams2024 from './components/Teams2024'
import Teams2025 from './components/Teams2025'
import Members from './components/Members'
import App from './components/Navbar'
import Footer from './components/footer'
 
const teamsDOM = document.getElementById('teams')
const teams2023DOM = document.getElementById('teams2023')
const teams2024DOM = document.getElementById('teams2024')
const teams2025DOM = document.getElementById('teams2025')
const navbarDOM = document.getElementById('navbar')
const membersDOM = document.getElementById('members')

if (teamsDOM !== null) render(<Teams />, teamsDOM)
if (teams2023DOM !== null) render(<Teams2023 />, teams2023DOM)
if (teams2024DOM !== null) render(<Teams2024 />, teams2024DOM)
if (teams2025DOM !== null) render(<Teams2025 />, teams2024DOM)
if (membersDOM !== null) render(<Members />, membersDOM)
if (navbarDOM !== null) render(<App />, navbarDOM)

const footerDOM = document.getElementById('footer')
if (footerDOM !== null) render(<Footer />, footerDOM)
