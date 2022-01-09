import React from 'react';
import './header.css'
const Header = (props:any) =>{
    return (

        <>

           <div className="container">
                <header className="flex justify-between">


                    <div className="logo">
                        <h1>Logo</h1>
                    </div>

                    <div className="middle">
                        <ul className="inline-flex">
                            <li>Principal</li>
                            <li  className="ml-5">Frequent Quesions</li>
                            <li className="ml-5">Prices</li>
                        </ul>
                    </div>

                   <div>
                   <nav>
                        <button>Customer suport</button>
                        <button className="bg-green ">Customer suport</button>
                    </nav>
                   </div>

            </header>
           </div>

        </>

    )
}
export default Header