// pages/Banner/Banner.js
import React from 'react';
import BannerLogica from './components/BannerLogica';
import '../../styles/Banner.css'; 
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
  
    const handleScrollToMain = () => {
      navigate('/main'); // Redirigir a Main después del efecto
    };
  
    return (
      <BannerLogica onScroll={handleScrollToMain} />
    );
  };
  
  export default Banner;