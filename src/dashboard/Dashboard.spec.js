// Test away
import React from 'react';
import Dashboard from './Dashboard';
import { render } from "@testing-library/react";



test("<Dashboard/> snapshot", ()=>{
    const App = render(<Dashboard/>)
    expect(App).toMatchSnapshot();

});