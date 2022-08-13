import React from 'react'
import { render } from 'react-dom'
import Teams from './components/Teams'
 
const teamsDOM = document.getElementById('teams')
if (teamsDOM !== null) render(<Teams />, teamsDOM)