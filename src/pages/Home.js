import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import ListCocktails from '../components/ListCocktails'
import { MdOutlineDarkMode } from "react-icons/md";

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

export default function Home() {

  const [theme, setTheme] = useState(getStorageTheme());

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

  return (
    <main>
        <div className='contenedor-icono'>
          <MdOutlineDarkMode className='icono-dark' onClick={toggleTheme}></MdOutlineDarkMode>
        </div>
        <Form />
        <ListCocktails />
    </main>
  )
}