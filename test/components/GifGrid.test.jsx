import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock("../../src/hooks/useFetchGif");

describe('test en <GifGrid />', () => { 

    const category = ' ';
    
    test('Debe mostrar inicialmente el loading ', () => {

        useFetchGif.mockReturnValue({
            imagenes: [],
            loading: true
        })

        render( <GifGrid category={category} />)
        // screen.debug();

        expect( screen.getByText( 'Cargando...' ).innerHTML ).toBe('Cargando...')
        
        // expect( screen.getByText( category ).innerHTML ).toBe(category)

        // expect( screen.getByText(category))
    })

    test('Debe mostrar items, cuando se cargan las imagnes en ueFetchGif', () => {

        useFetchGif.mockReturnValue({
            imagenes: [
                {id: 'ABC123', title:'Saitama', url:'https://onepunch/saitama.jpg'},
                {id: 'ABC1234', title:'Garou', url:'https://onepunch/garou.jpg'}
            ], 
            loading: false, 
        })

        render( <GifGrid category={category}/>)
        screen.debug();

        expect( screen.getAllByRole('img').length ).toBe(2)
    }) 

 })