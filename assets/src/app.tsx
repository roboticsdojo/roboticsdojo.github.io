import React from 'react'
import { render } from 'react-dom'
import Teams from './components/Teams'
import Teams2023 from './components/Teams2023'
 
const teamsDOM = document.getElementById('teams')
const teams2023DOM = document.getElementById('teams2023')

if (teamsDOM !== null) render(<Teams />, teamsDOM)
if (teams2023DOM !== null) render(<Teams2023 />, teams2023DOM)