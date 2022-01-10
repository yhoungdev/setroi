import React from 'react';
import './index.css'
import Header from '../../components/common/header/header';
import {Customers, Inter} from '../../components/tiny/info';
import About from '../../components/tiny/about';
const Homepage = () => {
    return (
        <>
            <Header/>

           
            <section className="container  ">
              <div className="note  ">

     
                        <h1 >Appears in <span className='text-btn-green'>newspapers</span> and position in Google</h1>

                        <p>
                            Foget the old positioning strategies that do not work for your business and start to position in the first search results appearing in more than 100 digital newspaper.
                        </p>

                        <button className='pt-3 pb-3 pl-4 pr-4 bg-btn-green  rounded-full mt-5 border-none outline-0'>
                            Lets get started
                        </button>

                        

                       

              </div>

              
            </section>

            {/* lady part */}
            <section className="container">

                <div className="lady-part">
                   <Inter/>
                </div>

                <div className="customers">
                    <Customers/>
                </div>

            </section>

            {/* customers part */}

            {/* about session with more info */}
           
            <section className="about bg-bg-dark">
                <About/>
            </section>
            

        </>

    )
}

export default Homepage;