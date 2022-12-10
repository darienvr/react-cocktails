import React, {useState} from "react";
import { useParams, Link } from 'react-router-dom'
import '../styles/SingleCocktail.css'

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

const SingleCocktail = () => {

    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)

    React.useEffect(()=>{
        setLoading(true)
        async function getCocktail(){
            const response = await fetch(`${url}${id}`)
            const data = await response.json()
            if(data.drinks){
                const{
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strCategory,
                    strGlass,
                    strInstructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = data.drinks[0]
                const ingredientes = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                ]
                const newCocktail = {
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    category: strCategory,
                    glass: strGlass,
                    instructions: strInstructions,
                    ingredientes,
                }
                setCocktail(newCocktail)
            }else{
                setCocktail(null)
            }
            setLoading(false)
        }
        getCocktail()
    }, [id])

    if (loading) {
        return <div className='loading'>LOADING...</div>
      }

    if(!cocktail){
        return <h2>NO EXISTEN COCTELES</h2>
    }else{
        const{
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredientes,
        } = cocktail
    return(
        <section className="single-cocktail">
            <h2 className="title-single-cocktail">{name}</h2>
            <img className="img-single-cocktail" src={image} alt={name}></img>
            <div className="info-single-cocktail">
                <p>
                <span className='drink-data'>Nombre :</span> {name}
                </p>
                <p>
                <span className='drink-data'>Categoria :</span> {category}
                </p>
                <p>
                <span className='drink-data'>Informacion :</span> {info}
                </p>
                <p>
                <span className='drink-data'>Tipo :</span> {glass}
                </p>
                <p>
                <span className='drink-data'>Instrucciones :</span> {instructions}
                </p>
                <p>
                <span className='drink-data'>Ingredientes :</span>
                {ingredientes.map((item, index) => {
                    return item ? <span className="ingredientes" key={index}> {item}</span> : null
                })}
                </p>
            </div>
            <Link to='/' type="button" className="btn btn-success">
                Volver
            </Link>
        </section>
    )
    }
}

export default SingleCocktail;