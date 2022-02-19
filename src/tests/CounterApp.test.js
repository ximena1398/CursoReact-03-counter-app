import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow(<CounterApp value = {10}/>);

    //se ejecuta antes de cada una de las pruebas
    beforeEach(() => {
        wrapper = shallow(<CounterApp value = {10}/>);
    });

    test('debe mostrar counterApp correctamente', () => {
        //const wrapper = shallow(<CounterApp value = {10}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp value = { 100 }/>);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    });

    //Simular eventos Click
    test('debe incrementar el botón +1', () => { 
        //const wrapper = shallow(<CounterApp value = {10}/>);
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
     });

     test('debe decrementar el botón -1', () => { 
        //const wrapper = shallow(<CounterApp value = {10}/>);
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('9');
     });

     test('debe colocar el valor por defecto con el botón reset', () => { 
        const wrapper = shallow( <CounterApp value = { 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
      });
});