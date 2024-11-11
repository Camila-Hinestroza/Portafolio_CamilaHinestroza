import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './pages/banner/Banner';
import Main from './pages/main/Main';
import Contacto from './pages/contacto/Contacto';
function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='main' element={<Main />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
