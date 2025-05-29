import { Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/footer/Footer';
import Home from './Component/Home/Home';

function App() {
 

  return (
   <>
   <Header/>
    <Routes>
  
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
     
    </Routes>
    <Footer/>
   </>
  )
}

export default App
