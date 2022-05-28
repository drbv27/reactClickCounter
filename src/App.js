import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import Logo from './images/freecodecamp-logo.png'
import {useState} from "react"

function App() {

  const [numClicks,setNumClicks] = useState(0);

  const contarClick = ()=> {
    setNumClicks(numClicks+1);
  }
  const reiniciarContador = ()=> {
    setNumClicks(0);
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
          numClicks={numClicks}
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
