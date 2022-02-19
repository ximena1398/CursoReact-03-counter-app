import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas de funciones de héroes', () => {
    test('Debe retornar un héroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar undefind si héroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })

    test('debe retornar un arreglo con los héroes de DC ', () => {
        const owner = 'DC';
        const heroeDC = getHeroesByOwner(owner);
        const heroeData = heroes.filter( h => h.owner === owner);
        expect(heroeDC).toEqual(heroeData);
    })
    
    test('debe retornar un arreglo con los héroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroeMarvel = getHeroesByOwner(owner);
        const heroeData = heroes.filter( h => h.owner === owner);
        expect(heroeMarvel).toEqual(heroeData);

        //Para evaluar la cantidad de objetos que tiene el objeto (contiene 2)
        //expect(heroeMarvel.length).toBe(2);
    })
    
    
})
