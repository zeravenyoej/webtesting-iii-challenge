// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';
import { exportAllDeclaration } from '@babel/types';

describe('four tests', ()=>{
    test("display 'closed' if the close prop is true", ()=>{
        const { getByText } = render(<Display closed={true}/>)
        getByText(/closed/i)
    });

    test("display 'closed' if the close prop is false", ()=>{
        const { getByText } = render(<Display closed={false}/>)
        getByText(/open/i)
    });

    test("display 'locked' if the locked prop is true", ()=>{
        const { getByText } = render(<Display closed={true}/>)
        getByText(/locked/i)
    });

    test("display 'unlocked' if the locked prop is false", ()=>{
        const { findByText } = render(<Display closed={false}/>)
        findByText(/unlocked/i)
    });

    test("display 'red-led' if the closed prop is true", ()=>{
        const { getByText } = render(<Display closed={true}/>)
        const closed = getByText(/closed/i)
        expect(closed.classList).toContain('red-led')
    });

});