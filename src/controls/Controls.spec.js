// Test away!
import React from 'react';
import Controls from './Controls';
import { render } from '@testing-library/react';


describe('Controls tests', ()=>{

    test('does CONTROLS render', ()=>{
        render(<Controls/>)
    })

    test("if 'locked' prop is true, 'unlock gate' renders", ()=>{
        const { getByText } = render(<Controls locked={true}/>)
        getByText(/unlock gate/i)
    })

});
