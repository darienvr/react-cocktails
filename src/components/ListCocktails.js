import React from 'react'
import '../styles/Home.css'
import Cocktail from './Cocktail';
import Pagination from './Pagination';
import { useState } from 'react';
import { useGlobalContext } from '../Context';

const ListCocktails = () => {
    const { cocktails, loading } = useGlobalContext()

    const [ paginaActual, setPaginaActual] = useState(1);

    let TOTAL_PAGINA = 6;
    
    let datos = cocktails

    datos = datos.slice(
        (paginaActual - 1) * TOTAL_PAGINA,
        paginaActual * TOTAL_PAGINA
    );

    React.useEffect(()=> {
        setPaginaActual(1)
    }, [cocktails])

    if (loading) {
        return <div className='loading'>CARGANDO...</div>
      }
    if (datos.length < 1) {
        return (
          <h2 className='loading'>
            No hay coincidencias 
          </h2>
        )
    }

    return(
        <>
            <div className='contenedor-lista'>
                <div className='title-list'>
                    <h1>CÓCTELES</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                            {datos.map((item) => {
                                return (
                                <div key={item.id} className='col-sm-12 col-md-6 col-lg-4 d-flex'>
                                    <Cocktail {...item}/>
                                </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <Pagination pagina={paginaActual} onchange={(pagina)=>setPaginaActual(pagina)}/>
        </>
    )
}

export default ListCocktails;