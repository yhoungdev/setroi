import React from 'react';
import './index.css'
import Header from '../../components/common/header/header';
import {Customers, Inter} from '../../components/tiny/info';
import About from '../../components/tiny/about';
import Ads from '../../components/tiny/ads';
import How from '../../components/tiny/how';
import {useAuth0} from '@auth0/auth0-react'
import Footer from '../../components/common/footer/footer';
import { Story, Team } from '../../components/tiny/team';
import Loader from './loader'

export const Child = () => {

    const {loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0()
    const logIn = () => loginWithRedirect();
    return (
        
        <>

     
              <div>
                    <Header/>
           <section className="container  ">
              <div className="note  ">

     
                        <h1 >Appears in <span className='text-btn-green'>newspapers</span> and position in Google</h1>

                        <p>
                            Foget the old positioning strategies that do not work for your business and start to position in the first search results appearing in more than 100 digital newspaper.
                        </p>

                        {
                            !isAuthenticated ? <button className='pt-3 pb-3 pl-4 pr-4 bg-btn-green  rounded-full
                            mt-5 border-none outline-0'
                            onClick={ logIn}
                            >
                               Lets get started
                           </button> :

                            <div className="div">
                                
                                <button className='pt-3 pb-3 pl-4 pr-4 bg-bg-dark  rounded-full
                                mt-5 border-none outline-0 text-white'
                                onClick={ logIn}
                                >
                                    Weldon, Hold on
                                </button>
                                <br />
                                <small className="text-center my-5">
                                   
                                    still under construction
                                   
                                </small>
                            </div>
                        }

                        

                       

              </div>

              
            </section>

            {/* lady part */}
            <section className="container">

                <div className="lady-part">
                   <Inter/>
                </div>

                <div className="customers my-5">
                    <Customers/>
                </div>

            </section>

            {/* customers part */}

            {/* about session with more info */}
           
            <section className="about bg-bg-dark">
                <About/>
                <section className="showcase bg-btn-green">
             <Ads/>
            </section>
            </section>

            {/* ads */}
          
            {/* how it works */}
            <How/>
            
            <div className="success my-2">
                <Story/>
            </div>
           

            {/* footer part */}
            <div className="footer bg-bg-footer ">
                <div className="text-center mt-5">
                  <Team/>
                </div>
                <Footer/>

                <div className="container">
                <div className="more">
                    <p className="text-more pb-4">
                    Prices do not include application taxes.
                    Copyright © 2020 Agencia Marketing Ninja SL All rights reserved. The word mark Setroi is a registered trademark of Agencia Marketing ninja SL SETROI DOES NOT belong to GOOGLE. Neither in its custody any binding element or intellectual property. So there is no relationship between companies. We mention GOOGLE in order to publicize the services that this company provides, without 
                    being linked to the results or procedures of said brand.
                    </p>
                </div>
                </div>

            </div>

           </div>
        </>
    )
}

export const Homepage = () => {

    const {isLoading} = useAuth0()

   
    return (
        <>

            {
                isLoading ?    <Loader/> : <Child/>
            }
         
           
        </>

    )
}

