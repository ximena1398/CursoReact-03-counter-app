import react from 'react';
import reactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');

reactDOM.render(<CounterApp value = {10} />, divRoot);