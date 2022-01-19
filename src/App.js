import { GlobalStyle } from "./GlobalStyles";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/MyWebsite" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      <GlobalStyle />
    </div>
  );
}

export default App;
