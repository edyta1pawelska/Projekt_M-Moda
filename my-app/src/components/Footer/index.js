import React from 'react';
import "./style.scss";


const Footer=()=>{
    return(
       <>
           <div className={"footer"}>
               <ul className={'footer__ul'}>
                   <li> <a href="#">Blog</a></li>
                   <li> <a href="#">Informacje o firmie</a></li>
                   <li> <a href="#">Kontakt</a></li>
                   <li> <a href="#">RODO</a></li>
               </ul>
               <div className={'footer__insta'}>
                   <div className={'social'}><i class="fab fa-instagram-square"></i></div>
                   <div className={'social'}><i class="fab fa-facebook-square"></i></div>
                   <div className={'social'}><i class="fab fa-pinterest-square"></i></div>
               </div>
           </div>
       </>
    )
}
export default Footer;