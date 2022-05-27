import React from 'react'
import "../styles/Boton.css"

const Boton = ({ texto,esBotonDeClick,handleClick }) => {
  return (
    <button
    className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={handleClick}
    >
      {texto}
    </button>
  )
}

export default Boton