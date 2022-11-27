import React from 'react'
import { useGlobalContext } from '../Context';
import '../styles/Home.css'

const Form = () => {

    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className='contenedor-form'>
            <h2>Busque su cóctel favorito :P</h2>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input 
                    className="form-control" 
                    type="text" 
                    ref={searchValue}
                    placeholder="Search" 
                    aria-label="Search" 
                    onChange={searchCocktail}
                />
            </form>
        </div>
    )
}

export default Form;