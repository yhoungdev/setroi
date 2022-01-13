import React from 'react';
import './index.css';
import Story1 from '../../assets/images/images/story.svg';
import Story2 from '../../assets/images/images/stories.svg';
import Avaters from '../../assets/images/images/avaters.svg'
import Qoute from '../../displays/qoute.svg'
import Qoute1 from '../../displays/qoute1.svg'
import Vector from '../../assets/images/images/Vector.svg'

export const Team = () => {
    return (
        <>
       
            <section className="team bg-bg-dark py-5">

                <div className="flex justify-evenly">

                        <div className="half">
                            <img src={Vector} alt="" />
                        
                            <img src={Qoute1} alt="" />
                            
                        </div>


                    <div className="half-right my-5">
                    <h4 className="text-white">
                          Setroi team ready to assist you.
                        </h4>

                        <img src={Avaters} alt="" className="ml-5"/>

                        <button className="bg-btn-green px-3 py-3 rounded-full text-dark my-3">
                            Ask for information
                        </button>

                            <br />
                    
                        <p className=' text-center 
                         many '>
                        REQUEST INFORMATION: Responsible for data: <br /> 
                        Agencia Marketing Ninja, SL E-Mail: hola@setroi.com <br /> Purpose: Manage your request. Legitimation
                        </p>
                        

                    </div>
                </div>

  

            </section>
        </>
    )
}

export const Story = () => {
    return (
        <>
            <section className="story container">
                

                <div className="flex clients sm:flex-col">

                    <div className="story-part">
                        <h4 className="texty top-top">

                            Success stories with SETROI

                        </h4>

                        <p className="bread">
                        Here’s what our clients are sayin
                        using Setroi for their brands and businesses.
                        </p>
                    </div>

                    <div className="img flex">
                     <img src={Story1} alt="" className="story-img"/>
                     <img src={Story2} alt="" className=" ml-3"/>
                    </div>

                </div>

            </section>
        </>
    )
}

