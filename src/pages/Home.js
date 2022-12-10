import { useGlobalContext } from '../Context';
import Form from '../components/Form';
import ListCocktails from '../components/ListCocktails'
import { MdOutlineDarkMode } from "react-icons/md";

export default function Home() {

  const { toggleTheme } = useGlobalContext()

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