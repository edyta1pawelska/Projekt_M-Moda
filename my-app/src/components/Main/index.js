import React from 'react';


const Main=()=>{
    return(
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
    )
}
export default Main;