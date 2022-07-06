import './App.css';
// BrowserRouter, Route, Routes = sont des composants bootstrap
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Routes>
        {/* path = l'adresse dans la barre et {< ici c'est la page que l'on veut afficher/>} */}
        <Route path='/' element={<HomeScreen />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
