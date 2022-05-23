import './App.css';
import Logo from './images/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={Logo}
        alt='logo de freecodecamp'
        />
      </div>
    </div>
  );
}

export default App;
