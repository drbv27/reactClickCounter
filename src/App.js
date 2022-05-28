import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import Logo from './images/freecodecamp-logo.png'

function App() {

  const contarClick = ()=> {
    console.log("Diste click");
  }
  const reiniciarContador = ()=> {
    console.log("Reiniciando");
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={Logo}
        alt='logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks="5"
        />
        <Boton 
        texto="Click"
        esBotonDeClick={true}
        handleClick={contarClick}
        />
        <Boton 
        texto="Reset"
        esBotonDeClick={false}
        handleClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
