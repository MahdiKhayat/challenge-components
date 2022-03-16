import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import Body from './components/body/body';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (
    <div>
      <NavBar/>
      <Body/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
