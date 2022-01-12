import React from 'react';
import './header.css'
import Setroi from '../../../assets/images/images/setroi.svg'
import {FaBars} from 'react-icons/fa'
import {useAuth0} from '@auth0/auth0-react'


const Header = (props:any) =>{

    const {user, isAuthenticated} = useAuth0()
    return (

        <>

           <div className="container">
                <header className="flex justify-between">


                    <div className="logo">
                        <img src={Setroi} alt="" />
                    </div>

                    <div className="middle sm-hide">
                        <ul className="inline-flex">
                            <li>Principal</li>
                            <li  className="ml-5">Frequent Quesions</li>
                            <li className="ml-5">Prices</li>
                        </ul>
                    </div>

                   <div>
                   <nav className="sm-hide">
                        <button className="bg-white border-2 px-3 py-2 rounded-full">Customer suport</button>
                        {
                            !isAuthenticated ? <button className=" px-4 py-2 rounded-full 
                            bg-btn-green ml-3 hover:bg-green-200">log in</button>
                            : <button className=" px-4 py-2 rounded-full 
                            bg-bg-dark ml-3 text-white hover:bg-green-200">log out</button>
                        }
                    </nav>

     

                    <div className="menu">
                        <h1><FaBars/></h1>
                    </div>
                   </div>

            </header>
           </div>

        </>

    )
}
export default Header