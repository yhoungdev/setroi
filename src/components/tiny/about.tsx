import React from 'react';
import { World } from './words';
import './index.css';
import Vector from '../../assets/images/images/Vector.svg';

const About = () => {

    return (
        <>
            <div className="container ">

                <div className="split flex justify-between py-5 ml-6 sm:flex-col "> 

                    <div className="left">

                        <div className="title">
                            <h3 className="heading text-white-500">
                            Position your page appearing in more than 100 newspapers and digital media
                            </h3>


                            <div className="btn-hold">
                            <button className='text-black bg-btn-green px-3 py-4 rounded-full my-1'>see more information</button>
                            </div>

                            

                            
                        </div>

                        <div className="rounded">
                            <img src={Vector} alt="" className='my-4'/>
                        </div>


                        


                    </div>

                    <div className="right flex sm:flex-col ">

                        <div className="top mr-5">
                            <div className="mt-2">
                                <World title="Increase the visibility of your page"
                                description='From a personalized study of the searches carried out by your potential clients, 
                                the optimal themes are selected to position your business.'
                                />
                        </div>

                        <div className="mt-5">
                                <World title="Increase the visibility of your page"
                                description='From a personalized study of the searches carried out by your potential clients, 
                                the optimal themes are selected to position your business.'
                                />
                        </div>
                        </div>

                        <div className="top">
                            <div className="mt-2">
                                <World title="Increase the visibility of your page"
                                description='From a personalized study of the searches carried out by your potential clients, 
                                the optimal themes are selected to position your business.'
                                />
                        </div>

                        <div className="mt-5">
                                <World title="Increase the visibility of your page"
                                description='From a personalized study of the searches carried out by your potential clients, 
                                the optimal themes are selected to position your business.'
                                />
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;