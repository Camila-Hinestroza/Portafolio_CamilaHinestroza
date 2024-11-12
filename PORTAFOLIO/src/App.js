import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './pages/banner/Banner';
import Main from './pages/main/Main';
import Central from './pages/central/Central';
import Navbar from './pages/central/components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='main' element={<Main />}/>
          <Route path="/central" element={<Central />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
