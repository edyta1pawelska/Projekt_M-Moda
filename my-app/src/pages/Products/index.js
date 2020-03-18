import React, {useEffect, useState} from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Products=()=>{
    const [product, setProduct]=useState([])

    const fetchAllProd=()=>{
        fetch('http://localhost:3000/product')
            .then((res)=>res.json())
            .then(res => {setProduct(res)})

    }
    useEffect(()=>{
        fetch('http://localhost:3000/product')
            .then((res)=>res.json())
            .then((res)=>{setProduct(res)})

    }, []);

    const showProd=(db)=>{
        fetch(`http://localhost:3000/product/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(db)
        }).then(
            ()=>{fetchAllProd()}
        )
        }

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
                        <ul>
                            {product.map((el,ind)=> <li key={ind}>{el}</li>)}
                        </ul>

                        {/*<div>Bluzki</div>*/}
                        {/*<div>Kardigany</div>*/}
                        {/*<div>Sukienki</div>*/}
                        {/*<div>Płaszcze</div>*/}
                        {/*<div>Tuniki</div>*/}
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