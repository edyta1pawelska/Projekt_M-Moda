import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
const Basket=()=>{
    return (
        <>
            <Header/>
            <div>
                <div>
                    <div>foto</div>
                    <div>
                        <h3>Typ</h3>
                        <p>krótki opis</p>
                        <button>usuń produkt</button>
                    </div>
                    <div>
                        <p>Ilość</p>
                        <p>Cena</p>
                        <p>Wartość</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Wartość koszyka</h3>
                        <p>Rabat</p>
                        <p>RAZEM</p>
                    </div>
                </div>
                <div>
                    <button>Kontynuuj zakupy</button>
                    <button>Opróżnij koszyk</button>
                    <button>Złóż zamówienie</button>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Basket;


