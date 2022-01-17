import React, { useEffect, useState } from 'react'
import Navbar from './Components/Layouts/Navbar'
import Header from './Components/Pages/Header'
import Products from './Components/Pages/Products'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import { css } from '@emotion/react'
import {PacmanLoader} from 'react-spinners'

const App = () => {

  const[loading, setLoading] = useState(false);

  const override = css`
  display:block;
  border-color:red;
  margin-top: 50%;
  margin-left: 30%;
  `;

  useEffect(()=>{ 
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000);
  },[])

  return (
    <div className='App'>
      {
        loading ? <PacmanLoader color={'#3d2514'} loading={loading} css={override} size={40}/>
        :
        <>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
        </>
      }
    </div>
  )
}

export default App
