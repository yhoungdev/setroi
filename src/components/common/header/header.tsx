import React, {useState} from 'react';
import './header.css'
import Setroi from '../../../assets/images/images/setroi.svg'
import {FaBars} from 'react-icons/fa'
import {useAuth0} from '@auth0/auth0-react'
import {Sidebar} from './sidebar'


const Header = (props:any) =>{

    //states details
    const [open, setOpen] = useState(0);

    //open side bar state

   

    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    const userLogout = () => logout({returnTo: window.location.origin})
    return (

        <>

         <div className="side"
            style={{
                width: `${open}%`
            }}
            >
            <div>
                 <h1 className='text-white px-5 float-right close' 
                 onClick={()=>{
                        setOpen(0)
                 }}

                 
                 >&times;</h1>
            </div>
             <Sidebar/>
         </div>
      

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
                            bg-bg-dark ml-3 text-white hover:bg-green-200"
                            onClick={userLogout}
                            >log out</button>
                        }
                    </nav>

                

     

                    <div className="menu">
                        <h1
                            onClick={()=>{setOpen(100)}}
                        ><FaBars/></h1>
                    </div>
                   </div>

            </header>
           </div>

        </>

    )
}
export default Header