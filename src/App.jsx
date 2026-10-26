import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



const App = () => {
    const [menuPizzas, setMenuPizzas] = useState([
        { id: 1, name: 'Italian', price: '8,35' },
        { id: 2, name: 'Venecia', price: '7,35' },
        { id: 3, name: 'Meat', price: '9,35' },
        { id: 4, name: 'Cheese', price: '8,35' },
    ]);

    return (
        <div>
            <Header />
            <Main pizzas={menuPizzas} />
            <Footer />
        </div>
    );
};

export default App;