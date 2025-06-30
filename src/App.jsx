import './App.css';
import HomePage from './pages/HomePage';
import Home from './components/Home';
// import SimpleForm from './components/SimpleForm';
import NavBar from './components/NavBar';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="#skills" element={<Skills />} />
        {/* <Route path="/form" element={<SimpleForm />} /> */}
        <Route path="#portfolio" element={<Portfolio />} />
        <Route path="#contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;