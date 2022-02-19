import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect(user).toEqual(userTest);
    })

    //getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto ', () => {
        const nombre = 'Ximena';

        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })


})
