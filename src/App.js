import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router basename='/react-cocktails'>
      <Navbar />
      <Routes>
        <Route exact path='/react-cocktails' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
