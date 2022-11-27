import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, info, id }) => {
    return(
        <>
            <section className='cocktail'> 
                <img className="imagen-coctel" src={image} alt={name}/>
                <div className='coctel-texto'>
                    <h3>{name}</h3>
                    <p>{info}</p>    
                    <Link to={`/cocktail/${id}`} type="button" className="btn btn-success">
                        Detalles
                    </Link>
                </div>
            </section>
        </>
    )
}


export default Cocktail;