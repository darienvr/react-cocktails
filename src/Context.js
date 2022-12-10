import React, { useContext, useEffect, useState } from "react"
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

const AppProvider = ({children}) => {

    const[cocktails, setCocktails] = useState([])
    const[searchTerm, setSearchTerm] = useState('a')
    const[loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(getStorageTheme());

    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try{
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
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    },[searchTerm])

    useEffect(()=> {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    const toggleTheme = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
        } else {
          setTheme('light-theme');
        }
    };
  
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return(
        <AppContext.Provider
            value={{ loading, cocktails, searchTerm, setSearchTerm, toggleTheme}}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}