//COMPONENTES (Se espera que regrese algo de HTML)
//Functional components
import React from 'react'
import PropTypes from 'prop-types'; //Tipos de las propiedades que recibirá el componente 

const PrimeraApp = ({saludo, subtitulo}) => { //desestructuración de elementos props: en este caso saludo que ya viene de index.js
    //const saludo = "Hola Mundo";

    return (
        <>
            <h1> {saludo} </h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;