import React, {useState} from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => { //desestructuración de elementos props: en este caso saludo que ya viene de index.js
    const [counter, setCounter] = useState(value);

    //Evento botón
    //handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1)
    }

    const handleReset = () => {
        setCounter(value);
        //setCounter((c) => c + 1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;