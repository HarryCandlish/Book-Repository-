
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
