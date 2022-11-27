import React, { useContext, useEffect, useState } from "react"
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const[cocktails, setCocktails] = useState([])
    const[searchTerm, setSearchTerm] = useState('a')
    const[loading, setLoading] = useState(true)

    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()          
        const { drinks } = data
        if(drinks) {
            const newCocktails = drinks.map((item) => {
                const{idDrink, strDrink, strDrinkThumb, strGlass} = item
                return {
                    id:idDrink,
                    name:strDrink,
                    image:strDrinkThumb,
                    info:strGlass,
                }
            })
            setCocktails(newCocktails)
        }else{
            setCocktails([])
        }
        setLoading(false)
    },[searchTerm])

    useEffect(()=> {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return(
        <AppContext.Provider
            value={{ loading, cocktails, searchTerm, setSearchTerm}}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}