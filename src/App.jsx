import  {Header } from "./components/header/Header.jsx";
import  {Principal}  from "./components/secciones/principal/Principal.jsx";
import  {Portfolio}  from "./components/secciones/portfolio/Portfolio.jsx";
import "./App.css";
import { Servicios}  from "./components/secciones/servicios/Servicios.jsx";
import  {Contacto } from "./components/secciones/contacto/Contacto.jsx";
import {Footer} from "./components/footer/Footer.jsx";



function App() {
  return (
    <>
      <Header />
      <Principal />
      <Servicios />
      <Portfolio />
      <Contacto />
      <Footer/>
    </>
  );
}

export default App;
