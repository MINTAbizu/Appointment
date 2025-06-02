import { Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/footer/Footer';
// import Home from './Component/Home/Home';
// import './Component/css/bootstrap/bootstrap-grid.css'
// import './Component/styles/style.css'  
 




// import './Component/css/jquery.timepicker.css'  
// import './Component/css/open-iconic-bootstrap.min.css' 

// import './Component/css/css/bootstrap-reboot.css' 

// import Doctor from './Component/doctors/Doctor';


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
