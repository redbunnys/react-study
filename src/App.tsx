import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom';
import {appRoutes} from '@/routes/index'

function App() {
  const element = useRoutes(appRoutes);

  return (
    <>
        <React.Fragment>{element}</React.Fragment>;
    </>
  )
}

export default App
