import React from 'react';
import Lady from '../../assets/images/images/lady.svg'
import First from '../../assets/images/images/first.svg'
import Second from '../../assets/images/images/second.svg'
import Six from '../../assets/images/images/six.svg'
import Four from '../../assets/images/images/four.svg'
import Nine from '../../assets/images/images/nine.svg'
import Seven from '../../assets/images/images/seven.svg'
import Third from '../../assets/images/images/third.svg'
import './index.css'


//defaine details
const medias = {
    
    'images': [
       First, Second, Four, Six, Nine, Seven, Third
    ]

}



console.log(medias.images)

export const Inter =() =>{
    return (
        <>

            <div className="image-part">
                <img src={Lady} alt="" />
            </div>

        </>
    )
}


//module for customers
export const Customers = () => {
    return (
        <>
            <div className="details">
                <h1 className='text-bg-dark'>Guaranteed publication in hundreds of media</h1>
                <p className="description text-center">
                    obtain hundreds of new links to your website to position and 
                    gain trust from your customers.
                </p>


                <div className="medias">

                    {
                        medias.images.map((item, index) => {
                            return (
                                <div className="media" key={index}>
                                    <img src={item} alt="" />
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

