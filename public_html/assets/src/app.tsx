import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
 
const headerDOM = document.getElementById('header')
if (headerDOM !== null) render(<Header />, headerDOM)
 
const footerDOM = document.getElementById('footer')
if (footerDOM !== null) render(<Footer />, footerDOM)