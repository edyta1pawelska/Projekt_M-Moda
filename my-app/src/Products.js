import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
const Products=()=>{
    return (
        <>
            <Header/>
            <>
                <main>
                    <div>
                        <ul>
                            <li> <a href= "#">Bluzki</a> </li>
                            <li> <a href= "#">Kardigany</a> </li>
                            <li> <a href= "#">Sukienki</a> </li>
                            <li> <a href= "#">Płaszcze</a> </li>
                            <li> <a href= "#">Tuniki</a> </li>

                        </ul>
                    </div>
                    <div>
                        <div>Bluzki</div>
                        <div>Kardigany</div>
                        <div>Sukienki</div>
                        <div>Płaszcze</div>
                        <div>Tuniki</div>
                    </div>
                    <div>
                        <div>
                            <h3>Newsletter</h3>
                            <p>Zapisz się do newslettera i otrzymaj 10% zniżki na kolejne zakupy</p>
                            <label>Twój adres e-mail
                                <input type="e-mail"/>
                            </label>
                            <div>
                                <a href="#">Informacje na temat przetwarzania danych osobowych</a>
                            </div>
                        </div>
                    </div>
                </main>
            </>
            <Footer/>
        </>
    )
}
export default Products;