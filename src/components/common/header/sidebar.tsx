import React from 'react';
import './sidebar.css'
import {useAuth0} from '@auth0/auth0-react';
export const Sidebar = () => {

    const {isLoading, isAuthenticated, user, logout} = useAuth0();

    const userLogout = ()=> logout({returnTo: window.location.origin})
    return (
        <>
            <div className="sidebar">
          
            
               <div className="inner text-center ">
              
                <ul>
                     <li>
                        Prices
                    </li>

                    <li>
                        Principal
                    </li>
                    <li>
                        Frequent Quesions
                    </li>
                    
                </ul>

                <div className="">
                <button className="bg-white border-2 px-3 py-3 rounded-full mb-3">Customer suport</button>
                <br />
                        {
                            !isAuthenticated ? <button className=" px-5 py-3 rounded-full 
                            bg-btn-green ml-3 hover:bg-green-200">log in</button>
                            : <button className=" px-4 py-2 rounded-full 
                            bg-bg-dark ml-3 text-white hover:bg-green-200"
                            onClick={userLogout}
                            >log out</button>
                        }
                </div>
               </div>
            </div>
        </>
    )
}