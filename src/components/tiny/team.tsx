import React from 'react';
import './index.css';
import Story1 from '../../assets/images/images/story.svg';
import Story2 from '../../assets/images/images/stories.svg';

export const Team = () => {
    return (
        <>
       
            <section className="team ">

                <h4 className="text-white">
                  Setroi team ready to assist you.
                </h4>

                <button className="bg-btn-green px-3 py-3 rounded-full text-dark mt-3">
                    Ask for information
                </button>

  

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

