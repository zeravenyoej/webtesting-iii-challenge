// Test away!
import React from 'react';
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';
import { render, fireEvent } from '@testing-library/react';
import { exportAllDeclaration } from '@babel/types';


describe('Controls tests', ()=>{

    test('does CONTROLS render', ()=>{
        render(<Controls/>)
    })

    test("if 'locked' prop is true, 'unlock gate' renders", ()=>{
        const { getByText } = render(<Controls locked={true}/>)
        getByText(/unlock gate/i)
    })

    test("buttons' text changes when clicked", ()=>{

        const { getByText } = render(<Dashboard />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);

        fireEvent.click(closeButton);
        getByText(/open gate/i);
        fireEvent.click(lockButton);
        getByText(/unlock gate/i);
    })
});
