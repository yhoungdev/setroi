import React from "react";
import './footer.css'
import apple_dark from '../../../assets/images/images/apple-dark.svg'
import android_dark from '../../../assets/images/images/android-dark.svg'
import Cards from '../../../assets/images/images/cards.svg'
const Footer = ()=>{
    return (
        <>
            <footer className='bg-bg-footer'>

                <div className="container">

                    <div className="flex justify-between sm:flex-col">

                        <div className="logo">

                            <p className="text-white">
                            Get to the top of 
                            Google by appearing in 
                            more than 100 digital newspaper.
                            </p>

                            <div className='my-4'>
                                <img src={Cards} alt="" />
                            </div>

                        </div>

                        <div className="links">
                            <h5>Website</h5>

                            <ul className='list-none'>
                                <li>Home</li>
                                <li>ABout</li>
                                <li>FAQ</li>
                            </ul>
                        </div>



                        {/* contacts */}
                        <div className="links">
                            <h5>Contact</h5>

                            <ul className='list-none'>
                                <li>Home</li>
                                <li>ABout</li>
                                <li>FAQ</li>
                            </ul>

                            <span className='flex'>
                                <img src={android_dark} alt="" />
                                <img src={apple_dark} alt="" className='ml-2'/>
                            </span>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;