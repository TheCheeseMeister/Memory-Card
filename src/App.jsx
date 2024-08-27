import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Cards from './components/Cards';

function App() {
  /* Create array of [img, pokemon], for each, fetch and set image url */

  return (
    <>
      <Box sx={{
        textAlign: 'center',
        margin: 4,
      }}>
        <Typography variant='h2'>Pokemon Memory Card</Typography>
      </Box>
      
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
        <Cards />
      </Container>
    </>
  )
}

export default App
