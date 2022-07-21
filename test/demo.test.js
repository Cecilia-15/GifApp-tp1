const { getUser, getSaludo } = require("./functions"); // require necesario para pasar, si lo cambiamos a es6 no sucederá 

describe('test demo', () => {
    test('test 1 - Numero igual', () => {
        expect( 1==1 ).toBe(true)
    } )

    test('test 2 - Mensaje igual', () => {
        // 1.Arrange / Inicio
        const message1 = 'Hola';

        // 2. Act / Acciones
        const message2 = message1.trim()

        // 3. Assert / Observando el comportamiento esperado 
        expect(message1).toBe(message2);  
    } )

    test('test 3 - getSaludo', () => {

        const nombre = 'Emma';

        const message = getSaludo(nombre)

        expect(message).toBe(`Hola ${nombre}`)
    })

    test('test 4 - getUser', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'Mayo1998'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
    })
 })