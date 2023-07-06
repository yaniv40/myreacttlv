
import './App.css';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import About from './components/About';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
