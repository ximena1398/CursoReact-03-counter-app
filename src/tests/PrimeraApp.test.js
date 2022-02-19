import React from 'react'
//import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp', () => {

    // test('debe mostrar el mensaje Hola, Soy Goku ', () => {
    //     const saludo = 'Hola, soy Goku';
    //     //const wrapper = render( <PrimeraApp saludo = {saludo}/> ); //se debe renderizar (se deden enviar por parámetros los datos requeridos)
    //     //wrapper con desestructuración
    //     const { getByText } = render( <PrimeraApp saludo = {saludo}/> );
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe mostrar <PrimetaApp/> correctamente ', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subtítulo enviado por props ', () => {
        const saludo = 'Hola, Soy Goku';
        const subTitulo = "Soy un subtitulo";

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text(); //find: buscar en el html el párrafo del subtitulo 'p'
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subTitulo);
    })

})
