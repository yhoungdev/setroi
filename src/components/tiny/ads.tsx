import React from 'react';
import '././index.css';
import './ads.css';
import Phone from '../../assets/images/images/phone.svg';
const Ads  = () => {

    return (

        <>
        
         <div className="container ">
       

            <div className="advert flex sm:flex-col-reverse">


            <div className="left">
                    <h2 className="head">
                        Download our app to get going.
                    </h2>

                    <p>
                    Complete management from the same App 
                    to appear in digital newspapers.
                    </p>
            </div>

       

            <div className="right">
                <img src={Phone} alt="" />
            </div>

            </div>

        </div>
       
          
        </>
    )

}

export default Ads;