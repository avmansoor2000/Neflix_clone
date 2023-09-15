import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner'
import RowPost from './Components/Container_1/RowPost'
import Container_2 from './Components/Container_2/RowPost'
import Container_3 from './Components/Container_3/RowPost'
import Container_4 from './Components/Container_4/RowPost'
import Footer from './Components/Footer/footer'

function App() {

  
  return (
    <div className='App'>
      <Banner/>
      <RowPost/>
      <Container_2/>
      <Container_3/>
      <Container_4/>
      <Footer/>
     
      
      </div>
  )
}

export default App