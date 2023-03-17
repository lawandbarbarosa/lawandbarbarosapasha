import Home from './components/Home';
import Contact from "./components/Contact"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <main>
 <BrowserRouter>
 <Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
 </Routes>
 </BrowserRouter>
    </main>
  );
}

export default App;
