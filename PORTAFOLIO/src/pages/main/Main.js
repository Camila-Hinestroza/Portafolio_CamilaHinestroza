import TableMain from "./components/TableMain";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import LoaderAllItems from "../../services/LoaderAllItems";

/*const Main = () => {

    const params = useParams()
    const url = `http://localhost:3001/brakes`
    const id = params.id
    const [cleanDataDetail, setcleanDataDetail] = useState([])
      
    useEffect(() => {
        LoaderAllItems(setcleanDataDetail, url, id)
    }, [id, url, setcleanDataDetail])


    return (
        <section id="about" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <h2>Sobre mí</h2>
      <p>Información sobre el desarrollador...</p>
    </section>
    )
}

export default Main;*/

import React from 'react';

const Main = () => {
  return (
    <div id="main">
      <h2>Página Principal</h2>
    </div>
  );
};

export default Main;
