import { GifApp } from "../../src/GifApp";
import { fireEvent, render, screen } from "@testing-library/react";


describe('Test en <GifApp />', () => { 

    const firstSearch = 'Got';
    const secondSearch = 'Cats';
    let btnDeleteCategory; 
    let btnReset;
    let btnShow;
    let input;
    let form;

    beforeEach(() => {
        render(<GifApp />);
        
        input = screen.getByRole('textbox');
        form = screen.getByRole('form');
        // btnReset = screen.getByRole('button', {name: 'btnReset'});
        // btnDeleteCategory = screen.getByRole('button', {name: 'btnDeleteCategory'});
        // btnShow = screen.getByRole('button', {name: 'btnShow'})
        
        fireEvent.change(input, { target: {value: firstSearch} });
        fireEvent.submit(form);
        fireEvent.change(input, { target: {value: secondSearch} });
        fireEvent.submit(form);

    })

    test('should delete category', () => {

        btnDeleteCategory = screen.getAllByRole('button', {name: 'Eliminar'});
        
        fireEvent.click(btnDeleteCategory[0]);
        
        let categories = screen.getAllByRole("heading");

        expect(categories.length).toBe(3)
    })

    test('should reset', () => {
        btnReset = screen.getByRole('button', {name: 'Reset'});

        fireEvent.click(btnReset);

        let elements = screen.getAllByRole("heading");

        expect(elements.length).toBe(1)
    })
    
    test('should hide/show', () =>{
        btnShow = screen.getAllByRole('button', {name: 'Ocultar'});

        fireEvent.click(btnShow[0]);
        let elements = screen.getByRole("heading", {level: 1});

        const style = getComputedStyle(elements);

        expect(style.visibility).toBe('hidden')


    })
})