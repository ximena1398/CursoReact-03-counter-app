import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en 07-deses-arr', () => {
    test('Debe retornar un String y un number ', () => {
        const [letras, numeros] = retornaArreglo();

        //expect(arr).toEqual( ['ABC', 123] );
        
        //String
        expect(letras).toBe('ABC');
        //test de tipo de dato
        expect(typeof letras).toBe('string');

        //Number
        expect(numeros).toBe(123);
        //test de tipo de dato
        expect(typeof numeros).toBe('number');
    })
    
})
