import React from 'react';
import "./style.scss";


const Header=()=>{
    return(
        <>
            <div className={'navigation'}>
                <nav>
                    <ul className={'header__navigation'}>
                        <li>
                            <label>
                                <input type="text"/>
                                <i className="fas fa-search"> Szukaj </i>

                                 </label></li>
                        <li>  <a href="#"> <div className={'logo'}> </div> </a>  </li>
                        <li><a href= "http://localhost:3000/#/products" ><i className="fas fa-shopping-cart">Koszyk</i></a></li>
                    </ul>
                </nav>

            </div>
        </>

    )
};
export default Header;