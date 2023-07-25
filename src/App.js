import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
		<Router>
      <div className="App">
      <div className="NavBar">
          <NavBar/>
       </div>

        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
