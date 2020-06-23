import React from 'react';
import './App.css';
import Jobs from './Jobs';


const mockjobs = [
    { title: 'SDE 1', company: 'Google' },
    { title: 'SDE 1', company: 'Apple' },
    { title: 'SDE 1', company: 'Microsoft' }
]

function App() {
    return (
        <div className="App">
            <Jobs jobs={mockjobs} />
        </div>
    );
}

export default App;
