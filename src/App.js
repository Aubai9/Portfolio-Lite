
import './App.css';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Home/Header/Header';
import HomePage from './Components/HomePages/HomePage.JSX';
import Home from './Components/Home/Header/homes/Home';
import Branding from './Components/Home/Branding';
import About from './Components/Home/About/About';
import Services from './Components/Home/Services/Services';
import Wrapper from './Components/Home/Services/Wrapper';
import Skills from './Components/Home/Services/Skills';
import WrapperOne from './Components/Home/Services/WrapperOne';
import Blog from './Components/blog/Blog';
import Footer from './Components/Footer';
function App() {
  return (
    <div>

      <Header>
      </Header>
      <Home></Home>
      <Branding></Branding>
      <About></About>
      <Services></Services>
      <Wrapper></Wrapper>
      <Skills></Skills>
      <WrapperOne></WrapperOne>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
