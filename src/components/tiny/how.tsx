import React from 'react'
import { More } from './more';
import { World } from './words';


const How = () => {
    return (
        <>
        <section className="works">

            <div className="works-inner">

                <h2 className="text-center">How does it work?</h2>
                <p className="text-center">We create wonderful results with the best work approach.</p>

            </div>


            {/* clients part */}

         </section>

         <section>

            <div className="container">
             <div className="flex justify-between sm:flex-col ml-5">

                <More
                heading="Selection of themes"
                description=" We elaborate a thematic strategy, according to the searches
                of your sector, product or service to know which ones are ideal
                to work with."
                />

                <More
                heading="Content Writing"
                description=" We elaborate a thematic strategy, according to the searches
                of your sector, product or service to know which ones are ideal
                to work with."
                />

                <More
                heading="Dissemination in digital media"
                description=" We elaborate a thematic strategy, according to the searches
                of your sector, product or service to know which ones are ideal
                to work with."
                />
              




              </div>
            </div>
                

         </section>


    </>
    )
}

export default How;